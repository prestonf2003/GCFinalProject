export class CartoonChar{
    Name: string;
    HitPoints: number[];
    Attack: number;
    
    constructor(name: string, hitPoints: number[], attack: number) {
        this.Name = name;
        this.HitPoints = hitPoints;
        this.Attack = attack;
  }
}