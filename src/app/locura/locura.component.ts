import { Component} from '@angular/core';

@Component({
  selector: 'app-locura',
  templateUrl: './locura.component.html',
})
export class LocuraComponent {
    array:string[]=[];
    nuevo = '';

    agregar(){
        if (this.nuevo.trim().length===0){
          return;
        }
        console.log(this.nuevo);
        this.array.push(this.nuevo);
        console.log(this.array);
        this.nuevo=''
          
     ; 
    }
}