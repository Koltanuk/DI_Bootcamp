interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public getBookDetails(isbn: string): Book | null {
        const book = this.books.find(b => b.isbn === isbn);
        return book || null;
    }

    protected getAllBooks(): Book[] {
        return this.books;
    }
}

class DigitalLibrary extends Library {
    public readonly website: string;

    constructor(website: string) {
        super();
        this.website = website;
    }

    public listBooks(): string[] {
        return this.getAllBooks().map(book => book.title);
    }
}

const myDigitalLibrary = new DigitalLibrary("https://mydigitallibrary.com");


myDigitalLibrary.addBook({
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "123456789",
    publishedYear: 1960,
    genre: "Fiction"
});

myDigitalLibrary.addBook({
    title: "1984",
    author: "George Orwell",
    isbn: "987654321",
    publishedYear: 1949
});

const bookDetails = myDigitalLibrary.getBookDetails("123456789");
console.log("Book Details:", bookDetails);

const bookTitles = myDigitalLibrary.listBooks();
console.log("Book Titles:", bookTitles);

console.log("Library Website:", myDigitalLibrary.website);