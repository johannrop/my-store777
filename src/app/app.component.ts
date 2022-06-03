import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  box={
    ancho:100,
    alto:100,
    fondo:'red'
  }

  color: string = 'verde';

    widthImg=10;


  registro={
    usuario:'',
    correo:'',
    password:''
  }



  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/album.jpeg',
      category: 'Juguetes',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/album.jpeg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpeg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/album.jpeg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/album.jpeg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/album.jpeg'
    }
  ];

  names : string[] =['johann','Tesla','Turing','C. Lilly'];
  newName= '';

  name = 'Johann';
  age= 33;
  img= 'https://source.unsplash.com/random';
  btnDisalbe=true;

  person={
    btnDisalbe:true,
    name:'Adolft',
    age:72,
    avatar: 'https://source.unsplash.com/random'
  }

  toggleButton(){
    this.btnDisalbe=!this.btnDisalbe;
  }

  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event:Event){
    const element =event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event:Event){
    const element =event.target as HTMLInputElement;
    this.person.name = element.value;

  }

  addName(){
    this.names.push(this.newName);
    this.newName='';
  }

    deleteName(index: number){
      this.names.splice(index,1);
    }

    envRegistro(){
      console.log(this.registro);
    }


}
