import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CaractereLed, CarreLed, ChaineLed, Led } from './class/panneau';

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
  chaineLed!: ChaineLed;

  ngAfterViewInit(): void {

    // Initialisation
    this.ctxFront = this.frontCanvas.nativeElement.getContext('2d') as unknown as CanvasRenderingContext2D;
    this.hFront = this.frontCanvas.nativeElement.height;
    this.wFront = this.frontCanvas.nativeElement.width;
    this.ctxBack = this.backCanvas.nativeElement.getContext('2d') as unknown as CanvasRenderingContext2D;
    this.hBack = this.backCanvas.nativeElement.height;
    this.wBack = this.backCanvas.nativeElement.width;

    this.fondNoir(this.ctxBack, this.wBack, this.hBack);
  }

  fondNoir(ctx: CanvasRenderingContext2D, width: any, height: any) {
    // Fond noir
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, width, height);
  }

  afficher(ctx: CanvasRenderingContext2D, message: string) {
    ctx.clearRect(0, 0, this.wFront, this.hFront);
    this.chaineLed = new ChaineLed(message, 1, 3, 'yellow');
    this.chaineLed.afficher('grand', ctx);
  }

}
