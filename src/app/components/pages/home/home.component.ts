import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RessourcesService } from 'src/app/services/ressources/ressources.service';
import { ressource } from 'src/app/shared/models/ressource';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ressources: ressource[] ;

  constructor(private  ressourcesService:RessourcesService ,activatedRoute: ActivatedRoute) {

    let ressourcesObservalbe:Observable<ressource[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
      ressourcesObservalbe = this.ressourcesService.getAllRessourcesBySearchTerm(params.searchTerm);
      
      else
      ressourcesObservalbe = ressourcesService.getAll();

      ressourcesObservalbe.subscribe((serverressources) => {
          this.ressources = serverressources;
        })
    })
   }

  ngOnInit(): void {
  
  }
  }

