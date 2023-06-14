import { Role } from "./role";

export class Utilisateur {
    idUtilisateur!:number;
    nom!:string;
    prenom!:string;
    username!:string;
    password!:string;
    roles!:Role[];

}

