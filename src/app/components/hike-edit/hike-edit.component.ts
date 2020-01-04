import { Component, OnInit } from '@angular/core';
import {HikeRepositoryService} from '../../services/hike-repository.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Hike} from '../../models/hike';

@Component({
  selector: 'app-hike-edit',
  templateUrl: './hike-edit.component.html',
  styleUrls: ['./hike-edit.component.css']
})
export class HikeEditComponent implements OnInit {
  editHike: Hike;
  constructor(private hikeRepositoryService: HikeRepositoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.editHike = null;
    const id: number = +this.activatedRoute.snapshot.params.id;
    this.hikeRepositoryService.getHikeById(id)
      .then(
        h => this.editHike = h)
      .catch(er => this.router.navigate(['']))
      .finally(() => { console.log('hike-detail is loaded'); });
  }

  onCancel() {
    this.router.navigate(['']).then();
  }

  public saveHike() {
    this.hikeRepositoryService.updateHike(this.editHike)
      .then( h => {
        console.log(h);
        this.router.navigateByUrl('').then();
      });
  }

}
