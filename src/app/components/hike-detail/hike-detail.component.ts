import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HikeRepositoryService} from '../../services/hike-repository.service';
import {error} from 'util';
import {Hike} from '../../models/hike';
import {ImagesRepositoryService} from '../../services/images-repository.service';

@Component({
  selector: 'app-hike-detail',
  templateUrl: './hike-detail.component.html',
  styleUrls: ['./hike-detail.component.css']
})
export class HikeDetailComponent implements OnInit {
  hike: Hike;
  constructor(private hikeRepositoryService: HikeRepositoryService,
              private imgService: ImagesRepositoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    const id: number = +this.activatedRoute.snapshot.params.id;
    this.hikeRepositoryService.getHikeById(id)
      .then(h => this.hike = h)
      .catch(er => this.router.navigate(['']))
      .finally(() => { console.log('hike-detail is loaded'); });
  }

  onBack() {
    this.router.navigate(['']).then();
  }

  getImgHike(hike: Hike) {
    if (hike.images == null || hike.images.length === 0) {
      return 'assets/images/no_image_available.png';
    } else {

      return this.imgService.getImageUrl(hike.images[0].id);
    }
  }

  public getImgCarouselById(hike: Hike, index: number) {
      return this.imgService.getImageUrl(hike.images[index].id);
  }
}
