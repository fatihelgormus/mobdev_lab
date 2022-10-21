import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
=======
>>>>>>> parent of 23843e8 (last week some changes)
=======
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
>>>>>>> 23843e8903676e41a7666de1f056c36ce7b967a9

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
  film: any;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getFilm(id).subscribe(res => {
      this.film = res;
    });
=======
  constructor() { }

  ngOnInit() {
>>>>>>> parent of 23843e8 (last week some changes)
=======
  film: any;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get(`https://swapi.dev/api/films/${id}`).subscribe(res => {
      this.film = res;
    });
>>>>>>> 23843e8903676e41a7666de1f056c36ce7b967a9
  }

}
