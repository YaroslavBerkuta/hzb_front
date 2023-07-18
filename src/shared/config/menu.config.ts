export interface IHeaderMenu {
  label: string;
  key: string;
  link: string | null;
  children?: IHeaderMenu[];
  image?: string;
}

export const menuConfig: IHeaderMenu[] = [
  {
    label: "Каталог",
    key: "catalog",
    link: null,
    children: [
      {
        label: "Залізобетонні вироби",
        key: "zb",
        link: "/",
        image: "zb.svg",
      },
      {
        label: "Бетони та розчини",
        key: "beton",
        link: "/",
        image: "beton.svg",
      },
      {
        label: "Столярні вироби",
        key: "stolar",
        link: "/",
        image: "stolar.svg",
      },
      {
        label: "3D Моделі",
        key: "3d",
        link: "/",
        image: "3d.svg",
      },
    ],
  },
  {
    label: "Про нас",
    key: "about",
    link: null,
    children: [
      {
        label: "НОВИНИ",
        key: "news",
        link: "/",
        image: "news.svg",
      },
      {
        label: "Виробничі потужності",
        key: "power",
        link: "/",
        image: "power.svg",
      },
      {
        label: "Випробувальна лабораторія",
        key: "labaratory",
        link: "/",
        image: "labaratory.svg",
      },
      {
        label: "Система управління якістю",
        key: "system",
        link: "/",
        image: "system.svg",
      },
      {
        label: "Реалізовані проекти",
        key: "project",
        link: "/",
        image: "project.svg",
      },
      {
        label: "Нагороди",
        key: "awards",
        link: "/",
        image: "awards.svg",
      },
    ],
  },
  {
    label: "Контакти",
    key: "contact",
    link: null,
    children: [
      {
        label: "Основні",
        key: "contacts",
        link: "/",
        image: "contacts.svg",
      },
      {
        label: "Дистриб’ютори",
        key: "distribution",
        link: "/",
        image: "distribution.svg",
      },
    ],
  },
];
