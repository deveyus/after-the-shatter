import {  } from "./data/atmosphere_data";
import {  } from "./data/government_data";
import {  } from "./data/hydrographic_data";
import {  } from "./data/size_data";
import {  } from "./data/starport_data";
import {  } from "./data/temperature_data"; 
interface system {
    location: IHexLocation;
    mainWorld: IWorld;
}

export interface IHexLocation {
    left: number;
    down: number;
}

export interface IWorld {
    name: string;
    location: IHexLocation;
    size: number;
    atmosphere: number;
    hydrographics: number;
    population: number;
    temperature: number;
    government: number;
    factions: IFaction[];
    culturalDifferences: number[];
    lawLevel: number;
    starport: number;
    starportClass: any;
    bases: string[];
    techLevel: number;
    travelCode: ETravelCode;
    tradeCodes: ETradeCode[];

}

export interface IFaction {
    type: number;
    strength: number;

}

export enum ETravelCode {
    Amber,
    Red,
    None
}

export enum ETradeCode {
    Ag = "Agricultural",
    As = "Asteroid",
    Ba = "Barren",
    De = "Desert",
    Fl = "Fluid Oceans",
    Ga = "Garden",
    Hi = "High Population",
    Ht = "High Tech",
    Ie = "Ice-Capped",
    In = "Industrial",
    Lo = "Low Population",
    Lt = "Low Tech",
    Na = "Non-Agricultural",
    Ni = "Non-Industrial",
    Po = "Poor",
    Ri = "Rich",
    Va = "Vacuum",
    Wa = "Water World",
    NN = "None"
}