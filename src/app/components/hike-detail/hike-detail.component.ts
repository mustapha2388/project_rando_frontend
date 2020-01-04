import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HikeRepositoryService} from '../../services/hike-repository.service';

@Component({
  selector: 'app-hike-detail',
  templateUrl: './hike-detail.component.html',
  styleUrls: ['./hike-detail.component.css']
})
export class HikeDetailComponent implements OnInit {
  constructor(private hikeRepositoryService: HikeRepositoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    const id: number = +this.activatedRoute.snapshot.params.id;
    this.hikeRepositoryService.getHikeById(id)
      .then(h => console.log('find it ' + h.description));
  }

  onBack() {
    this.router.navigate(['']);
  }
}
