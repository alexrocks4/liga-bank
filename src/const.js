const AppRoute = {
  ROOT: '/',
  DEPOSITS: 'deposits',
  ASSURANCE: 'assurance',
  ONLINE_SERVICES: 'online-services',
  SERVICES: '/services',
  CREDIT: '/credit',
  CONVERTER: '/converter',
  CONTACTS: '/contacts',
  QUESTION: '/question',
  LOGIN: '/login',
  PASSWORD: 'password',
  CALCULATOR: '/#calculator',
};

const Breakpoint = {
  SMALL: 320,
  MEDIUM: 768,
  LARGE: 1024,
};

const ButtonRootElement = {
  ROUTER_LINK: 'router-link',
  ROUTER_NAV_LINK: 'router-nav-link',
  BUTTON: 'button',
  LINK: 'a',
};

const LocalStorageKey = {
  LIGA_BANK_AUTH: 'liga-bank-auth',
};

const CreditType = {
  MORTGAGE: 'mortgage',
  AUTO: 'auto',
};

const formTypes = [
  { value: CreditType.MORTGAGE, label: 'Ипотечное кредитование' },
  { value: CreditType.AUTO, label: 'Автомобильное кредитование' },
];

export {
  AppRoute,
  Breakpoint,
  ButtonRootElement,
  LocalStorageKey,
  formTypes,
  CreditType
};
