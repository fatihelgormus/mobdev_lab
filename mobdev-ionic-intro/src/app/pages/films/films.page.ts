import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
=======
>>>>>>> parent of 23843e8 (last week some changes)
=======
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
>>>>>>> 23843e8903676e41a7666de1f056c36ce7b967a9

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
  films: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.films = this.api.getFilms();
=======
  constructor() { }

  ngOnInit() {
>>>>>>> parent of 23843e8 (last week some changes)
=======
  films: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.films = this.http.get('https://swapi.dev/api/films');
>>>>>>> 23843e8903676e41a7666de1f056c36ce7b967a9
  }

  openDetails(film){
    let split = film.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
  }
}
