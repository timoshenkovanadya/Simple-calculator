import { SymbolType } from './controller.types';

export const makeOperation = (
  symbol: SymbolType,
  prevDirty: string,
  currentDirty: string,
) => {
  const prev = Number(prevDirty.replace(',', ''));
  const current = Number(currentDirty.replace(',', ''));
  let res;
  switch (symbol) {
    case '+':
      res = prev + current;
      break;
    case '-':
      res = prev - current;
      break;
    case 'X':
      res = prev * current;
      break;
    case '/':
        if (current === 0) {res = "Error: !/0"}
        else if ((prev / current).toString().split('.')[1]?.length > 5) {
            res = (prev / current).toFixed(5);
        } else {
            res = prev / current;
        }
      
      break;
      
    default:
      res = 0;
  }
  return res.toString();
};
