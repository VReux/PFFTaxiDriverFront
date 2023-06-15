import { Taxi } from "./taxi";
import { Utilisateur } from "./utilisateur";

export class Chauffeur extends Utilisateur {
    numPermis!: string;
    taxi!:Taxi;

}
