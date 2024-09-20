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
      res = (prev / current).toFixed(5);
      break;
      
    default:
      res = 0;
  }
  return res.toString();
};
