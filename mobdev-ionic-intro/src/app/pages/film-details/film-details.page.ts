import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
=======
>>>>>>> parent of 23843e8 (last week some changes)

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

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
  }

}
