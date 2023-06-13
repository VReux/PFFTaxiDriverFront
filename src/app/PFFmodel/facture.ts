import { Course } from "./course";

export class Facture {
    idFacture!:number;
    tempsCourse!:number;
    prixReelHT!:number;
    prixReelTTC!:number;
    tva!:number;
    date!:Date;
    courses!:Course[];
}
