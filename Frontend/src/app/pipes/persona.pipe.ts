import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persona'
})

export class PersonaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg.length < 3) return value;
    const resultPosts = [];
    for (const post of value) {
      if(post.primer_nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      } else if (post.primer_apellido.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      } else if(post.genero.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      }else if(post.estado_civil.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      }else if(post.religion.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      }else if(post.direccion.departamento.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      }else if(post.direccion.municipio.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultPosts.push(post);
      }
    };
    return resultPosts;
  }

}
