import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HikeRepositoryService} from '../../services/hike-repository.service';
import {error} from 'util';
import {Hike} from '../../models/hike';

@Component({
  selector: 'app-hike-detail',
  templateUrl: './hike-detail.component.html',
  styleUrls: ['./hike-detail.component.css']
})
export class HikeDetailComponent implements OnInit {
  hike: Hike;
  constructor(private hikeRepositoryService: HikeRepositoryService,
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
}
