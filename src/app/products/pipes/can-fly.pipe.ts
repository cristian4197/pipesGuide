import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})

export class canflyPipe implements PipeTransform {
    transform(value: boolean): string {
        return (value) ? 'Si vuela': 'No vuela';
    }
}