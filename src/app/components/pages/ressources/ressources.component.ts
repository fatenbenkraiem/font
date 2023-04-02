import { Component, OnInit } from '@angular/core';
import { RessourcesService } from 'src/app/services/ressources/ressources.service';
import { ressource } from 'src/app/shared/models/ressource';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent implements OnInit {
  ressources: ressource[] ;

  constructor(private ressourcesService:RessourcesService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.ressourcesService.getAll()
      .subscribe(ressources=> this.ressources = ressources);
  }
}
