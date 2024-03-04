import { SortByPriceDescendingPipe } from './sort-by-price-descending.pipe';

describe('SortByPriceDescendingPipe', () => {
  it('create an instance', () => {
    const pipe = new SortByPriceDescendingPipe();
    expect(pipe).toBeTruthy();
  });
});
