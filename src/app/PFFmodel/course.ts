//import { Facture } from "./facture";
//import { Reservation } from "./reservation";
import { Adresse } from "./adresse";

export class Course {
    idCourse!:number;
	avisCourse!:string;
	noteCourse!:number;
	noteChauffeur!:number;
	tempsCourse!:number;
	prixReel!:number;
	adresseDepart!:Adresse;
	//adresseDepart:Adresse=new Adresse();
	adresseArrivee!:Adresse;
	//adresseArrivee:Adresse=new Adresse();
	//facture!:Facture;
	//reservation!:Reservation;
}
