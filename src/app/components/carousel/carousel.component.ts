import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { CardCarousel } from 'src/app/models/card-carousel';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  cards: Array<Card> = [];
  cardsCarousel: Array<CardCarousel> =[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.generateImages();
    this.dataService.connectToWebSocket("15").subscribe((x: any) => {
      console.log(x);});
  }

  imgCollection: Array<object> = [
    {
      id: "62d9d4fd0e99a65aaf000aa4",
      nombre: "Venom",
      descipcion: "Extraterrestre sensible simbionte con una forma amorfa, semi-líquido, que sobrevive mediante la unión con un huésped, por lo general humano.",
      poder: 100,
      caracteristica: "Capaz de cambiar de forma las habilidades, incluida la capacidad de formar picos o expandir su tamaño, ​así como imitar la aparición de otros humanoides después de que haya obtenido un huésped.",
      imagen: "/assets/0BF.jpg",
      image: '/assets/0BF.jpg',
      thumbImage: '/assets/0BF.jpg',
      title: 'Venom'
    },
    {
      id: "62d9d5a20e99a65aaf000aa5",
      nombre: "Hombre Araña",
      descipcion: "Generalmente su identidad secreta es Peter Parker, un joven huérfano neoyorquino que adquiere superpoderes después de ser mordido por una araña radiactiva.",
      poder: 100,
      caracteristica: "Capaz de producir y lanzar telarañas sintéticas con ayuda de unos lanzadores que van sujetos a sus muñecas; trepar, adherirse y desplazarse a través de muros y edificaciones.",
      imagen: "/assets/0E0.jpg",
      image: '/assets/0E0.jpg',
      thumbImage: '/assets/0E0.jpg',
      title: 'Hombre Araña'
    },
    {
      id: "62d9d73e0e99a65aaf000aa6",
      nombre: "Punisher",
      descipcion: "Es un vigilante italiano-estadounidense4​5​ que emplea asesinato, secuestro, extorsión, coerción, amenazas de violencia y tortura en su campaña contra el crimen.",
      poder: 100,
      caracteristica: "Está altamente entrenado en la infiltración en territorios y estructuras enemigas fuertemente custodiadas con el propósito de asesinato, captura e inteligencia militar. Además, está entrenado en varias formas de camuflaje y sigilo.",
      imagen: "/assets/1AE.jpg",
      image: '/assets/1AE.jpg',
      thumbImage: '/assets/1AE.jpg',
      title: 'Punisher'
    },
    {
      id: "62d9d87c0e99a65aaf000aa7",
      nombre: "Protector Letal",
      descipcion: "Venom hace un acuerdo con Spider-Man de que se dejarán en paz, con la condición de que Venom no cometa ningún delito. Venom luego se muda de la ciudad de Nueva York a San Francisco, y se une a un grupo de gente topo californiana.",
      poder: 100,
      caracteristica: "Debido a las habilidades de reproducción asexual del simbionte, la Fundación Vida logró extraer semillas de Venom y acelerarlas para convertirse en: Scream, Phage, Riot, Lasher y Agony.",
      imagen: "/assets/1DF.jpg",
      image: '/assets/1DF.jpg',
      thumbImage: '/assets/1DF.jpg',
      title: 'Protector Letal'
    },
    {
      id: "62d9d9350e99a65aaf000aa8",
      nombre: "Cíclope",
      descipcion: "Cíclope es miembro de una subespecie de humanos conocidos como mutantes, que nacen con habilidades sobrehumanas.",
      poder: 100,
      caracteristica: "Cíclope emite poderosos rayos de energía de sus ojos y solo puede controlar los rayos con la ayuda de gafas especiales que debe usar en todo momento.",
      imagen: "/assets/1F4.jpg",
      image: '/assets/1F4.jpg',
      thumbImage: '/assets/1F4.jpg',
      title: 'Cíclope'
    },
    {
      id: "62d9db240e99a65aaf000aa9",
      nombre: "Verdugos de Arañas",
      descipcion: "Recurrió a una vida delictiva para vengarse de Spider-Man y creó una nueva generación de Mata Arañas para matarlo.",
      poder: 100,
      caracteristica: "Garras de pájaro en sus pies; una larga y curvada navaja que sirve cómo arma que sobresale de cada hombro; un par de pequeñas armas de cuchillas irregulares en cada antebrazo; y una lanza redes especiales que se activan desde la zona del antebrazo.",
      imagen: "/assets/1F5.jpg",
      image: '/assets/1F5.jpg',
      thumbImage: '/assets/1F5.jpg',
      title: 'Verdugos de Arañas'
    },
    {
      id: "62d9dbf20e99a65aaf000aaa",
      nombre: "Warpath",
      descipcion: "Un apache nativo americano, Proudstar posee fuerza y velocidad sobrehumanas mutantes. Sus poderes se parecen a los de su hermano mayor, Thunderbird.",
      poder: 100,
      caracteristica: "Posee resistencia sobrehumana a las lesiones, al menos lo suficiente como para resistir disparos de corto alcance, explosiones de granadas, y ataque telequinético directo de Exodus. También repara y regenera el tejido dañado y destruido mucho más rápido que un humano normal, así como revive y se recupera del agotamiento y la fatiga mucho más rápido que un humano normal.",
      imagen: "/assets/1F9.jpg",
      image: '/assets/1F9.jpg',
      thumbImage: '/assets/1F9.jpg',
      title: 'Warpath'
    }
  ];

  generateImages() {
    this.dataService.getCards().subscribe(x => {
      console.log('resultado', x);

      x.forEach( res => {
        let card: CardCarousel;
        card = {
          id: res.id,
          image: res.imagen,
          thumbImage: res.imagen,
          title: res.nombre
        }

        this.cardsCarousel.push(card);
      })
    });

    console.log(this.cardsCarousel);
    
  }

  createGame(gameId: string) {
    this.dataService.connectToWebSocket(this.dataService.getGameId()).subscribe((x: any) => {
      console.log(x);
    });
  }

}
