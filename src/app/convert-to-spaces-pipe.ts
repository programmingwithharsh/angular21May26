import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces',
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    // console.log({ args }); // added in ES6
    // console.log({ value });
    return value.replace(args[0], ' ');
  }
}
