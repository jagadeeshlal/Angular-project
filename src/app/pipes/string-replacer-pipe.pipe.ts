import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringReplacerPipe'
})
export class StringReplacerPipePipe implements PipeTransform {

  transform(value: any, arg1: string, arg2:string): any {
    console.log("arguments",arg1,arg2)
    if(arg1 == undefined){
      return value.replace(' ','_');
    }else if(arg2 == undefined && arg1 != undefined){
      return value.replace(' ',arg1);
    }else if (arg1 && arg2) {
      return value.replace(arg1,arg2);
      
    }
  }

}
