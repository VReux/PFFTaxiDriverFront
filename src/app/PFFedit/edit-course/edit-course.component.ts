import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/PFFmodel/course';
import { CourseService } from 'src/app/PFFservices/course-service.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  editForm!:FormGroup;
  course:Course=new Course();
  constructor(private router:Router,private courseService:CourseService,private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    let currentCourse = localStorage.getItem("editCourseId");
    if(!currentCourse){
      alert("Invalid Action...");
      this.router.navigate(["/course"]);
      return;
    }
    this.editForm = this.formBuilder.group({
      idCourse:[],
	    avisCourse:['',Validators.required],
	    noteCourse:['',Validators.required],
	    noteChauffeur:['',Validators.required],
	    tempsCourse:['',Validators.required],
	    prixReel:['',Validators.required],
	    adresseDepart:['',Validators.required],
    	adresseArrivee:['',Validators.required],
    })
    this.courseService.findOne(+currentCourse).subscribe(data =>{this.editForm.patchValue(data)});
  }
  updateCourse(){
    var courseString = JSON.stringify(this.editForm.value);
    this.courseService.update(courseString).subscribe(
      () =>{
        this.router.navigate(["/course"]);
      }
    )
  }

}
