import { DateTime, Duration } from 'luxon';

export class Common {
  static formatShort(number: number) {
    return number.toLocaleString('en', {
      notation: 'compact',
      compactDisplay: 'short',
    });
  }

  static formatCurrency(number: number) {
    return new Intl.NumberFormat().format(number);
  }

  static convertDateRelative(startDate: Date, endDate: Date) {
    const { days, hours, minutes, seconds } = Duration.fromMillis(
      DateTime.fromJSDate(endDate).diff(DateTime.fromJSDate(startDate))
        .milliseconds
    )
      .shiftTo('days', 'hours', 'minutes', 'seconds')
      .toObject();

    return { days, hours, minutes, seconds };
  }

  static convertDateToString({ days, hours, minutes, seconds }: any) {
    if (days) return `${Math.round(days)} วันที่แล้ว`;
    if (hours) return `${Math.round(hours)} ชั่วโมงที่แล้ว`;
    if (minutes) return `${Math.round(minutes)} นาทีที่แล้ว`;
    if (seconds) return `${Math.round(seconds)} วินาทีที่แล้ว`;
    return '';
  }
}
