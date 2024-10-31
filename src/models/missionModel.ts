export default class MissionModel {
    public _id?:string
    constructor(
        public name: string,
        public status: string,
        public priorety: string,
        public description: string,
    ) {
        this.name = name
        this.status = status
        this.priorety = priorety
        this.description = description
    }
}