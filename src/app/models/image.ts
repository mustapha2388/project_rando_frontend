import {Hike} from './hike';

export class Image {
  public id: number;
  public name: string;
  public fileName: string;
  public contentType: string;
  public hike?: Hike;

  constructor(data: { id?: number, name?: string, fileName?: string, contentType?: string, hike?: Hike}) {
    this.id = data.id;
    this.name = data.name;
    this.fileName = data.fileName;
    this.contentType = data.contentType;
    this.hike = data.hike;
  }
}
