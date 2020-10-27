import {ReferenceItem} from './reference-item';
import {positiveInteger} from '../decorators';

export default class Encyclopedia extends ReferenceItem {
    private privateCopies: number;

    @positiveInteger
    get copies(): number {
        return this.privateCopies;
    }

    set copies(value: number) {
        this.privateCopies = value;
    }

    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    printItem(): void {
        super.printItem();
        console.log(this.edition, this.year);
    }

    printCitation(): void {
        console.log(this.title, this.year);
    }
}
