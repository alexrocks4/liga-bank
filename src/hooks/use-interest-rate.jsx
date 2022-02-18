import { useSelector } from 'react-redux';
import { getAutoInetrestRate, getMortgageInterestRate } from '../app/app';
import { CreditType } from '../const';
import { selectCalculatorCreditType, selectCasco, selectFirstPaymentPercent, selectLifeInsurance, selectPrice } from '../store/calculatorSlice';

function useInterestRate() {
  const creditType = useSelector(selectCalculatorCreditType);
  const price = useSelector(selectPrice);
  const firstPaymentPercent = useSelector(selectFirstPaymentPercent);
  const isCasco = useSelector(selectCasco);
  const isLifeInsurance = useSelector(selectLifeInsurance);

  let interestRate = 0;

  switch (creditType) {
    case CreditType.MORTGAGE:
      interestRate = getMortgageInterestRate(firstPaymentPercent);
      break;
    case CreditType.AUTO:
      interestRate = getAutoInetrestRate(price, isCasco, isLifeInsurance);
      break;
    default:
      break;
  }

  return interestRate;
}

export default useInterestRate;
