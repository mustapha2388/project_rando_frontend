import { Point } from 'leaflet';

export class Location {
    id: number;
    point: Point;

    constructor(data: {id?: number, point?: Point}) {
        this.id = data.id;
        this.point =  data.point;
    }
}
