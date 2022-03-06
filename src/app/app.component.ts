import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CarreLed, Led } from './class/panneau';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
  carreLed = new CarreLed(1,1,4,5,'yellow');

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
    this.ctxBack.fillStyle = 'black';
    this.ctxBack.fillRect(0, 0, this.wBack, this.hBack);

    this.carreLed.fill(this.ctxFront);

    // this.ctxFront.clearRect(0, 0, this.wFront, this.hFront);

  }

}
