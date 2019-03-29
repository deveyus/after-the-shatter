// Page 217
const ADiameter: any[] = [
    ["1", 1600],
    ["2", 3200],
    ["3", 4800],
    ["4", 6400],
    ["5", 8000],
    ["6", 9600],
    ["7", 11200],
    ["8", 12800],
    ["9", 14400],
    ["A", 16000]
]
const AGravity: any[] = [
    ["1", 0.122],
    ["2", 0.240],
    ["3", 0.377],
    ["4", 0.500],
    ["5", 0.625],
    ["6", 0.840],
    ["7", 0.875],
    ["8", 1],
    ["9", 1.120],
    ["A", 1.250]
]

export namespace size {
    export const Diameter = new Map(ADiameter);
    export const Gravity = new Map(AGravity);

}
