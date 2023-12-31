import { Client } from '@notionhq/client';
import { OrderPayload } from '../components/FormRegistration/types';
import { contestCategories } from '../ulis/contestCategories';
import { Translate } from 'next-translate';
import { CreatePageParameters } from '@notionhq/client/build/src/api-endpoints';

interface saveRegistrationToNotionProps {
  form: OrderPayload;
  t: Translate;
}

export const saveRegistrationToNotion = async (props: saveRegistrationToNotionProps) => {
  const { form, t } = props;

  const notion = new Client({ auth: process.env.NOTION_TOKEN });

  const fullPassDiscountSelect = () => {
    switch (form.fullPassDiscount) {
      case '30%':
        return '30% Certificate';

      case '50%':
        return '50% Certificate';

      case 'free':
        return '100% Certificate';

      default:
        'none';
        return null;
    }
  };

  const wsSelected = form.workshops.filter((ws) => ws.selected);

  const singleWs = wsSelected.map((ws) => {
    const title = ws.translations.en.title;
    const description = ws.translations.en.description;
    return { name: title + ' – ' + description };
  });

  const selectedStyles = form.soloContest.filter((cat) => cat.selected);
  const contestSoloStyles = selectedStyles.map((category) => {
    return { name: category.translations.en.categoryTitle };
  });

  const contestGroups = form.groupContest.map((group) => {
    // Category style translation
    const isDuoType = group.type === 'duo';
    const isGroupType = group.type === 'group';
    const contestCategory = contestCategories.find(
      (cat) =>
        (cat.ageGroup === form.contestAgeGroup && cat.isDuoCategory === isDuoType) ||
        cat.isGroupCategory === isGroupType
    );
    const catStyle = contestCategory?.categories.find(
      (style) => style.translations.en.categoryTitle === group.style
    );

    return {
      name:
        t(`form.contest.groups.${group.type}`) +
        ' | ' +
        group.name +
        ' | ' +
        group.qty +
        ' pers. | ' +
        catStyle?.translations.en.categoryTitle,
    };
  });

  const worldShowGroup = form.isWorldShowGroup
    ? form.worldShowGroup?.name + ' | ' + form.worldShowGroup?.qty + ' pers.'
    : '';

  const notionPayload: CreatePageParameters = {
    parent: {
      database_id: process.env.NOTION_DATABASE_LIVE!,
      type: 'database_id',
    },
    properties: {
      Name: {
        type: 'title',
        title: [
          {
            type: 'text',
            text: { content: form.name },
          },
        ],
      },
      Surname: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: { content: form.surname },
          },
        ],
      },
      'Stage name': {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: { content: form.stageName },
          },
        ],
      },
      Age: {
        type: 'number',
        number: Number.parseInt(form.age as unknown as string),
      },
      Social: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: { content: form.social },
          },
        ],
      },
      Country: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: { content: form.country },
          },
        ],
      },
      City: {
        type: 'rich_text',
        rich_text: [
          {
            type: 'text',
            text: { content: form.city },
          },
        ],
      },
      Phone: {
        type: 'phone_number',
        phone_number: form.tel,
      },
      Email: {
        type: 'email',
        email: form.email,
      },
      FP: {
        type: 'checkbox',
        checkbox: form.isFullPass,
      },
      'Full Pass discount': {
        type: 'select',
        select: fullPassDiscountSelect() ? { name: fullPassDiscountSelect()! } : null,
      },
      'Certificate source': {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: form.fullPassDiscountSource || '',
            },
          },
        ],
      },
      'Single WS': {
        type: 'multi_select',
        multi_select: singleWs,
      },
      'Solo Contest': {
        type: 'checkbox',
        checkbox: !!form.isSoloContest,
      },
      'Age group': {
        type: 'select',
        select: form.isSoloContest
          ? { name: t(`form.contest.ageGroups.${form.contestAgeGroup}`)! }
          : null,
      },
      Level: {
        type: 'select',
        select:
          form.isSoloContest && form.contestLevel
            ? { name: t(`form.contest.levels.${form.contestLevel}`)! }
            : null,
      },
      Styles: {
        type: 'multi_select',
        multi_select: contestSoloStyles!,
      },
      'Group / Duo contest': {
        type: 'checkbox',
        checkbox: !!form.isGroupContest,
      },
      'Groups/Duos': {
        type: 'multi_select',
        multi_select: contestGroups,
      },
      'Show solo': {
        type: 'checkbox',
        checkbox: !!form.isWorldShowSolo,
      },
      'Show group': {
        type: 'rich_text',
        rich_text: [
          {
            text: {
              content: worldShowGroup,
            },
          },
        ],
      },
      Total: {
        type: 'number',
        number: form.total,
      },
    },
  };

  try {
    await notion.pages.create(notionPayload);
  } catch (error) {
    console.log(error);
  }
};
