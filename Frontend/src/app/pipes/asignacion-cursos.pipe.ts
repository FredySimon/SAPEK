import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asignacionCursos'
})
export class AsignacionCursosPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg.length < 3) return value;
    const resultPosts = [];
    for (const post of value) {
      if(post.curso.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      } else if(post.jornada.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      } 
    };
    return resultPosts;
  }

}
