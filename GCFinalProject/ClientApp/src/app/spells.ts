

    export class Spells {
        _id: string;
        index: string;
        name: string;
        desc: string[];
        higher_level: string[];
        range: string;
        components: string[];
        material: string;
        ritual: boolean;
        duration: string;
        concentration: boolean;
        casting_time: string;
        level: number;
        attack_type: string;
        damage: Damage;
        school: School;
        classes: Class1[];
        
        url: string;
        constructor(_id:string, index:string, name:string, desc:string[], higher_level:string[], range:string, components:string[], material:string, ritual:boolean, duration:string, concentration:boolean,
            casting_time:string, level:number, attack_type:string, damage:Damage,school:School, classes:Class1[], url:string){
                this._id= _id;
                this.index = index;
                this.name = name;
                this.desc = desc;
                this.higher_level = higher_level;
                this.range = range;
                this.components = components;
                this.material = material;
                this.ritual = ritual;
                this.duration = duration;
                this.concentration = concentration;
                this.casting_time = casting_time;
                this.level = level;
                this.attack_type = attack_type;
                this.damage = damage;
                this.school = school;
                this.classes = classes;
                
                this.url = url;




        }
    }

    export interface Damage {
        damage_type: Damage_Type;
        damage_at_slot_level: Damage_At_Slot_Level;
    }

    export interface Damage_Type {
        index: string;
        name: string;
        url: string;
    }

    export interface Damage_At_Slot_Level {
        _2: string;
        _3: string;
        _4: string;
        _5: string;
        _6: string;
        _7: string;
        _8: string;
        _9: string;
    }

    export interface School {
        index: string;
        name: string;
        url: string;
    }

    export interface Class1 {
        index: string;
        name: string;
        url: string;
    }




