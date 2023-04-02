import { Component, OnInit } from '@angular/core';
import { ResService } from 'src/app/services/admin/res.service';

@Component({
  selector: 'app-edit-res',
  templateUrl: './edit-res.component.html',
  styleUrls: ['./edit-res.component.css']
})
export class EditResComponent implements OnInit {

  constructor(private ressourceservice: ResService ) { }

  ressources : any;
  ressourceId:any ;

  ngOnInit(): void {

   alert(this.ressourceId)
  }

  update(nomressource: string, ressourcedescription: string, articleAuthor: string) {
    let f = {
      'id' : this.ressourceservice.ressourceToUpdate,
      'nom': nomressource,
      'body': ressourcedescription,
      'author': articleAuthor
    };
    let self = this;
    this.ressourceservice.updateRessource(f).subscribe(response => {
      if( response.statut == 202 ){
        this.ressourceservice.update(f);
      }
    });
  }

}
