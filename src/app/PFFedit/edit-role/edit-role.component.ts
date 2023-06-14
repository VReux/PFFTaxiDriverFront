
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/PFFmodel/role';
import { RoleService } from 'src/app/PFFservices/role-service.service';


@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {
  editForm!: FormGroup;
  utilisateur: Role = new Role();
  constructor(private router: Router, private roleService: RoleService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let currentRole = localStorage.getItem("editUserId");

    if (!currentRole) {
      alert("Invalid Action...");
      this.router.navigate(["/user-profile"]);
      return;
    }
    this.editForm = this.formBuilder.group({
      idRole: [],
      libelle: ['', Validators.required],
    })
    this.roleService.findOne(+currentRole).subscribe(data => { this.editForm.patchValue(data); console.log("data" + data); });
  }
  updateRole() {
    var RoleString = JSON.stringify(this.editForm.value);
    this.roleService.update(RoleString).subscribe(
      () => {
        this.router.navigate(["/role"]);
      }
    )
  }
}









