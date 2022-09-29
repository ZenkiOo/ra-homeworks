export default class YandexData {
  constructor() {
    this.data = {
      tabs: [
        { id: 0, text: 'Сейчас в СМИ', active: true },
        { id: 1, text: 'в Германии', active: false },
        { id: 2, text: 'Рекомендуем', active: false },
      ],
      news: [
        {
          id: 3,
          text: 'Путин упростил получение автомобильных номеров',
          link: '#',
          itemImg: {
            href: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHn5TWIznjbxH3VaICX_ZQz2CDly2dq1ikw&usqp=CAU`,
            name: 'image',
          },
        },
        {
          id: 4,
          text: 'В команде зеленского раскрыли план реформ на украине',
          link: '#',
          itemImg: {
            href: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHn5TWIznjbxH3VaICX_ZQz2CDly2dq1ikw&usqp=CAU`,
            name: 'image',
          },
        },
        {
          id: 5,
          text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
          link: '#',
          itemImg: {
            href: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHn5TWIznjbxH3VaICX_ZQz2CDly2dq1ikw&usqp=CAU`,
            name: 'image',
          },
        },
        {
          id: 6,
          text: 'Суд закрыл дело Демпартии США против России',
          link: '#',
          itemImg: {
            href: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHn5TWIznjbxH3VaICX_ZQz2CDly2dq1ikw&usqp=CAU`,
            name: 'image',
          },
        },
        {
          id: 7,
          text: 'На украине призвали создать ракеты для удара по Москве',
          link: '#',
          itemImg: {
            href: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHn5TWIznjbxH3VaICX_ZQz2CDly2dq1ikw&usqp=CAU`,
            name: 'image',
          },
        },
      ],
      currency: [
        {
          id: 8,
          name: 'USD MOEX',
          value: '63,52',
          diff: '+0,09',
        },
        {
          id: 9,
          name: 'EUR MOEX',
          value: '70,86',
          diff: '+0,014',
        },
        {
          id: 10,
          name: 'НЕФТЬ',
          value: '64,90',
          diff: '+1,63%',
        },
      ],
      mainNewsItem: {
        id: 11,
        img: {
          href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSEOzYac_bQnmb3BEfauHlsZD77pCzKqjhw&usqp=CAU',
          name: 'image',
        },
        title: 'Работа над ошибками',
        text: 'Смотрите на Яндексе и запоминайте',
      },
      searchTabs: [
        {
          id: 12,
          href: '#',
          text: 'Видео',
        },
        {
          id: 13,
          href: '#',
          text: 'Картинки',
        },
        {
          id: 14,
          href: '#',
          text: 'Новости',
        },
        {
          id: 15,
          href: '#',
          text: 'Карты',
        },
        {
          id: 16,
          href: '#',
          text: 'Маркет',
        },
        {
          id: 17,
          href: '#',
          text: 'Переводчик',
        },
        {
          id: 18,
          href: '#',
          text: 'Эфир',
        },
        {
          id: 19,
          href: '#',
          text: 'ещё',
        },
      ],
      randomSearch: {
        link: 'https://www.google.com/search?q=%D1%84%D0%B0%D0%B7%D0%B0+%D0%BB%D1%83%D0%BD%D1%8B+%D1%81%D0%B5%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F&oq=%D1%84%D0%B0%D0%B7%D0%B0+%D0%BB%D1%83%D0%BD%D1%8B+%D1%81%D0%B5%D0%B3%D0%BE%D0%B4%D0%BD%D1%8F&aqs=chrome..69i57j0i402j0i512l8.10503j0j1&sourceid=chrome&ie=UTF-8',
        text: 'фаза луны сегодня',
      },
      advertising: {
        link: '#',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST7leG6pbqUYZyfARIGaHubcFrfJIB78X6Ag&usqp=CAU',
      },
      weather: {
        now: '+17',
        morning: '+17',
        evening: '+20',
      },
      haunted: [
        {
          id: 20,
          href: '#',
          text: 'Недвижимость - о сталинках',
        },
        {
          id: 21,
          href: '#',
          text: 'Маркет - люстры и светильники',
        },
        {
          id: 22,
          href: '#',
          text: 'Авто.ру - привод 4х4 до 500 000',
        },
      ],
      timeTable: [
        {
          id: 23,
          time: '02:00',
          name: 'ТНТ. Best',
          channel: 'THT International',
          href: '#',
        },
        {
          id: 24,
          time: '02:15',
          name: 'Джинглики',
          channel: 'Карусель',
          href: '#',
        },
        {
          id: 25,
          time: '02:25',
          name: 'Наедине со всеми',
          channel: 'Первый',
          href: '#',
        },
      ],
      broadcast: [
        {
          id: 23,
          name: 'Управление как искусство',
          channel: 'Успех',
          href: '#',
        },
        {
          id: 24,
          name: 'Ночь Мир в это время',
          channel: 'earthTV',
          href: '#',
        },
        {
          id: 25,
          name: 'Андрей Возн...',
          channel: 'Совершенно секретно',
          href: '#',
        },
      ],
    };
  }
}
