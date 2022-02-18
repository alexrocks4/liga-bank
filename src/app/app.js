import { CreditType, MONTHS_IN_A_YEAR } from '../const';

const InterestRate = {
  [CreditType.MORTGAGE]: {
    targetFirstPaymentPercent: 15,
    low: '8.50',
    high: '9.40',
  },
  [CreditType.AUTO]: {
    targetPrice: 2000000,
    ultraLow: '3.50',
    low: '8.50',
    medium: '15',
    high: '16',
  },
};

const MINIMUM_INCOME_PART_IN_PERCENTS = 45;

const getMortgageInterestRate = (firstPaymentPercent) => (
  firstPaymentPercent < InterestRate[CreditType.MORTGAGE].targetFirstPaymentPercent
    ? InterestRate[CreditType.MORTGAGE].high
    : InterestRate[CreditType.MORTGAGE].low
);

const getAutoInetrestRate = (price, isCasco, isLifeInsurance) => {
  if (isCasco && isLifeInsurance) {
    return InterestRate[CreditType.AUTO].ultraLow;
  }

  if (isCasco || isLifeInsurance) {
    return InterestRate[CreditType.AUTO].low;
  }

  return price >= InterestRate[CreditType.AUTO].targetPrice
    ? InterestRate[CreditType.AUTO].medium
    : InterestRate[CreditType.AUTO].high;
};

const getMonthlyPayment = (creditSum, interestRate, duration) => {
  const monthlyRate = interestRate / (MONTHS_IN_A_YEAR * 100);
  return Math.round(
    creditSum * (monthlyRate + monthlyRate / (Math.pow(1 + monthlyRate, duration * MONTHS_IN_A_YEAR) - 1)));
};

const getRequiredIncome = (monthlyPayment) => Math.round(monthlyPayment * 100 / MINIMUM_INCOME_PART_IN_PERCENTS);

export {
  getMortgageInterestRate,
  getAutoInetrestRate,
  getMonthlyPayment,
  getRequiredIncome
};
