import {Book, LibMgrCallback} from './interfaces';
import {BookOrUndefined, BookProperties} from './types';
import {Category} from './enums';

export function getBookProp(book: Book, prop: BookProperties) {
    if (typeof book[prop] === 'function') return (book[prop] as Function).name;
    return book[prop];
}

export function getAllBooks(): readonly Book[] {
    const books: ReadonlyArray<Book> = <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.JavaScript },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.JavaScript }
    ];
    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    const { length: numberOfBooks } = books;
    const title = books.find(book => book.available)?.title || 'Not available';
    console.log('Books total: ', numberOfBooks);
    console.log('First available: ', title);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    const booksByCategory: string[] = getAllBooks()
        .filter(book => book.category === category)
        .map(book => book.title);
    return booksByCategory;
}

export function logBookTitles(titles: string[]): void {
    console.log('Titles: ', titles.join('/'));
}

export function getBookAuthorByIndex(index: number): [string, string] {
    const book = getAllBooks()[index];
    const { title, author } = book;
    return [title, author];
}

export function calcTotalPages(): bigint {
    const libs = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 },
    ];
    const totalPages = libs.reduce((acc: bigint, lib) => acc + BigInt(lib.books) * BigInt(lib.avgPagesPerBook), BigInt(0) );
    return totalPages;
}


export function createCustomer(name: string, age?: number, city?: string): void {
    console.log('Name', name);
    age && console.log('age', age);
    city && console.log('city',city);
}

export function getBookByID(id: number): BookOrUndefined {
    const books = getAllBooks();
    return books.find(book => book.id === id);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log('checking books for ', customer);
    const titles: string[] = [];
    bookIDs.forEach(id => {
        const book = getBookByID(id);
        if (book && book.available) {
            titles.push(book.title);
        }
    });
    return titles;
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return title.split('').reverse().join('');
}

export function printBook(book: Book): void {
    console.log(book.title, book.author);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [string | boolean | number, boolean?]): string[] {
    const books = getAllBooks();
    // let titles = [];
    if (args.length === 1) {
        const [arg] = args;
        if (typeof  arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
}

export const createCustomerId = (name: string, id: string): string => name + id;

export function purge<T>(inventory: T[]): Array<T> {
    return inventory.slice(2);
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(()=>{
        try {
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch(err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error, titles: string[]): void {
    if (err) {
        console.log(`Error message: ${err.message}`)
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(()=>{
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
}

export async function logSearchResults(category: Category) {
    const books = await getBooksByCategoryPromise(category);
    console.log(books);
}
