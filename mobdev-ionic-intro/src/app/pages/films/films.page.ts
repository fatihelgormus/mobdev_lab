import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
=======
>>>>>>> parent of 23843e8 (last week some changes)

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

<<<<<<< HEAD
  films: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.films = this.api.getFilms();
=======
  constructor() { }

  ngOnInit() {
>>>>>>> parent of 23843e8 (last week some changes)
  }

}
