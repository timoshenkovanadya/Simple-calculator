import { SymbolType } from './controller.types';

export const makeOperation = (
  symbol: SymbolType,
  prevDirty: string,
  currentDirty: string,
) => {
  const prev = Number(prevDirty.replace(/(^\.)|(\.$)/, ''));
  const current = Number(currentDirty.replace(/(^\.)|(\.$)/, ''));
  let res: number;
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
      if (current === 0) {
        res = 0;
        alert('ERROR: dividing by 0');
      } else {
        res = prev / current;
      }

      break;

    default:
      res = 0;
  }
  const maxDisplayLength = 9;
  const strRes = res.toString();
  const dirtyLength = strRes.replace('.', '').length;
  if (dirtyLength > maxDisplayLength) {
    if (strRes.includes('.')) {
      const integerPart = strRes.indexOf('.');
      const fixedLength = maxDisplayLength - integerPart;
      return Number(res.toFixed(fixedLength)).toString();
    } else {
      const dirtyCut = strRes.slice(0, maxDisplayLength);
      const nextNumberForRound = Number(strRes[maxDisplayLength]);
      return nextNumberForRound < 5
        ? Number(dirtyCut).toExponential(6)
        : Number(dirtyCut + 1).toExponential(6);
    }
  }
  return strRes;
};
