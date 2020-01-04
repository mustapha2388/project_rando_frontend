import { Hike } from '../models/hike';
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Page } from '../models/page';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HikeRepositoryService {
  private serviceUrl = 'http://localhost:8080/hikes';
  // pagination
  private noPage: number;
  private sizePage: number;
  private hikeSubject: BehaviorSubject<Page<Hike>>;


  constructor(private http: HttpClient) {
    this.noPage = 0;
    this.sizePage = 8;
    this.hikeSubject = new BehaviorSubject(Page.emptyPage<Hike>());
  }

   public getHikeAsObservable(): Observable<Page<Hike>> {
     return this.hikeSubject.asObservable();
   }

   public getHikes() {
    const urlParams: HttpParams = new HttpParams()
                                  .set('page', '' + this.noPage)
                                  .set('size', '' + this.sizePage);
    this.http.get<Page<Hike>>(this.serviceUrl, {params: urlParams})
              .subscribe(jsonHike => {
                console.log('In hike repository');
                console.log(jsonHike.content);
                console.log('--------');
                this.hikeSubject.next(jsonHike);
              });
   }

   public getHikeById(id: number): Promise<Hike> {
    const url = this.serviceUrl + '/hike-detail/' + id;
    return this.http.get<Hike>(url).toPromise();
   }

   public updateHike(hike: Hike): Promise<Hike> {
     return this.http.put<Hike>(this.serviceUrl, hike)
       .toPromise();
   }

}
