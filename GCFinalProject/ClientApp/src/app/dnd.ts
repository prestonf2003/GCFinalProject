
export class DnD {



    class_levels: string;
    hit_die: number;
    index: string;
    name: string;
    proficiencies: Proficiency1[];
    proficiency_choices: Proficiency_Choices[];
    saving_throws: Saving_Throws[];
    starting_equipment: Starting_Equipment[];
    starting_equipment_options: Starting_Equipment_Options[];
    subclasses: Subclass[];
    url: string;
    constructor(class_levels: string, hit_die: number, index: string, name: string, proficiencies: Proficiency1[],
        proficiency_choices: Proficiency_Choices[], saving_throws: Saving_Throws[], starting_equipment: Starting_Equipment[], starting_equipment_options: Starting_Equipment_Options[],
        subclasses: Subclass[], url: string) {
        this.class_levels = class_levels;
        this.hit_die = hit_die;
        this.index = index;
        this.name = name;
        this.proficiencies = proficiencies;
        this.proficiency_choices = proficiency_choices;
        this.saving_throws = saving_throws;
        this.starting_equipment = starting_equipment;
        this.starting_equipment_options = starting_equipment_options;
        this.subclasses = subclasses;
        this.url = url;
    }

}


export interface Prerequisite {
    ability_score: Ability_Score;
    minimum_score: number;
}

export interface Ability_Score {
    index: string;
    name: string;
    url: string;
}

export interface Proficiency {
    index: string;
    name: string;
    url: string;
}

export interface Proficiency1 {
    index: string;
    name: string;
    url: string;
}

export interface Proficiency_Choices {
    choose: number;
    from: From[];
    type: string;
}

export interface From {
    index: string;
    name: string;
    url: string;
}

export interface Saving_Throws {
    index: string;
    name: string;
    url: string;
}

export interface Starting_Equipment {
    equipment: Equipment;
    quantity: number;
}

export interface Equipment {
    index: string;
    name: string;
    url: string;
}

export interface Starting_Equipment_Options {
    choose: number;
    from: From1[];
    type: string;
}

export interface From1 {
    equipment: Equipment1;
    quantity: number;
    equipment_option: Equipment_Option;
}

export interface Equipment1 {
    index: string;
    name: string;
    url: string;
}

export interface Equipment_Option {
    choose: number;
    from: From2;
    type: string;
}

export interface From2 {
    equipment_category: Equipment_Category;
}

export interface Equipment_Category {
    index: string;
    name: string;
    url: string;
}

export interface Subclass {
    index: string;
    name: string;
    url: string;
}





