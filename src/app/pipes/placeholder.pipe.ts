import { Pipe, PipeTransform } from '@angular/core';
import { PLACEHOLDER_TAG } from '../constants';

@Pipe({ name: 'placeholderLabel' })
export class PlaceholderLabelPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(PLACEHOLDER_TAG, '');;
  }
}
