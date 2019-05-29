import {Input} from '../models/input';
import {enToBnNumber} from '../helpers';

const years = [];

for (let i = 10; i < 20; i++) {
  const year = `20${i}`;
  years.push({
    id: year,
    name: enToBnNumber(year)
  });
}

export const Years = new Input('পরীক্ষার সন', 'select', years);
