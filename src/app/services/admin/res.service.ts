import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResService {

  url:string ='http://localhost:8000';
  ressources:any[] = [];
  ressourceToUpdate:any;

  constructor(private http: HttpClient) { }

  getRessource(){
    return this.ressources;
  }

  pushRessources(ressource:any){
    this.ressources.push(ressource);
  }

  pushRessource(...ressources:any){
    this.ressources.push(...ressources);
  }

  popRessource(id:any){
    for(let i = 0 ; i < this.ressources.length ; i++){
      if( this.ressources[i].id == id ){
        this.ressources.splice(i , 1);
        return this.ressources;
      }
    }

    return this.ressources;
  }

  update(ressource:any){
    for (let i = 0; i < this.ressources.length; i++) {
      if (this.ressources[i].id == ressource.id) {
        Object.assign(this.ressources[i] , ressource);
      }
    }
  }

  listRessource(){
    return this.http.get<any>(this.url + '/api/ressources');
  }
  httpOptions={
    headers : new HttpHeaders({
    'Content-Type':'application/json',
    }),
    withCredentials : false
  };
  addRessource(ressource:any) : Observable<any> {
    return this.http.post<any>(this.url+ '/api/res' ,ressource,this.httpOptions);
  }

  updateRessource(ressource:any){
    return this.http.patch<any>(this.url + "/api/res/update" ,ressource, this.httpOptions );
  }


  removeRessource(ressourceId:any){
    return this.http.delete<any>(this.url + '/api/res/delete' , {
      headers : new HttpHeaders({
          'Content-Type':'application/json'
      }),
      body : {
        id : ressourceId
      }
    })
  }
}
