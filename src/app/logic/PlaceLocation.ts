export class PlaceLocation {

    constructor(
        public adress: string = '',
        public city: string = '',
        public latitude: number |  null = null,
        public longtitude: number | null = null,
    ) {}
}