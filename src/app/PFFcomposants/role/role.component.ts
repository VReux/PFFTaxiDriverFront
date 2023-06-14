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
  roles!: any[];
  role: Role = new Role();

  constructor(private roleService: RoleService) {
  }
  ngOnInit(): void {

    this.findAllRoles();
  }

  findAllRoles() {
    this.roleService.findAll().subscribe(data => { this.roles = data });
  }
  saveRole() {
    this.roleService.save(this.role).subscribe(
      () => {

        this.findAllRoles();

        this.role = new Role();
      }
    )
  }
  deleteRole(id: number) {
    this.roleService.delete(id).subscribe(
      () => {
        this.findAllRoles();
      }
    )
  }
}

