import {Image} from './image';

export class Hike {
    id: number;
    creationDate: Date;
    name: string;
    hikeDate: Date;
    description: string;
    organizer: string;
    images?: Image[];

    constructor(data: { id?: number, creationDate?: Date, name?: string,
                        hikeDate?: Date, description?: string, organizer?: string ,
                        images?: Image[]}) {
        this.id = data.id;
        this.creationDate = data.creationDate;
        this.name = data.name;
        this.hikeDate = data.hikeDate;
        this.description = data.description;
        this.organizer = data.organizer;
        this.images = data.images;
    }
}
