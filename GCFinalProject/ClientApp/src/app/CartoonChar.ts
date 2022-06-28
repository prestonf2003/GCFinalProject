

export class CartoonChar {
    pkId: number;
    name: string;
    heavyAttack: number;
    lightAttack: number;

    constructor(pkId: number, name: string, heavyAttack: number, lightAttack: number){
      this.pkId = pkId;
      this.name = name;
      this.heavyAttack = heavyAttack;
      this.lightAttack = lightAttack;
    }
}