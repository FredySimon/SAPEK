import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inscripcion'
})
export class InscripcionPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg.length < 3 ) return value;
    const resultPosts = [];
    for (const post of value) {
      if(post.estudiante.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      } else if (post.unidad_academica.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultPosts.push(post);
      } else if (post.jornada.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      } else if (post.cuota_mensual.indexOf(arg) > -1){
        resultPosts.push(post)
      }
    };
    return resultPosts
  }

}
