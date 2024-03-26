export class PlaceLocation {

    constructor(
        public address: string = '',
        public city: string = '',
        public latitude: number |  null = null,
        public longtitude: number | null = null,
    ) {}
}