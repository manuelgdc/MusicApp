import { Component, OnInit } from '@angular/core';
import { AppmusicService } from '../../services/appmusic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

nuevasCanciones: any[]=[];

  constructor(private appmusic: AppmusicService) {

    this.appmusic.getNewReleases()
    .subscribe((data: any) => {
      this.nuevasCanciones = data;
    });
   }

  ngOnInit() {
  }

}
