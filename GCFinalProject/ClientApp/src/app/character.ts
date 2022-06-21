export class Character{
pkId: number;
class: string;
subclass: string;
strength: number;
dexterity: number;
constitution: number;
intelligence: number;
wisdom: number;
charisma: number;


constructor(pkId: number, Class: string, subclass: string, strength: number, dexterity: number, constitution: number, intelligence: number,wisdom: number, charisma: number){
this.pkId = pkId;
this.class = Class;
this.subclass = subclass;
this.strength = strength;
this.dexterity = dexterity;
this.constitution = constitution;
this.intelligence = intelligence;
this.wisdom = wisdom;
this.charisma = charisma;

}



}