import {marhalas} from './data/marhalas';

export function enToBnNumber(enNums: string | number) {
  const str = enNums.toString();
  const translations = {
    0: '০',
    1: '১',
    2: '২',
    3: '৩',
    4: '৪',
    5: '৫',
    6: '৬',
    7: '৭',
    8: '৮',
    9: '৯',
  };

  return str.replace(/\d/gm, (match) => {
    return translations[match];
  });
}

export function getMarhala(id: number): string {
  const marhala = marhalas.filter(item => item.id === id)[0];

  return marhala.name;
}
