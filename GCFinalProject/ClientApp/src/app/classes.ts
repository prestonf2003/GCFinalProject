export class Rootobject {
    count: number;
    results: Result[];
    constructor(count: number, results: Result[]) {
    this.count = count;
    this.results = results;
    }
}

export class Result {
    index: string;
    name: string;
    url: string;
    constructor(index: string, name: string, url: string){
        this.index = index;
        this.name = name;
        this.url = url;
    }
}
