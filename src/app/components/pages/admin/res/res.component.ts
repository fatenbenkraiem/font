import { Component, OnInit } from '@angular/core';
import { ResService } from 'src/app/services/admin/res.service';

@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css']
})
export class ResComponent implements OnInit {

  constructor( private ressourceservice:  ResService) {}
  //thisis an array
  ressources :any[] = [];
  ressource:any;
  hasData:boolean = false;

  ngOnInit(): void {
    //so before all we need to rely this artices with the service articles by reference
    //that's mean any change in articles(articlesservice) will be applied for this articles
    this.ressources = this.ressourceservice.getRessource();
    this.getRessource();
  }

  deleteRessource(ressourceId:any){
    let self = this;
    this.ressourceservice.removeRessource(ressourceId).subscribe(function(response:any){
      if( response.statut == '200' ){
        alert(response.message)
        self.ressources = self.ressourceservice.popRessource(ressourceId);
        console.log(self.ressources);
      }
    })
  }

  getRessource(){
    this.ressourceservice.listRessource().subscribe(ressource=>{
      if( ressource.data.length == 0 ){
        this.hasData = false;
      }else{
        this.ressourceservice.pushRessources(...ressource.data);
        this.ressource = [...(ressource.data)];
        
        this.hasData = true;
      }
    });
  }


  setToUpdate(id:any){
    this.ressourceservice.ressourceToUpdate = id;
  }
}
