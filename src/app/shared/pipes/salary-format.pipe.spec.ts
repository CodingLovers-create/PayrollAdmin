import { SalaryFormatPipe } from './salary-format.pipe';

describe('CurrencyFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new SalaryFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
