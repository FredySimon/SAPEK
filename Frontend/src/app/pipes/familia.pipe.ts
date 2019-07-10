import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'familia'
})
export class FamiliaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg.length < 3) return value;
    const resultPosts = [];
    for (const post of value) {
      if(post.nombre_familia.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      } else if (post.encargado.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      }
    };
    return resultPosts;
  }

}
