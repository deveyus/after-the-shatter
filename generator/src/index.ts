import { rollD, rollDD, getRandomElement, bound } from "./helpers"
import { IWorld, IFaction, IHexLocation, ETravelCode, ETradeCode } from "./interfaces";
import { } from "fs";
import { starport } from "./data/starport_data";
import { digrams, trigrams} from "./data/word_data"


class world implements IWorld {
    name: string = "TEST WORLD PLS IGNOR";
    location: IHexLocation;
    size: number;
    atmosphere: number;
    hydrographics: number = -1;
    population: number;
    temperature: number = -1;
    government: number;
    factions: IFaction[];
    culturalDifferences: number[] = [];
    lawLevel: number;
    starport: number = -1;
    starportClass: any = "";
    bases: string[] = [];
    techLevel: number = 0;
    travelCode: ETravelCode = ETravelCode.None;
    tradeCodes: ETradeCode[] = [];
    constructor(down: number, left: number) {
       // Name building time
      this.name =  getRandomElement(trigrams) +  getRandomElement(digrams) + getRandomElement(trigrams)

        // Location is external, and required.
        this.location = { down: down, left: left }

        // Size is a simple roll
        this.size = bound(1, 10, rollD());

        // Atmosphere is a easily modified roll
        this.atmosphere = bound(0, 15, rollD(-7 + this.size));

        // Temprature, also known as code-hell
        if (this.atmosphere == 2 || this.atmosphere == 3) {
            this.temperature = bound(2, 12, rollD(-2));
        }

        if (this.atmosphere == 4 || this.atmosphere == 5 || this.atmosphere.toString(16) == "E") {
            this.temperature = bound(2, 12, rollD(-1));
        }

        if (this.atmosphere == 6 || this.atmosphere == 7) {
            this.temperature = bound(2, 12, rollD());
        }

        if (this.atmosphere == 8 || this.atmosphere == 9) {
            this.temperature = bound(2, 12, rollD(1));
        }

        if (this.atmosphere.toString(16) == "A" || this.atmosphere.toString(16) == "D" || this.atmosphere.toString(16) == "F") {
            this.temperature = bound(2, 12, rollD(2));
        }

        if (this.atmosphere.toString(16) == "B" || this.atmosphere.toString(16) == "C") {
            this.temperature = bound(2, 12, rollD(6));
        }

        // Guard against failures.
        if (this.temperature == -1) {
            this.temperature = rollD();
        }

        // Hydrographics, only a minor hell
        if (this.size == 0) {
            this.hydrographics = 0;
        } else {
            if (this.atmosphere != 13) {
                if (this.atmosphere in [0, 1, 10, 11, 12]) {
                    this.hydrographics = bound(0, 10, rollD(-7 + -4));
                 } else {
                     this.hydrographics = bound(0, 10, rollD());
                 }
            }
        }

        // Population, a nice breather.
        this.population = bound(0, 12, rollD(-2));

        // Govenrment
        this.government = bound(1, 12, rollD(-7 + this.population));

        // Factions
        this.factions = [];
        let factionCount = 0;
        if (this.government == 0 || this.government == 7) {
            factionCount = Math.ceil(rollD(0, true) / 2) + 1;
        }
        if (this.government >= 10) {
            factionCount = Math.ceil(rollD(0, true) / 2) - 1;
        }
        console.log(`Faction Count: ${factionCount}`);
        if (factionCount > 0) {
            for (let i = 0; i <= factionCount; i++) {
                let factionGov = rollD();
                let factionPow = rollD();
                this.factions.push({ strength: factionGov, type: factionPow });
            }
        }

        // Cultural Differences
        this.culturalDifferences[0] = rollDD();
        this.culturalDifferences[1] = rollDD();

        // Law
        this.lawLevel = bound(1, 20,  rollD(-7 + this.government));

        // Starport
        if (this.population >= 8 && this.population < 10) {
            this.starport = bound(2, 11, rollD(1));
        }
        if (this.population >= 10) {
            this.starport = bound(2, 11, rollD(2));
        }
        if (this.population <= 4) {
            this.starport = bound(2, 11, rollD(-1));
        }
        if (this.population < 2) {
            this.starport = bound(2, 11, rollD(-2));
        }
        
        this.starportClass = starport.portClass.get(this.starport.toString());
        // Tech Level
        let score = 0
        if (this.size == 0 || this.size == 1) {
            score = score + 2;
        }

        if (this.size in [2,3,4]) {
            score = score + 1;
        }

        if (this.atmosphere in [0,1,2,3,10, 11, 12, 13, 14, 15]) {
            score = score + 1;
        }

        if (this.hydrographics == 0 || this.hydrographics == 9) {
            score = score + 1;
        }

        if (this.hydrographics == 10) {
            score = score + 2;
        }

        if (this.population in [1,2,3,4,5,8]) {
            score = score + 1;
        }

        if (this.population == 9) {
            score = score + 2;
        }

        if (this.population == 10) {
            score = score + 4;
        }

        if (this.government == 0 || this.government == 5) {
            score = score + 1;
        }

        if (this.government == 7) {
            score = score + 2;
        }

        if (this.government == 13 || this.government == 14) {
            score = score - 2;
        }

        this.techLevel = score;
        // Bases

        if (this.starportClass != "X") {
            if (this.starportClass == "A") {
                if (rollD() >= 8) {
                    this.bases.push("Naval Base");
                }
                if (rollD() >= 10) {
                    this.bases.push("Scout Base");
                }
                if (rollD() >= 8) {
                    this.bases.push("Research Base")
                }
                this.bases.push("TAS Presence");
            }
            if (this.starportClass == "B") {
                if (rollD() >= 8) {
                    this.bases.push("Naval Base");
                }
                if (rollD() >= 8) {
                    this.bases.push("Scout Base");
                }
                if (rollD() >= 10) {
                    this.bases.push("Research Base")
                }
                this.bases.push("TAS Presense");
            }
            if (this.starportClass == "C") {
                if (rollD() >= 10) {
                    this.bases.push("TAS Presence");
                }
                if (rollD() >= 8) {
                    this.bases.push("Scout Base");
                }
                if (rollD() >= 10) {
                    this.bases.push("Research Base")
                }
            }
            if (this.starportClass == "D") {
                if (rollD() >= 7) {
                    this.bases.push("Scout Base");
                }
            }
        }

        // Trade Codes, if a higher power exists, it frowns upon me this day.
        if (this.atmosphere >= 4 && this.atmosphere <= 9 && this.hydrographics >= 4 && this.hydrographics <= 8 && this.population >= 5 && this.population <= 7) {
            this.tradeCodes.push(ETradeCode.Ag);
        }
        if (this.size == 0 && this.atmosphere == 0 && this.hydrographics == 0) {
            this.tradeCodes.push(ETradeCode.As);
        }
        if (this.population == 0 && this.government == 0 && this.lawLevel == 0) {
            this.tradeCodes.push(ETradeCode.Ba);
        }
        if (this.atmosphere >= 2 && this.hydrographics == 0) {
            this.tradeCodes.push(ETradeCode.De);
        }
        if (this.atmosphere >= 10 && this.hydrographics >= 1) {
            this.tradeCodes.push(ETradeCode.Fl)
        }
        if (this.size >= 6 && this.size <= 8 && (this.atmosphere in [5, 6, 8]) && this.hydrographics >= 5 && this.hydrographics <= 7) {
            this.tradeCodes.push(ETradeCode.Ga);
        }
        if (this.population >= 9) {
            this.tradeCodes.push(ETradeCode.Hi);
        }
        if (this.techLevel >= 12) {
            this.tradeCodes.push(ETradeCode.Ht);
        }
        if (this.atmosphere in [1,2] && this.hydrographics >= 1) {
            this.tradeCodes.push(ETradeCode.Ie);
        }
        if (this.atmosphere in [0,1,2,4,7,9] && this.population >= 9) {
            this.tradeCodes.push(ETradeCode.In)
        }
        if (this.population <= 3) {
           this.tradeCodes.push(ETradeCode.Lo);
        }
        if (this.techLevel <= 5) {
            this.tradeCodes.push(ETradeCode.Lt);
        }
        if (this.atmosphere in [0,1,2,3] && this.hydrographics in [0,1,2,3] && this.population >= 6) {
            this.tradeCodes.push(ETradeCode.Na);
        }
        if (this.population >=0 && this.population <= 6) {
            this.tradeCodes.push(ETradeCode.Ni);
        }
        if (this.atmosphere in [2,3,4,5] && this.hydrographics in [0,1,2,3]) {
            this.tradeCodes.push(ETradeCode.Po);
        }
        if (this.atmosphere in [6,8] && this.population in [6,7,8] && this.government >= 4 && this.government <= 9) {
            this.tradeCodes.push(ETradeCode.Ri);
        }
        if (this.atmosphere == 0) {
            this.tradeCodes.push(ETradeCode.Va);
        }
        if (this.hydrographics >= 10) {
            this.tradeCodes.push(ETradeCode.Wa)
        }
    } // end of constructor
}

let currWorld = new world(1,1);
console.log(currWorld);

