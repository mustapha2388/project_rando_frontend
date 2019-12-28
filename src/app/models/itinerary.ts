export class Itinerary {


    id: number;
    creationDate: Date;
    updateDate: Date;
    creator: string;
    length: number;
    difficulty: number;

    constructor(data: { id?: number, creationDate?: Date, updateDate?: Date, creator?: string, length?: number, difficulty?: number }) {
        this.id = data.id;
        this.creationDate = data.creationDate;
        this.updateDate = data.updateDate;
        this.creator = data.creator;
        this.length = data.length;
        this.difficulty = data.difficulty;
    }
}
