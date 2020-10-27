import {timeout} from "../decorators";

export abstract class ReferenceItem {
    // title: string;
    // year: number;
    //
    // constructor(newTitle, newYear) {
    //     console.log('Creating a new ReferenceItem');
    //     this.title = newTitle;
    //     this.year = newYear;
    // }

    private _publisher: string;

    static department: string = 'Research';

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem');

    }

    @timeout(2000)
    printItem() {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(ReferenceItem.department);
    }

    get publisher(): string {
        // eslint-disable-next-line no-underscore-dangle
        return this._publisher.toUpperCase();
    }

    set publisher(val: string) {
        // eslint-disable-next-line no-underscore-dangle
        this._publisher = val;
    }

    abstract printCitation(): void;
}
