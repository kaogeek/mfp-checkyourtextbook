export class NumberFormat {
  static formatShort(number: number) {
    return number.toLocaleString('en', {
      notation: 'compact',
      compactDisplay: 'short',
    });
  }

  static formatCurrency(number: number) {
    return new Intl.NumberFormat().format(number);
  }
}
