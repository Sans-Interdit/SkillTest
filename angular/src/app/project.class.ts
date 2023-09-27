export class Project{
    constructor(public id : number, public name : string, public description : string, public priority : number, public progress : number, public tasks : Task[]){}
}

export class Task{
    constructor(public id : number, public person : string, public description : string){}
}

export class Account{
    constructor(public id : number, public username : string, public password : string){}
}