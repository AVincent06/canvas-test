export class Led {
  x: number;
  y: number;
  rayon: number;
  color?: any;

  constructor(
    x:number,
    y:number,
    rayon:number,
    color?:any
  ) {
    this.x = x;
    this.y = y;
    this.rayon = rayon;
    this.color = color;
  }

  draw(region: Path2D) {
    region.arc(this.x, this.y, this.rayon, 0, Math.PI*2, false);
  }

  fill(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rayon, 0, Math.PI*2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  clip(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.rayon, 0, Math.PI*2, false);
    ctx.clip();
  }
}

export class CarreLed {
  positionX: number;
  positionY: number;
  taille: number;
  rayon: number;
  couleur: string;

  constructor(
    positionX:number,
    positionY:number,
    taille: number,
    rayon:number,
    couleur:string
  ) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.taille = taille;
    this.rayon = rayon;
    this.couleur = couleur;
  }

  fill(ctx: CanvasRenderingContext2D) {
    console.log("test");
    for(let y=this.positionY; y<this.positionY+this.taille; y++) {
      for(let x=this.positionX; x<this.positionX+this.taille; x++) {
        ctx.beginPath();
        ctx.arc(this.rayon*(x*2-1), this.rayon*(y*2-1), this.rayon, 0, Math.PI*2, false);
        ctx.fillStyle = this.couleur;
        ctx.fill();
      }
    }
  }
}

export class caractereLed {
  caractere: string;
  positionX: number;
  positionY: number;
  couleur: string;
  rayon: number;

  constructor(
    caractere: string,
    positionX:number,
    positionY:number,
    couleur:string
  ) {
    this.caractere = caractere;
    this.positionX = positionX;
    this.positionY = positionY;
    this.couleur = couleur;
    this.rayon = 5;
  }

  afficher(tailleCaractere: 'grand'|'moyen'|'petit', ctx: CanvasRenderingContext2D) {
    const grandCaractere = new Map();

    /* Définition des valeurs */
    grandCaractere.set('0', '01110100011001110101110011000101110');

    switch(tailleCaractere) {
      case 'grand': {
        const trame = grandCaractere.get(this.caractere).split('');
        const largeur = 5;
        for(let i=0; i<trame.length; i++) {
          if(trame[i]) {
            const carreLed = new CarreLed(this.positionX, this.positionY, 4, this.rayon, this.couleur);
            carreLed.fill(ctx);
          }
        }

        break;
      }
    }




  }
}
