import { ShortedPipe } from './shorted.pipe';

describe('ShortedPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortedPipe();
    expect(pipe).toBeTruthy();
  });
});
