import { Component, OnInit } from '@angular/core';
import { AppmusicService } from '../../services/appmusic.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  artistas: any[]=[];

  constructor(private appmusic: AppmusicService) { }

  buscar(termino: string){
    this.appmusic.getArtista(termino )
    .subscribe( (data: any) => {
        this.artistas= data;
    })
  };

}
