import { HikeRepositoryService } from './services/hike-repository.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Hike } from './models/hike';
import { Page } from './models/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-rando-frontend';

  hikes: Page<Hike>;
  private hikeSubscription: Subscription;

  noPage: number;
  sizePage: number;
  constructor( private hikeRepositoryService: HikeRepositoryService) {}
  ngOnInit(): void {
    this.hikes = Page.emptyPage<Hike>();
    this.hikeRepositoryService.getHikeAsObservable().subscribe(
      reqJson => {
        console.log('in App component ');
        console.log( reqJson);
        console.log('--------');
        this.hikes = reqJson;
      }
    );
    this.hikeRepositoryService.getHikes();
  }
}


