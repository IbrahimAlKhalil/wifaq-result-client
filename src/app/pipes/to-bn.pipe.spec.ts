import {ToBnPipe} from './to-bn.pipe';

describe('ToBnPipe', () => {
  let pipe;
  it('create an instance', () => {
    pipe = new ToBnPipe();
    expect(pipe).toBeTruthy();
  });

  it('Convert to number', () => {
    expect(pipe.transform(1234567890)).toEqual('১২৩৪৫৬৭৮৯০');
  });
});
