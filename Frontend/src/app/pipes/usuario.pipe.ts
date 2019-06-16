import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuario'
})
export class UsuarioPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
