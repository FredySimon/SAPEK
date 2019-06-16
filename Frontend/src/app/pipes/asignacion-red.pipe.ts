import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asignacionRed'
})
export class AsignacionRedPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg.length < 3) return value;
    const resultPosts = [];
    for (const post of value) {
      if(post.red_de_estudio.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      } 
    };
    return resultPosts;
  }

}
