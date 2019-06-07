import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'red'
})
export class RedPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg == '' || arg.length < 3) return null;
    if(arg.length < 3) return value;
    const resultPosts = [];
    for(const post of value){
      if(post.nombre_red.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      }
    };
    return resultPosts;
  }

}
