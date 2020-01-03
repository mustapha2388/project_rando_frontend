import { Component, OnInit } from '@angular/core';
import {Page} from '../../models/page';
import {Hike} from '../../models/hike';
import {Subscription} from 'rxjs';
import {HikeRepositoryService} from '../../services/hike-repository.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-hike-liste',
  templateUrl: './hike-liste.component.html',
  styleUrls: ['./hike-liste.component.css']
})
export class HikeListeComponent implements OnInit {

  faEye = faEye;

  hikes: Page<Hike>;
  private hikeSubscription: Subscription;

  noPage: number;
  sizePage: number;
  constructor( private hikeRepositoryService: HikeRepositoryService) {}

  ngOnInit() {
    this.hikes = Page.emptyPage<Hike>();
    this.hikeRepositoryService.getHikeAsObservable().subscribe(
      reqJson => {
        console.log('in App component ');
        console.log( reqJson);
        console.log('--------');
        this.hikes = reqJson;
      });
    this.hikeRepositoryService.getHikes();
  }

}
