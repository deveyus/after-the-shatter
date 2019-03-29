enum contraband {
    None,
    Weapons,
    Drugs,
    Information,
    Computers,
    Technology,
    Travellers,
    Psionics,
    Varies
}

const AGovernmentType:any[] = [
    ["0", "None"],
    ["1", "Company/Corporation"],
    ["2", "Participating Democracy"],
    ["3", "Self-Perpetuating Oligarchy"],
    ["4", "Representative Democracy"],
    ["5", "Feudal Technocracy"],
    ["6", "Captive Government"],
    ["7", "Balkanisation"],
    ["8", "Civil Service Bureaucracy"],
    ["9", "Impersonal Bureaucracy"],
    ["A", "Charismatic Dictator"],
    ["B", "Non-Charismatic Leader"],
    ["C", "Charismatic Oligarchy"],
    ["D", "Religious Dictatorship"],
    ["E", "Religious Autocracy"],
    ["F", "Totalitarian Oligarchy"]
]
const ADescription:any[] = [
    ["0", "No government structure. In many cases, family bonds predominate"],
    ["1", "Ruling functions are assumed by a company managerial elite, and most citizenry are company employees or dependants"],
    ["2", "Ruling functions are reached by the advice and consent of the citizenry directly"],
    ["3", "Ruling functions are performed by a restricted minority, with little or no input from the mass of citizenry"],
    ["4", "Ruling functions are performed by elected representatives"],
    ["5", "Ruling functions are performed by specific individuals for persons who agree to be ruled by them. Relationships are based on the performance of technical activities which are mutually beneficial"],
    ["6", "Ruling functions are performed by an imposed leadership answerable to an outside group"],
    ["7", "No central authority exists; rival governments complete for control. Law level refers to the government nearest the starport"],
    ["8", "Ruling functions are performed by government agencies employing individuals selected for their expertise"],
    ["9", "Ruling functions are performed by agencies which have become insulated from the governed citizens"],
    ["A", "Ruling functions are performed by agencies directed by a single leader who enjoys the overwhelming confidence of the citizens"],
    ["B", "A previous charismatic dictator has been replaced by a leader through normal channels"],
    ["C", "Ruling functions are performed by a select group of members of an organisation orclass which enjoys the overwhelming confidence of the citizenry"],
    ["D", "Ruling functions are performed by a religious organisation without regard to the specific individual needs of the citizenry"],
    ["E", "Government by a single religious leader having absolute power over the citizenry"],
    ["F", "Government by an all-powerful minority which maintains absolute control through widespread coercion and oppresion"]
]
const AContraband:any[] = [
    ["0", [contraband.None]],
    ["1", [contraband.Weapons, contraband.Drugs, contraband.Travellers]],
    ["2", [contraband.Drugs]],
    ["3", [contraband.Technology, contraband.Weapons, contraband.Travellers]],
    ["4", [contraband.Drugs, contraband.Weapons, contraband.Psionics]],
    ["5", [contraband.Technology, contraband.Weapons, contraband.Computers]],
    ["6", [contraband.Weapons, contraband.Technology, contraband.Travellers]],
    ["7", [contraband.Varies]],
    ["8", [contraband.Drugs, contraband.Weapons]],
    ["9", [contraband.Technology, contraband.Weapons, contraband.Drugs, contraband.Travellers, contraband.Psionics]],
    ["A", [contraband.None]],
    ["B", [contraband.Weapons, contraband.Technology, contraband.Computers]],
    ["C", [contraband.Weapons]],
    ["D", [contraband.Varies]],
    ["E", [contraband.Varies]],
    ["F", [contraband.Varies]]
]

const AFactions:any[] =[
    ["2", "Obscure group"],
    ["3", "Obscure group"],
    ["4", "Fringe group"],
    ["5", "Fringe group"],
    ["6", "Minor group"],
    ["7", "Minor group"],
    ["8", "Notable group"],
    ["9", "Notable group"],
    ["A", "Significant"],
    ["B", "Significant"],
    ["C", "Overwhelming popular support"]
]

export namespace government {
    export const governmentType = new Map(AGovernmentType);
    export const description = new Map(ADescription);
    export const contraband = new Map(AContraband);
    export const factions = new Map(AFactions);
    
}