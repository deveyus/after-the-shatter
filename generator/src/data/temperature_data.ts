// Page 219
const ADescriptor:any[] = [
    ["0", "Frozen"],
    ["1", "Frozen"],
    ["2", "Frozen"],
    ["3", "Cold"],
    ["4", "Cold"],
    ["5", "Temperate"],
    ["6", "Temperate"],
    ["7", "Temperate"],
    ["8", "Temperate"],
    ["9", "Temperate"],
    ["A", "Hot"],
    ["B", "Hot"],
    ["C", "Boiling"],
    ["D", "Boiling"],
    ["E", "Boiling"],
    ["F", "Boiling"]
]

const AAverageTemperature:any[] = [
    ["0", "-51º or less"],
    ["1", "-51º or less"],
    ["2", "-51º or less"],
    ["3", "-51º to 0º"],
    ["4", "-51º to 0º"],
    ["5", "0º to 30º"],
    ["6", "0º to 30º"],
    ["7", "0º to 30º"],
    ["8", "0º to 30º"],
    ["9", "0º to 30º"],
    ["A", "31º to 80º"],
    ["B", "31º to 80º"],
    ["C", "81º or more"],
    ["D", "81º or more"],
    ["E", "81º or more"],
    ["F", "81º or more"]
]

export namespace temperature {
    export const descriptor = new Map(ADescriptor);
    export const averageTemperature = new Map(AAverageTemperature);
}