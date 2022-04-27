import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('ReversePipe will return empty for invalid input', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform(null)).toEqual('');
  });
  it('simple case', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('ab')).toEqual('ba');
  });
});
