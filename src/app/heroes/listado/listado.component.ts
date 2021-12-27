import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  Heroes: string[]= ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
 //HeroesBorradosList: string[]=[]; no me sirvio
  heroeBorrado:string='';
  //heroeBorradoClick=false; mi solucion al click

  borrarHeroe(){
    console.log('Borrando...');

    //const heroeBorrado = this.Heroes.splice(0, 1);
    this.heroeBorrado = this.Heroes.pop() || '';
    //this.heroeBorradoClick=true; mi solucion al click

    



    // console.log('Borrado: ', heroeBorrado);

    //this.HeroesBorradosList.push(this.Heroes.splice(0, 1)[0]); no me sirvio
    
  }

}
