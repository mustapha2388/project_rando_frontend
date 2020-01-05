import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesRepositoryService {
  private serviceUrl = 'http://localhost:8080/images';

  constructor() { }

  public getThumbnailUrl(id: number) {
    return `${this.serviceUrl}/${id}/thumbdata`;
  }

  public getImageUrl(id: number){
    return `${this.serviceUrl}/${id}/data`;
  }
}
