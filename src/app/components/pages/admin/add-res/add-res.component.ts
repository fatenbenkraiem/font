import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResService } from 'src/app/services/admin/res.service';


@Component({
  selector: 'app-add-res',
  templateUrl: './add-res.component.html',
  styleUrls: ['./add-res.component.css']
})
export class AddResComponent implements OnInit {

  constructor(private ressourceservice: ResService /*, private router : Router*/ ){}
  ressources:any;
  ngOnInit(): void {
    
  }
  add(nomressource:string, ressourcedescription:string, articleAuthor:string) { 
    this.ressources ={
      'nom' : nomressource,
      'description' : ressourcedescription,
      'author' : articleAuthor
    };
    this.ressourceservice.addRessource(this.ressources as any).subscribe
    (ressource=>{ 
      this.ressourceservice.pushRessource(ressource);
    });
}
}