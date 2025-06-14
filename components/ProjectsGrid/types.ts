export type Project = {
    "id": string,
    "name": string,
    "area": number,
    "sizes": {
        "l": number,
        "w": number
    },
    "rooms": number,
    "floors": number,
    "time": number,
    "type": string,
    "cost": number,
    "hasZeroFloor": boolean,
    "hasGarage": boolean,
    "hasAttic": boolean,
    "hasPanoramicWindows": boolean
}