import { Component, OnInit } from '@angular/core';
import { Role } from '../../PFFmodel/role';
import { RoleService } from '../../PFFservices/role-service.service';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss'],
  providers: []
})
export class RoleComponent implements OnInit {
// Déclaration d'un tableau d'utilisateurs
  // ! : le tableau n'est pas initialisé
  roles!:any[]; // any : n'importe quel type de données
  role:Role=new Role();
  // DI : par constructeur  
  constructor(private roleService:RoleService){
  }
  ngOnInit(): void {
    // step 6
    this.findAllRoles();
  }
  // step 5
  findAllRoles(){
    this.roleService.findAll().subscribe(data => {this.roles = data});
  }
  saveRole(){
    this.roleService.save(this.role).subscribe(
      () => {
        // MAJ la liste des utilisateurs
        this.findAllRoles();
        // Vider le formulaire
        this.role = new Role();
      }
    )
  }
  deleteRole(id:number){
    this.roleService.delete(id).subscribe(
      () => {
        this.findAllRoles();
      }
    )
  }
}

