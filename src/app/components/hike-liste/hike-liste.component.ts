import { Component, OnInit } from '@angular/core';
import {Page} from '../../models/page';
import {Hike} from '../../models/hike';
import {Subscription} from 'rxjs';
import {HikeRepositoryService} from '../../services/hike-repository.service';
import { faEye, faEdit} from '@fortawesome/free-solid-svg-icons';
import {ImagesRepositoryService} from '../../services/images-repository.service';


@Component({
  selector: 'app-hike-liste',
  templateUrl: './hike-liste.component.html',
  styleUrls: ['./hike-liste.component.css']
})
export class HikeListeComponent implements OnInit {

  faEye = faEye;
  faEdit = faEdit;

  hikes: Page<Hike>;
  private hikeSubscription: Subscription;

  noPage: number;
  sizePage: number;
  constructor( private hikeRepositoryService: HikeRepositoryService,
               private imagesService: ImagesRepositoryService) {}

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

  public getThumbnailHike(hike: Hike) {
    if (hike.images == null || hike.images.length === 0) {
      return 'assets/images/no_image_available.png';
    } else {
      return this.imagesService.getThumbnailUrl(hike.images[0].id);
    }
  }

}
