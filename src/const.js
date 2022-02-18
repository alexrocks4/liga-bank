const HomeId = {
  CALCULATOR: 'calculator',
};

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
  CALCULATOR: `/#${HomeId.CALCULATOR}`,
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
  LIGA_BANK_USER_INFO: 'liga-bank-user-info',
};

const CreditType = {
  MORTGAGE: 'mortgage',
  AUTO: 'auto',
};

const CreditTypeOption = {
  [CreditType.MORTGAGE]: {
    value: CreditType.MORTGAGE,
    label: 'Ипотечное кредитование',
  },
  [CreditType.AUTO]: {
    value: CreditType.AUTO,
    label: 'Автомобильное кредитование',
  },
};

const formTypes = [
  CreditTypeOption[CreditType.MORTGAGE],
  CreditTypeOption[CreditType.AUTO],
];

const FormStep = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
};

const FormConfig = {
  [CreditType.MORTGAGE]: {
    price: {
      label: 'Стоимость недвижимости',
      min: 1200000,
      max: 25000000,
      step: 100000,
      defaultValue: 2000000,
    },
    firstPayment: {
      label: 'Первоначальный взнос',
      minPricePercentage: 10,
      maxPricePercentage: 100,
      stepPricePercentage: 5,
      defaultValue: 200000,
    },
    duration: {
      label: 'Срок кредитования',
      min: 5,
      max: 30,
      step: 1,
      defaultValue: 5,
    },
    capital: {
      label: 'Использовать материнский капитал',
      sum: 470000,
      defaultValue: true,
    },
    min: 500000,
  },
  [CreditType.AUTO]: {
    price: {
      label: 'Стоимость автомобиля',
      min: 500000,
      max: 5000000,
      step: 50000,
      defaultValue: 2000000,
    },
    firstPayment: {
      label: 'Первоначальный взнос',
      minPricePercentage: 20,
      maxPricePercentage: 100,
      stepPricePercentage: 5,
      defaultValue: 400000,
    },
    duration: {
      label: 'Срок кредитования',
      min: 1,
      max: 5,
      step: 1,
      defaultValue: 1,
    },
    casco: {
      label: 'Оформить КАСКО в нашем банке',
      defaultValue: false,
    },
    lifeInsurance: {
      label: 'Оформить Страхование жизни в нашем банке',
      defaultValue: false,
    },
    min: 200000,
  },
};

const DECIMAL_RADIX = 10;

const Noun = {
  YEARS: ['год', 'года', 'лет'],
  RUB: ['рубль', 'рубля', 'рублей'],
};

const KeyName = {
  PLUS: '+',
  MINUS: '-',
  TAB: 'Tab',
  ENTER: 'Enter',
  BACKSPACE: 'Backspace',
  DELETE: 'Delete',
  ARROWLEFT: 'ArrowLeft',
  ARROWRIGHT: 'ArrowRight',
};

const MONTHS_IN_A_YEAR = 12;
const REQUEST_NUMBER_MIN_LENGTH = 4;

export {
  AppRoute,
  Breakpoint,
  ButtonRootElement,
  LocalStorageKey,
  formTypes,
  CreditType,
  FormStep,
  FormConfig,
  DECIMAL_RADIX,
  Noun,
  HomeId,
  CreditTypeOption,
  KeyName,
  MONTHS_IN_A_YEAR,
  REQUEST_NUMBER_MIN_LENGTH
};
