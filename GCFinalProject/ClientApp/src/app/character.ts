export class Character{
pkId: number;
Class: string;
subclass: string;
strength: number;
dexterity: number;
constitution: number;
intelligence: number;
wisdom: number;
charisma: number;
id: number;

constructor(pkId: number, Class: string, subclass: string, strength: number, dexterity: number, wisdom: number, charisma: number, id: number){
this.pkId = pkId;
this.Class = Class;
this.subclass = subclass;
this.strength = strength;
this.dexterity = dexterity;
this.wisdom = wisdom;
this.charisma = charisma;
this.id = id;
}



}