export type Data = {
  label: string;
  image: string;
  mainImage?: string;
  desc: string;
  info: string;
  secDesc: string;
  galery: string[];
  url: string;
};

export const data: Data[] = [
  {
    label: 'Svetainė Lengva Sija',
    image: '/assets/images/Paveikslelis5.svg',
    mainImage: '/assets/images/sija-main.png',
    desc: 'Programavimas',
    info: 'Svetainė Lengva Sija, buvo pats pirmas mano sukurtas projektas. Kurdama svetainę įdėjau visą savo entuziazmą ir pastangas, norėdama sužinoti, kaip veikia web puslapiai, ir pritaikyti savo žinias kūrybiniams sprendimams. Šis projektas man suteikė unikalią patirtį ir supratimą apie tai, kaip galiu paversti savo idėjas realiais veikiančiais tinklalapiais.',
    secDesc: 'Svetainės estetika.',
    galery: ['/assets/images/sija-1.png', '/assets/images/sija-2.png'],
    url: 'https://github.com/emoshi02',
  },
  {
    label: 'Portfolio',
    image: '/assets/images/Paveikslelis2.svg',
    mainImage: '/assets/images/portfolio-main.png',
    desc: 'UX/UI dizainas',
    info: 'Mano portfolio yra nuolat tobulinamas projektas, kuris šiuo metu naudojamas demonstruoti mano sukurtus darbus bei kūrybinius sprendimus. Kurdama šį portfolio susidūriau su naujais iššūkiais, įtvirtinau anksčiau įgytas žinias. Džiaugiuosi galėdama rodyti jį jums.',
    secDesc:
      'Portfolio buvo pradėtas kurti nuo juodai baltų vielinių karkasų, vėliau buvo sukurta galutinė versija su spalvomis ir šriftais, animacijomis.',
    galery: [
      '/assets/images/portfolio-1.png',
      '/assets/images/portfolio-2.png',
      '/assets/images/portfolio-3.png',
    ],
    url: 'https://www.figma.com/file/3OqFe7ZbyZOkWQvnheS7JJ/Portfolio?type=design&node-id=0-1&mode=design&t=PkqQvw4T5GoKFF8B-0',
  },
  {
    label: 'Programėlė Visitus',
    image: '/assets/images/Paveikslelis1.svg',
    mainImage: '/assets/images/visitus-main.png',
    desc: 'UX/UI dizainas',
    info: 'Programėlė Visitus - interaktyvus laisvalaikio veiklos rekomendacijų prototipas. Sukurtas 2021 metais naudojant programėlę Figma. Tai yra universitetinis projektas skirtas studentams, ieškantiems įdomių užsiėmimų Vilniuje.',
    secDesc:
      'Prototipas buvo pradėtas kurti nuo juodai baltų vielinių karkasų, vėliau buvo sukurta galutinė versija su spalvomis ir šriftais, animacijomis.',
    galery: [
      '/assets/images/visitus-1.png',
      '/assets/images/visitus-2.png',
      '/assets/images/visitus-3.png',
    ],
    url: 'https://www.figma.com/file/2KFUZAEJvIRDI2fmUTtOrG/Interactive-prototype-of-the-mobile-app-VISITUS?type=design&mode=design&t=FUaAxcOLLrmGCbol-0',
  },
  {
    label: 'Google Kalendorius',
    image: '/assets/images/Paveikslelis4.svg',
    mainImage: '/assets/images/calendar-main.png',
    desc: 'Programavimas',
    info: 'Google kalendorius - praktikos metu atliktas projektas. Šis projektas buvo įgyvendintas remiantis Google kalendoriaus struktūra, pritaikant originalius sprendimus ir funkcionalumą, kuris atitiktų ir papildytų pagrindinį šio įrankio potencialą.',
    secDesc:
      'Kalendoriaus vizualinė estetika, pavaizduoti įvykiai, pagrindinio ir mažojo kalendoriaus data.',
    galery: ['/assets/images/calendar-1.png', '/assets/images/calendar-2.png'],
    url: 'https://github.com/emoshi02',
  },
];
