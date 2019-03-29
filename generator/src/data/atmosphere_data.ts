// Page 218
const AComposition:any[] = [
    ["0", "None"],
    ["1", "Trace"],
    ["2", "Very Thin, Tainted"],
    ["3", "Very Thin"],
    ["4", "Thin, Tainted"],
    ["5", "Thin"],
    ["6", "Standard"],
    ["7", "Standard, Tainted"],
    ["8", "Dense"],
    ["9", "Dense, tainted"],
    ["A", "Exotic"],
    ["B", "Corrosive"],
    ["C", "Insidious"],
    ["D", "Very Dense"],
    ["E", "Low"],
    ["F", "Unusual"]
]

const APressure:any[] = [
    ["0", "0.00"],
    ["1", "0.001 to 0.09"],
    ["2", "0.1 to 0.42"],
    ["3", "0.1 to 0.42"],
    ["4", "0.43 to 0.7"],
    ["5", "0.43 to 0.7"],
    ["6", "0.71 to 1.49"],
    ["7", "0.71 to 1.49"],
    ["8", "1.5 to 2.49"],
    ["9", "1.5 to 2.49"],
    ["A", "Varies"],
    ["B", "Varies"],
    ["C", "Varies"],
    ["D", "2.5 or more"],
    ["E", "0.5 or less"],
    ["F", "Varies"]
]

const ASurvivalGear:any[] = [
    ["0", "Vacc Suit"],
    ["1", "Vacc Suit"],
    ["2", "Respirator, Filter"],
    ["3", "Respirator"],
    ["4", "Filter"],
    ["5", "None"],
    ["6", "None"],
    ["7", "Filter"],
    ["8", "None"],
    ["9", "Filter"],
    ["A", "Air Supply"],
    ["B", "Vacc Suit"],
    ["C", "Vacc Suit"],
    ["D", "None"],
    ["E", "None"],
    ["F", "Varies"]
]

export namespace atmosphere {
    export const Composition = new Map(AComposition);
    export const Pressure = new Map(APressure);
    export const SurvivalGear = new Map(ASurvivalGear);
}