import {SortPipe} from './sort.pipe';

describe('SortPipe', () => {
  it('create an instance', () => {
    const pipe = new SortPipe();
    expect(pipe).toBeTruthy();
  });

  it('return empty array', () => {
    const pipe = new SortPipe();
    expect(pipe.transform(null)).toEqual([]);
  });

  it('single element', () => {
    const serverProduction = {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      started: new Date(15, 1, 2017)
    };
    const serverTest = {
      instanceType: 'medium',
      name: 'test',
      status: 'stable',
      started: new Date(15, 1, 2017)
    };
    const pipe = new SortPipe();
    expect(pipe.transform([serverProduction, serverTest])).toEqual([serverTest, serverProduction]);
  });
});
