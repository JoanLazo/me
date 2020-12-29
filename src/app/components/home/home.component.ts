import { Component, OnInit, HostListener  } from '@angular/core';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }
  progreso: number;
  window;
  mostrar;
  skill;
  seguir;
  monedas;
  heart: boolean = false;
  heart2: boolean = false;
  heart3: boolean = false;
  primero:boolean = false;
  b:boolean = false;
  c:boolean = false;
  d:boolean = false;
  e:boolean = false;
  f:boolean = false;
  g:boolean = false;
  h:boolean = false;
  i:boolean = false;
  j:boolean = false;
  k:boolean = false;
  l:boolean = false;
  ngOnInit() {
    this.progreso = 10;
    this.monedas = 0;
    $(".my_audio").trigger('load');
    $(".moneda").trigger('load');
    $(".game_over").trigger('load');
  }
  play_audio(task, valor) {
    if (task == 'play') {
         $(".my_audio").trigger('play');
         const puntos = 5;
         const jugar = valor;
         const acumulado = puntos + jugar;
         this.progreso += acumulado;
         this.monedas += puntos;
    }
    if (task == 'stop') {
         $(".my_audio").trigger('pause');
         $(".my_audio").prop("currentTime",0);
    }
     this.heart3 = false;
     this.heart2 = false;
     this.heart = false;
  
  }
  play_audio2(task, valor) {
    if (task == 'play') {
         $(".moneda").trigger('play');
         const puntos = 5;
         const jugar = valor;
         const acumulado = jugar + puntos;
         this.progreso += acumulado;
         this.monedas += puntos;
    }
    if (task == 'stop') {
         $(".moneda").trigger('pause');
         $(".moneda").prop("currentTime",0);
    }
    setTimeout(() => {
      if (this.progreso <= 40) {
        this.heart3 = true;
      }
    }, 20000);

    setTimeout(() => {
      if (this.progreso <= 40) {
        this.heart2 = true;
      }
    }, 30000);

    setTimeout(() => {
      if (this.progreso <= 40) {
        this.heart = true;
      }
    }, 40000);
    setTimeout(() => {
      if (this.monedas <= 30) {
        $(".moneda").trigger('pause');
        $(".moneda").prop("currentTime",0);
        $(".game_over").trigger('play');
      }
  }, 40000);

    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      }
  })

  }
  

  scrollFunction() {
    const mybutton = document.getElementById('scroll');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
      this.mostrar = true;
    } else {
      mybutton.style.display = "none";
      this.mostrar = false;
    }
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
