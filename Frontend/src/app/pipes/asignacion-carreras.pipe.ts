import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asignacionCarreras'
})
export class AsignacionCarrerasPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg.length < 3) return value;
    const resultPosts = [];
    for (const post of value) {
       if(post.jornada.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      } else if(post.grado.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      } 
    };
    return resultPosts;
  }

}
