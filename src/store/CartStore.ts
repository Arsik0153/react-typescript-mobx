import { makeAutoObservable } from 'mobx';
import { BookT } from '../types/Book';
import { BOOKS } from './booksListFixture';

export class CartStore {
    books: BookT[] = BOOKS;
    cart: BookT[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    getBooks(): BookT[] {
        return this.books;
    }

    addToCart(book: BookT): void {
        this.cart.push(book);
    }
}
