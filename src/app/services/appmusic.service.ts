import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()
export class AppmusicService {

  constructor(private http: HttpClient) {

   }

   getNewReleases(){

     const headers = new HttpHeaders({
        'Authorization': 'Bearer BQBXV_Q-kug46Rv2lBzdq6xS3-z_j3a6K9wATsqBSkd0dQgh1R77FBpyv27MBvsxXjWcE456SCknDM5SqoE'
     });

     return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
     .pipe( map( data => {
        return data['albums'].items;
     }));
   }

   getArtista(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBXV_Q-kug46Rv2lBzdq6xS3-z_j3a6K9wATsqBSkd0dQgh1R77FBpyv27MBvsxXjWcE456SCknDM5SqoE'
   });

   return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
   .pipe( map( data =>{
      return data['artist'].items;
   }));
 
   }

}
