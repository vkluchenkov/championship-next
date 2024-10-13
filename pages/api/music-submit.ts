import type { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File } from 'formidable';
import path from 'path';
import { FormFields, FormData } from '@/src/types/music.types';
import * as ftp from 'basic-ftp';
import sanitize from 'sanitize-filename';
import getT from 'next-translate/getT';
import { musicAdminEmail } from '@/src/email/musicAdminEmal';
import { senderEmail, senderName } from '@/src/ulis/constants';
import { sendMail } from '@/src/email/sendMail';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let status = 200,
    resultBody = { status: 'ok', message: 'Files were uploaded successfully' };

  const t = await getT('en', 'music');

  const form = new formidable.IncomingForm();

  const formData = await new Promise<FormData | undefined>((resolve, reject) => {
    let file: File;

    const fields: FormFields = {
      event: 'contest',
      type: 'solo',
      audioLength: 0,
      email: '',
    };

    form.on('file', (field, formFile) => {
      file = formFile;
    });

    form.on('field', (field, value) => {
      (fields as any)[field] = value === 'undefined' ? undefined : value;
    });

    form.on('end', () => resolve({ file, fields }));
    form.on('error', (err) => reject(err));

    form.parse(req, () => {
      //
    });
  }).catch((e) => {
    console.log(e);
    status = 500;
    resultBody = {
      status: 'fail',
      message: 'Upload error',
    };
  });

  if (formData) {
    const { event, name, surname, type, groupName, ageGroup, level, category, audioLength } =
      formData.fields;

    const tempPath = formData.file.filepath;
    const extName = path.extname(formData.file.originalFilename!);
    const fileName = () => {
      if (type === 'duo' || type === 'group')
        return sanitize(groupName!) + '_' + Math.round(audioLength) + 'sec' + extName;
      else
        return (
          sanitize(name!) +
          ' ' +
          sanitize(surname!) +
          '_' +
          Math.round(audioLength) +
          'sec' +
          extName
        );
    };

    // FTP
    const ftpClient = new ftp.Client();
    // ftpClient.ftp.verbose = true;

    const ftpDir = process.env.FTP_DIR!;
    console.log(ftpDir);

    const ftpUploadDir = () => {
      if (event === 'worldShow') {
        if (type === 'solo') return `/Show/solo/`;
        else return `/Show/Groups and Duos/`;
      }

      if (event === 'contest') {
        const isCategory = !!category;
        const safeCategory = sanitize(category!);
        return (
          '/Contest/' +
          ageGroup! +
          '/' +
          (level != undefined ? level + '/' : '') +
          (type === 'duo' ? 'Duos/' : '') +
          (type === 'group' ? 'Groups/' : '') +
          (isCategory ? safeCategory + '/' : '')
        );
      }
      return '';
    };

    // console.log(ftpUploadDir());

    try {
      await ftpClient.access({
        host: process.env.FTP_HOST,
        user: process.env.FTP_USER,
        password: process.env.FTP_PASSWORD,
        secure: false,
      });

      // await ftpClient.ensureDir(ftpDir + ftpUploadDir());
      // await ftpClient.uploadFrom(tempPath, fileName());

      // Emails
      const getSubj = () => {
        if (name && surname) return t('email.title') + ' ' + name + ' ' + surname;
        if (groupName) return t('email.title') + ' ' + groupName;
        return t('email.title');
      };

      const adminEmailContent = musicAdminEmail({
        form: formData.fields,
        t: t,
        subj: getSubj(),
      }).html;
      const adminEmailErrors = musicAdminEmail({
        form: formData.fields,
        t: t,
        subj: getSubj(),
      }).errors;

      const adminMailPayload = {
        senderEmail: senderEmail,
        senderName: senderName,
        recipientEmail: senderEmail,
        recipientName: senderName,
        recipientSubj: getSubj(),
        mailContent: adminEmailContent,
      };

      // sendMail(adminMailPayload);
    } catch (error) {
      console.log(error);
      status = 500;
      resultBody = {
        status: 'fail',
        message: 'FTP Upload error',
      };
    }
  }

  res.status(status).json(resultBody);
}
