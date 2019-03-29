// Page 225
const AClass:any[] = [
    ["2", "X"],
    ["3", "E"],
    ["4", "E"],
    ["5", "D"],
    ["6", "D"],
    ["7", "C"],
    ["8", "C"],
    ["9", "B"],
    ["A", "B"],
    ["B", "A"],
]

const AQuality:any[] = [
    ["A", "Excellent"],
    ["B", "Good"],
    ["C", "Routine"],
    ["D", "Poor"],
    ["E", "Frontier"],
    ["X", "No Starport"]
]

const ACost:any[] = [
    ["A", 1000],
    ["B", 500],
    ["C", 100],
    ["D", 10],
    ["E", 0],
    ["X", 0]
]

const AFuel:any[] = [
    ["A", "Refined"],
    ["B", "Refined"],
    ["C", "Unrefined"],
    ["D", "Unrefined"],
    ["E", "None"],
    ["X", "None"]
]

const AFacilities:any[] = [
    ["A", "Shipyard (all), Repair"],
    ["B", "Shipyard (spacecraft), Repair"],
    ["C", "Shipyard (small craft), Repair"],
    ["D", "Limited Repair"],
    ["E", "None"],
    ["X", "None"]
]

export namespace starport {
    export const portClass = new Map(AClass);
    export const quality = new Map(AQuality);
    export const cost = new Map(ACost);
    export const fuel = new Map(AFuel);
    export const facilities = new Map(AFacilities);
}