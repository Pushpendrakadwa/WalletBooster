import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Model } from './model';
import {User} from './user.model';
@Injectable({
  providedIn: 'root'
})


export class RecoService {
    url: string = 'http://localhost:8098/recommendation-service/advices';
    user : User[]=[];
    
    constructor(private http: HttpClient) {}

    private refreshRequired =new Subject<void>();

    get RefreshRequired(){
      return this.refreshRequired;
    }
   
    getAllAlbums(): Observable<Model []> {
      
      return this.http.get<Model []>(this.url)
        .pipe(
          tap(data =>
            this.RefreshRequired.next()
            //console.log('All: ' + JSON.stringify(data)))
        ));
    }
    
  }

  
    
    
   
  
  
        
