import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { book } from './book'
@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookUrl = "/api/book";

  constructor(private http: HttpClient) { }


  getbookbyid(bookid: string) {
    return this.http.get<book>(this.bookUrl + "/" + bookid);
  }
  Createbook(book: book): Observable<book> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/Json');
    let options = { headers: httpheader };
    return this.http.post<book>(this.bookUrl, book, options);
  };
  Updatebooks(book: book): Observable<number> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/Json');
    let options = { headers: httpheader };
    return this.http.put<number>(this.bookUrl + "/" + book.id, book, options);
  };
  Deletebook(bookid: any): Observable<number> {
    let httpheader = new HttpHeaders()
      .set('Content-Type', 'application/Json');
    let options = { headers: httpheader };
    return this.http.delete<number>(this.bookUrl + "/" + bookid, options);
  };
  getBooksFromStore(): Observable<book[]> {
    return this.http.get<book[]>(this.bookUrl);
  }
}
