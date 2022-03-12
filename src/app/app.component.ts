import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { CaractereLed, CarreLed, ChaineLed, Led } from './class/panneau';

//const LED_DIAMETRE = 10 // pour une définition 2560
const LED_DIAMETRE = 6 // pour une définition 1920
//const LED_DIAMETRE = 4 // pour une définition 1440
const LED_RAYON = LED_DIAMETRE / 2;
const AFFICHEUR_LONGUEUR = 64;
const AFFICHEUR_HAUTEUR = 32;
const AFFICHEUR_NOMBRE = 4
const PANNEAU_LONGUEUR = AFFICHEUR_LONGUEUR * AFFICHEUR_NOMBRE;
const PANNEAU_HAUTEUR = AFFICHEUR_HAUTEUR;
const CANVAS_LONGUEUR = PANNEAU_LONGUEUR * LED_DIAMETRE;  // taille en pixel
const CANVAS_HAUTEUR = PANNEAU_HAUTEUR * LED_DIAMETRE; // taille en pixel

interface Couleur {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  @Output() change!: EventEmitter<MatRadioChange>
  @ViewChild('frontCanvas') frontCanvas!: ElementRef<HTMLCanvasElement>
  @ViewChild('backCanvas') backCanvas!: ElementRef<HTMLCanvasElement>

  /* Déclaration des variables */
  led_rayon: number = LED_DIAMETRE / 2;
  canvas_longueur: number = PANNEAU_LONGUEUR * LED_DIAMETRE;
  canvas_hauteur: number = PANNEAU_HAUTEUR * LED_DIAMETRE;
  ctxFront!: CanvasRenderingContext2D;
  hFront: any;
  wFront: any;
  // ctxBack!: CanvasRenderingContext2D;
  // hBack: any;
  // wBack: any;
  chaineLed!: ChaineLed;
  bufferMessage!: string;
  espacement: number = 2;
  tailleCaractere: 'grand'|'moyen'|'petit' = 'grand';
  couleurs: Couleur[] = [
    {value: 'silver', viewValue: 'silver'},
    {value: 'gray', viewValue: 'gray'},
    {value: 'white', viewValue: 'white'},
    {value: 'maroon', viewValue: 'maroon'},
    {value: 'red', viewValue: 'red'},
    {value: 'purple', viewValue: 'purple'},
    {value: 'fuchsia', viewValue: 'fuchsia'},
    {value: 'green', viewValue: 'green'},
    {value: 'lime', viewValue: 'lime'},
    {value: 'olive', viewValue: 'olive'},
    {value: 'yellow', viewValue: 'yellow'},
    {value: 'navy', viewValue: 'navy'},
    {value: 'blue', viewValue: 'blue'},
    {value: 'teal', viewValue: 'teal'},
    {value: 'aqua', viewValue: 'aqua'},
  ];
  couleurSelectionnee: string = 'white';

  ngAfterViewInit(): void {

    // Initialisation
    this.ctxFront = this.frontCanvas.nativeElement.getContext('2d') as unknown as CanvasRenderingContext2D;
    this.hFront = this.frontCanvas.nativeElement.height;
    this.wFront = this.frontCanvas.nativeElement.width;
    // this.ctxBack = this.backCanvas.nativeElement.getContext('2d') as unknown as CanvasRenderingContext2D;
    // this.hBack = this.backCanvas.nativeElement.height;
    // this.wBack = this.backCanvas.nativeElement.width;

    this.fondNoir(this.ctxFront, this.canvas_longueur, this.canvas_hauteur);
  }

  fondNoir(ctx: CanvasRenderingContext2D, width: any, height: any) {
    // Fond noir
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
  }

  afficher(ctx: CanvasRenderingContext2D, message: string, espacement: number) {
    this.bufferMessage = message;
    this.fondNoir(this.ctxFront, this.canvas_longueur, this.canvas_hauteur);
    this.chaineLed = new ChaineLed(message, 1, 3, this.couleurSelectionnee, this.led_rayon);
    this.chaineLed.afficher(this.tailleCaractere, espacement, ctx);
  }

  onResolutionChange(event: MatRadioChange): void {
    this.led_rayon = event.value;
    this.canvas_longueur = PANNEAU_LONGUEUR * (this.led_rayon*2);
    this.canvas_hauteur = PANNEAU_HAUTEUR * (this.led_rayon*2);
    this.afficher(this.ctxFront, this.bufferMessage, this.espacement);
  }

  onSizeChange(event: MatRadioChange): void {
    this.tailleCaractere = event.value;
    this.afficher(this.ctxFront, this.bufferMessage, this.espacement);
  }

  onEspacementChange(event: MatRadioChange): void {
    this.espacement = event.value*1;
    this.afficher(this.ctxFront, this.bufferMessage, this.espacement);
  }

  onCouleurChange(): void {
    this.afficher(this.ctxFront, this.bufferMessage, this.espacement);
  }

}
