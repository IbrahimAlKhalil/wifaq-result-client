import {Input} from '../models/input';

export interface Marhala {
  id: number;
  name: string;
}

export const marhalas: Marhala[] = [
  {
    id: 1,
    name: 'তাকমিল',
  },

  {
    id: 2,
    name: 'ফযীলত'
  },

  {
    id: 3,
    name: 'সানাবিয়া উলইয়া'
  },
  {
    id: 5,
    name: 'মুতাওয়াসসিতাহ'
  },

  {
    id: 6,
    name: 'ইবতিদাইয়্যাহ'
  },

  {
    id: 7,
    name: 'হিফযুল কুরআন'
  },

  {
    id: 8,
    name: 'ইলমুত তাজবীদ ওয়াল কিরাআত'
  }
];

export const marhalaInputs = new Input('মারহালা', 'select', marhalas);
