import { useSelector } from 'react-redux';
import { CreditType, FormConfig } from '../const';
import { selectCalculatorCreditType, selectCapital, selectFirstPayment, selectPrice } from '../store/calculatorSlice';

function useCreditSum() {
  const creditType = useSelector(selectCalculatorCreditType);
  const price = useSelector(selectPrice);
  const firstPayment = useSelector(selectFirstPayment);
  const isCapital = useSelector(selectCapital);

  return creditType === CreditType.MORTGAGE && isCapital
    ? (price - firstPayment - FormConfig[creditType].capital.sum)
    : price - firstPayment;
}

export default useCreditSum;
