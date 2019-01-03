interface IBook {
  title: string;
  page: number;
}

class Book implements IBook {

  public static read(row: string): Book {
    const [title, page] = row.split(/,/);
    if (page === undefined) {
      throw new Error(`bad page: ${page}`);
    }
    return new Book(title, Number(page));
  }

  constructor(
    public title: string,
    public page: number,
  ) {
  }
}

const DATA: string = `
dog,1
cat,2
`;

let books: Book[] = [];
DATA.split(/\n/).forEach((row) => {
  if (row.length !== 0) {
    books.push(Book.read(row));
  }
});

console.dir(books);
