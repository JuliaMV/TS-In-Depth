import {Category} from './enums';
import {
    bookTitleTransform, calcTotalPages, createCustomer, createCustomerId,
    getAllBooks, getBookAuthorByIndex, getBookByID, getBookProp,
    getBooksByCategory,
    getBooksByCategoryPromise, getBookTitlesByCategory, getTitles, logBookTitles,
    logCategorySearch, logFirstAvailable,
    logSearchResults, printBook, purge
} from './functions';
import {BookRequiredFields, PersonBook, UpdatedBook, СreateCustomerFunctionType} from './types';
import {Author, Book, Librarian, Magazine, Logger} from './interfaces';
import {RefBook, ReferenceItem, UniversityLibrarian, Shelf} from './classes';


showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}


// // Task 02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.CSS));
// console.log(getBookAuthorByIndex(3));
// console.log(calcTotalPages());
//
// // Task 03.01
// const myId = createCustomerId('Ann', '10');
// console.log(myId);
// let idGenerator: (name: string, id: string) => string;
// // idGenerator = (name: string, id: number) => `${name}-${id}`;
// idGenerator = createCustomerId;
// console.log(idGenerator('Ann', '30'));
//
// // Task 03.02
// createCustomer('John');
// console.log(getBookTitlesByCategory(undefined));
// logFirstAvailable();
// console.log(getBookByID(1));
//
// // Task 03.03
// const checkoutBooks1 = getTitles(2, true);
// console.log(checkoutBooks1);
//
// // Task 03.04
// console.log(bookTitleTransform('34'));
//
// // Task 04.01
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     // year: 2015,
//     // copies: 3,
//     pages: 200,
//     markDamaged: reason => {
//         console.log(`Damaged: ${reason}`);
//     }
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');
//
// // Task 04.02
// let logDamage: Logger;
// logDamage = (reason) => console.log(reason);
// logDamage('missing back cover');
//
// // Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Joun',
//     email: 'test@test.com',
//     numBooksPublished: 1,
// };
//
// const favoriteLibrarian: Librarian = {
//     name: 'Jane',
//     email: 'test@test.com',
//     department: 'Front-End',
//     assistCustomer: null,
// };
//
// // Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript'
//     }
// };
//
// console.log(offer.magazine?.());
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));
//
//
// // Task 05.01
// const ref: ReferenceItem = new ReferenceItem('CSS-book', 2020);
// console.log(ref);
// ref.printItem();
// ref.publisher = 'Supper Publisher';
// console.log(ref.publisher);
//
// // Task 05.02
// const refBook: RefBook = new RefBook('Wiki', 2000, 13);
// console.log(refBook);
// refBook.printItem();
//
// // Task 05.03
// refBook.printCitation();
//
// // Task 05.04
// const favoriteLabrarian: Librarian = new UniversityLibrarian();
// favoriteLabrarian.name = 'Anna';
// favoriteLabrarian.assistCustomer('Boris');
//
// // Task 05.05
// const personBook: PersonBook = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.JavaScript,
//     pages: 19,
//     email: 'test@email.com',
//     title: 'JS type',
//     name: 'Jane'
// };
//
// console.log('personBook', personBook);
//
// // Task 06.05
// const flag = false;
// if (flag) {
//     import('./classes')
//         .then(module => {
//             const reader = new module.Reader();
//             console.log(reader);
//         });
// } else {
//     console.log('NO data');
// }
//
// // Task 07.01
// const inventory: Book[] = [
//     { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//     { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//     { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//     { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
// ];
// const books = purge(inventory);
// console.log(books);
// const numbers = purge([1,2,3,4]);
// console.log(numbers);
//
// // Task 07.02
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const book: Book = bookShelf.getFirst();
// console.log(book.title);
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(magazine => magazineShelf.add(magazine));
// const magazine: Magazine = magazineShelf.getFirst();
// console.log(magazine);
//
// // Task 07.03
// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));
//
// // Task 07.04
// const book: BookRequiredFields = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     markDamaged: (p: string) => console.log(p),
//     title: 'Title',
//     pages: 200,
// };
// const uBook: UpdatedBook = {
//     id: 1,
//     author: 'Boris',
// };
// const params: Parameters<СreateCustomerFunctionType> = ['Anna'];
// createCustomer(...params);
//
// // Task 08.01
// const l = new UniversityLibrarian();
// console.log(l);
// UniversityLibrarian['a'] = 10;
//
// // Task 08.02
// const fLibrarian = new UniversityLibrarian();
// console.log(fLibrarian);
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');
// fLibrarian['printLibrarian']();
// UniversityLibrarian['a'] = 10;
//
// // Task 08.03
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity =  null;
//
// // Task 08.04
// const e = new RefBook('No title', 2020, 10);
// e.printItem();
//
// // Task 08.05
// const fLibrarian = new UniversityLibrarian();
// console.log(fLibrarian);
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');
//
// // Task 08.06
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian.name);
//
// // Task 08.07
// const e = new RefBook('No title', 2020, 10);
// e.copies = -10;
// console.log(e);
//
//
// // Task 09.01
// console.log('start');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('end');
//
// // Task 09.02
// console.log('start');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(numberOfBooks => {
//         console.log(numberOfBooks);
//     })
//     .catch(console.log);
// getBooksByCategoryPromise(Category.Software)
//     .then(console.log)
//     .catch(console.log);
// console.log('end');
//
// // Task 09.03
// console.log('start');
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software)
//     .catch(console.log);
// console.log('end');

