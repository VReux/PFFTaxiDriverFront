//import { Facture } from "./facture";
//import { Reservation } from "./reservation";

import { Chauffeur } from "./chauffeur";

export class Course {
    idCourse!:number;
	avisCourse!:string;
	noteCourse!:number;
	noteChauffeur!:number;
	tempsCourse!:number;
	prixReel!:number;
	depart!:string;
	arrivee!:string;
	//facture!:Facture;
	//reservation!:Reservation;
	validation!:boolean;
  	distancekm: number;
	chauffeur!:Chauffeur;
}
