import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hike-detail',
  templateUrl: './hike-detail.component.html',
  styleUrls: ['./hike-detail.component.css']
})
export class HikeDetailComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['']);
  }
}
