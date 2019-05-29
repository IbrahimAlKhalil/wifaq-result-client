import {Pipe, PipeTransform} from '@angular/core';
import {enToBnNumber} from '../helpers';

@Pipe({
  name: 'toBn'
})
export class ToBnPipe implements PipeTransform {
  private months = {
    Jan: 'জানুয়ারি',
    Feb: 'ফেব্রুয়ারি',
    Mar: 'মার্চ',
    Apr: 'এপ্রিল',
    May: 'মে',
    Jun: 'জুন',
    Jul: 'জুলাই',
    Aug: 'অগাস্ট',
    Sep: 'সেপ্টেম্বর',
    Oct: 'অক্টোবর',
    Nov: 'নভেম্বর',
    Dec: 'ডিসেম্বর'
  };

  transform(value: string | number): any {
    return enToBnNumber(value)
      .replace(
        /jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/i,
        match => this.months[match]
      );
  }

}
