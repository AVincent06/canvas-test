/* Déclaration des constantes globales */
const keyboard = new Map([
  ['0', '01110100011001110101110011000101110'],
  ['1', '00100011000010000100001000010001110'],
  ['2', '01110000010000101110100001000001110'],
  ['3', '01110000010000100110000010000101110'],
  ['4', '10001100011000101111000010000100001'],
  ['5', '01110100001000001110000010000101110'],
  ['6', '01110100001000011110100011000101110'],
  ['7', '01110000010000100001000010000100001'],
  ['8', '01110100011000101110100011000101110'],
  ['9', '01110100011000101111000010000101110'],
  ['A', '01110100011000111111100011000110001'],
  ['B', '11110100011000111110100011000111110'],
  ['C', '01110100011000010000100001000101110'],
  ['D', '11100100101000110001100011001011100'],
  ['E', '11111100001000011110100001000011111'],
  ['F', '11111100001000011110100001000010000'],
  ['G', '01110100011000010111101011000101110'],
  ['H', '10001100011000111111100011000110001'],
  ['I', '01110001000010000100001000010001110'],
  ['J', '01110001000010000100001001010001000'],
  ['K', '10001100011001011100100101000110001'],
  ['L', '10000100001000010000100001000011111'],
  ['M', '10001110111010110001100011000110001'],
  ['N', '10001110011010110011100011000110001'],
  ['O', '01110100011000110001100011000101110'],
  ['P', '11110100011000111110100001000010000'],
  ['Q', '01110100011000110001101011001001101'],
  ['R', '11110100011000111110100011000110001'],
  ['S', '11111100001000001110000010000111111'],
  ['T', '11111001000010000100001000010000100'],
  ['U', '10001100011000110001100011000101110'],
  ['V', '10001100011000110001100010101000100'],
  ['W', '10001100011000110101101011010101010'],
  ['X', '10001100010101000100010101000110001'],
  ['Y', '10001100010101000100001000010000100'],
  ['Z', '11111000010001000100010001000011111'],
  [' ', '00000000000000000000000000000000000'],
  ['♥', '00000010101111111111011100010000000']
]);

const color = new Map([
  ['0', 'black'],
  ['1', 'silver'],
  ['2', 'gray'],
  ['3', 'white'],
  ['4', 'maroon'],
  ['5', 'red'],
  ['6', 'purple'],
  ['7', 'fuchsia'],
  ['8', 'green'],
  ['9', 'lime'],
  ['A', 'olive'],
  ['B', 'yellow'],
  ['C', 'navy'],
  ['D', 'blue'],
  ['E', 'teal'],
  ['F', 'aqua']
]);

const logo = new Map([
  ['0', '333333333333333333333333333333333DDDDDDDDDDDDDDDDDDDDDDDDDDDDDD33DDDDDDDDDDDD333333DDDDDDDDDDDD33DDDDDDDDDD3333DD3333DDDDDDDDDD33DDDDDDDD33333DDDD33333DDDDDDDD33DDDDDDD33333DDDDDD33333DDDDDDD33DDDDDD333333DDDDDD333333DDDDDD33DDDDD33333333DDDD33333333DDDDD33DDDD3333333333DD3333333333DDDD33DDD333333333333333333333333DDD33DDD333333DDDDDDDDD333333333DDD33DD333333333DDDDDDD3333333333DD33DD3333333333DDDDDD3333333333DD33D33333333333DDDDDD33333333333D33D33333333333DDDDDD33333333333D33D33333333333DDDDDD33333333333D33D33333333333DDDDDD33333333333D33D33333333333DDDDDD33333333333D33D33333333333DDDDDD33333333333D33DD3333333333DDDDDD3333333333DD33DD3333333333DDDDDD3333333333DD33DDD333333333DDDDDD333333333DDD33DDD333333333DDDDDD333333333DDD33DDDD3333333DDDDDDDD3333333DDDD33DDDDD3333DDDDDDDDDDDD3333DDDDD33DDDDDD333333333333333333DDDDDD33DDDDDDD3333333333333333DDDDDDD33DDDDDDDD33333333333333DDDDDDDD33DDDDDDDDDD3333333333DDDDDDDDDD33DDDDDDDDDDDD333333DDDDDDDDDDDD33DDDDDDDDDDDDDDDDDDDDDDDDDDDDDD333333333333333333333333333333333'],
]);

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

export class CaractereLed {
  caractere: string;
  positionX: number;
  positionY: number;
  couleur: string;
  rayon: number;

  constructor(
    caractere: string,
    positionX:number,
    positionY:number,
    couleur:string,
    rayon: number
  ) {
    this.caractere = caractere;
    this.positionX = positionX;
    this.positionY = positionY;
    this.couleur = couleur;
    this.rayon = rayon;
  }

  afficher(tailleCaractere: 'grand'|'moyen'|'petit', ctx: CanvasRenderingContext2D) {
    const ON = '1';

    const tailleCorrespondante = new Map([
      ['grand', 4],
      ['moyen', 2],
      ['petit', 1]
    ]);
    const taille: number = tailleCorrespondante.get(tailleCaractere)!;

    const trame = keyboard.get(this.caractere)!.split('');
    const LARGEUR = 5;
    let x = this.positionX;
    let y = this.positionY;
    for(let i=0; i<trame.length; i++) {
      if(trame[i] == ON) {
        const carreLed = new CarreLed(x, y, taille, this.rayon, this.couleur);
        carreLed.fill(ctx);
      }
      if(x<this.positionX+taille*(LARGEUR-1)) {
        x += taille;
      } else {
        x = this.positionX;
        y += taille;
      }
    }
  }
}

export class ChaineLed {
  chaine: string;
  positionX: number;
  positionY: number;
  couleur: string;
  rayon: number;
  caractereLed: CaractereLed[] = [];

  constructor(
    chaine: string,
    positionX: number,
    positionY: number,
    couleur: string,
    rayon: number
  ) {
    this.chaine = chaine;
    this.positionX = positionX;
    this.positionY = positionY;
    this.couleur = couleur;
    this.rayon = rayon;
  }

  afficher(tailleCaractere: 'grand'|'moyen'|'petit', espacement: number,  ctx: CanvasRenderingContext2D) {
    const tailleCorrespondante = new Map([
      ['grand', 4],
      ['moyen', 2],
      ['petit', 1]
    ]);
    const taille: number = tailleCorrespondante.get(tailleCaractere)!;
    const LARGEUR = 5;

    // On cree le message
    const message = this.chaine.split('');
    let i = 0;
    for(let letter of message) {
      this.caractereLed.push(new CaractereLed(letter, this.positionX+i, this.positionY, this.couleur, this.rayon));
      i+=(taille*LARGEUR)+espacement;
    }


    // On fait apparaitre le message
    for(let caractereOn of this.caractereLed) {
      caractereOn.afficher(tailleCaractere,ctx);
    }
  }

}

export class LogoLed {
  idLogo: number;
  positionX: number;
  marginLeft?: number;
  marginRight?: number;

  constructor(
    idLogo: number,
    positionX: number,
    marginLeft?: number,
    marginRight?: number,
  ) {
    this.idLogo = idLogo;
    this.positionX = positionX;
    this.marginLeft = marginLeft;
    this.marginRight = marginRight
  }

  afficher(ctx: CanvasRenderingContext2D, rayon: number) {
    const matrix = logo.get('0')?.split('');
    let i = 0;
    let positionY=1;
    let taille = 32;

    for(let y=positionY; y<positionY+taille; y++) {
      for(let x=this.positionX; x<this.positionX+taille; x++) {
        ctx.beginPath();
        ctx.arc(rayon*(x*2-1), rayon*(y*2-1), rayon, 0, Math.PI*2, false);
        ctx.fillStyle = color.get(matrix![i++])!;
        ctx.fill();
      }
    }

  }
}
