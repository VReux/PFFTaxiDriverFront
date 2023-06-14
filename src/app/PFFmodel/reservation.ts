import { Adresse } from "./adresse";

export class Reservation {
    idReservation!:number;
    heureDepart!:Date;
    tauxHoraire!:number;
    validation!:boolean;
    adresseDepart!:Adresse;
    adresseArrivee!:Adresse;

}