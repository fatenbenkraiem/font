import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ressource } from 'src/app/shared/models/ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {

  private ressourceUrl = 'http://localhost:8000/api/ressources';
  constructor(private http: HttpClient) { }


  getAll(): Observable<ressource[]> {
    return this.http.get<ressource[]>(this.ressourceUrl);
  }


 getAllRessourcesBySearchTerm(searchTerm: string) {
  return this.http.get<ressource[]>(this.ressourceUrl + searchTerm);
}

}
