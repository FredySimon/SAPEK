import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carrera'
})
export class CarreraPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg.length < 3) return value;
    const resultPost = [];
    for(const post of value){
      if(post.nombre_carrera.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPost.push(post);
      }else if (post.codigo.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPost.push(post);
      }
    };
    return resultPost;
  }

}
