import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CaractereLed, CarreLed, Led } from './class/panneau';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  @ViewChild('frontCanvas') frontCanvas!: ElementRef<HTMLCanvasElement>
  @ViewChild('backCanvas') backCanvas!: ElementRef<HTMLCanvasElement>

  /* Déclaration des variables */
  ctxFront!: CanvasRenderingContext2D;
  hFront: any;
  wFront: any;
  ctxBack!: CanvasRenderingContext2D;
  hBack: any;
  wBack: any;
  caractereLed0 = new CaractereLed('0', 1, 3, 'yellow');
  caractereLed1 = new CaractereLed('1', 28, 3, 'yellow');
  caractereLed: CaractereLed[] = [];
  //carreLed = new CarreLed(1,1,4,5,'yellow');

  ngAfterViewInit(): void {

    // Initialisation
    this.ctxFront = this.frontCanvas.nativeElement.getContext('2d') as unknown as CanvasRenderingContext2D;
    this.hFront = this.frontCanvas.nativeElement.height;
    this.wFront = this.frontCanvas.nativeElement.width;
    this.ctxBack = this.backCanvas.nativeElement.getContext('2d') as unknown as CanvasRenderingContext2D;
    this.hBack = this.backCanvas.nativeElement.height;
    this.wBack = this.backCanvas.nativeElement.width;

    this.draw();
  }

  draw() {
    // Fond noir
    this.ctxBack.fillStyle = 'black';
    this.ctxBack.fillRect(0, 0, this.wBack, this.hBack);

    // On cree le message
    const message = 'SEVENPARK'.split('');
    let i = 1;
    for(let letter of message) {
      this.caractereLed.push(new CaractereLed(letter, i, 3, 'yellow'));
      i+=22;
    }

    // On affiche le message
    for(let caractereOn of this.caractereLed) {
      caractereOn.afficher('grand',this.ctxFront);
    }

    //this.carreLed.fill(this.ctxFront);
    // this.ctxFront.clearRect(0, 0, this.wFront, this.hFront);

  }

}
