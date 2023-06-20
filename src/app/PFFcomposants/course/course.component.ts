import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from '../../PFFmodel/course';
import { CourseService } from '../../PFFservices/course-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";


declare const google: any;
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  [x: string]: any;
  courses!:any[];
  course:Course = new Course();
  element = false;
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

 constructor(private courseService:CourseService, private router:Router, private httpClient: HttpClient){ }

 ngOnInit(): void {
  this.findAllCourses();
 }

showData() {
  return (this.element = true);
}
hideData() {
  return (this.element = false);
}

 findAllCourses(){
   this.courseService.findAll().subscribe(data => {this.courses = data});
 }
 saveCourse(){
   this.courseService.save(this.course).subscribe(
     () => {
       this.findAllCourses();
       this.course = new Course();
     }
   )
 }
 deleteCourse(idCourse:number){
   this.courseService.delete(idCourse).subscribe(
     () => {
       this.findAllCourses();
     }
   )
  }
  editCourse(course:Course){
   localStorage.removeItem("editCourseId");
   localStorage.setItem("editCourseId",course.idCourse.toString());
   this.router.navigate(['/editCourse',course.idCourse]);
 }
 /*Calcul distance*/
 calculDistance() {
  var distanceMatrix = new google.maps.DistanceMatrixService();
  distanceMatrix.getDistanceMatrix(
    {
      origins: [this.course.depart],
      destinations: [this.course.arrivee],
      travelMode: 'DRIVING',
    },
    (response, status) => {
      this.course.distancekm = Math.round(response.rows[0].elements[0].distance.value * 0.001 * 100) / 100;
    })
}
formattedAddress: string;
  googlePlacesOptions = {
    types: [],
    componentRestrictions: { country: ['fr'] }
  }

  handleAddressChange(address: any) {
    if (address.name == address.formatted_address.split(',')[0]) {
      this.course.depart = address.formatted_address;
    } else {
      this.course.depart = address.name + ', ' + address.formatted_address;
    }

  }
  handleAddressChange2(address: any) {
    if (address.name == address.formatted_address.split(',')[0]) {
      this.course.arrivee = address.formatted_address;
    } else {
      this.course.arrivee = address.name + ', ' + address.formatted_address;
    }

  }
}

