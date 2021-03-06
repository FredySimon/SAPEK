import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'curso'
})
export class CursoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
   if(arg.length < 3) return value;
   const resultPosts = [];
   for(const post of value){
     if(post.nombre_curso.toLowerCase().indexOf(arg.toLowerCase()) > -1){
       resultPosts.push(post);
     }else if (post.codigo_curso.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultPosts.push(post);
    }
   };
   return resultPosts;
  }

}
