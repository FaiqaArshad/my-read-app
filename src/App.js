import "./App.css";
import { useState } from "react";
import Shelves from "./components/Shelves";
import Searchbtn from "./components/Searchbtn";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'

import Header from "./components/Header";
import { useEffect } from "react";
import * as BooksAPI from './BookAPI'
import Books from "./components/Book";
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([])
  const [SearchMap, setSearchMap] = useState(new Map());
  const [searchBooks, setSetBooks] = useState([])
  const [updateSearchShelf, setUpadteSearchShelf] = useState([])

  const chaneBookShelf = (book, shelf) => {
    const updatedBooks = books.map(bk => {
      if (bk.id === book.id) {
        book.shelf = shelf;
        return book;
      }
      return bk;
    })


    setBooks(updatedBooks);
    BooksAPI.update(book, shelf).then(data => console.log(data));
  }

// getting data from API
  useEffect(() => {
    BooksAPI.getAll()
      .then(data => {
        console.log(data)
        setBooks(data)
        setSearchMap(bookmap(data))

      }
      );
  }, [books])

  useEffect(() => {
    let isReturnSearch = true;
    if (query) {
      BooksAPI.search(query).then(data => {
        console.log(`your searched data is here! ${data}`)

        if (data.error) {
          console.log(data)
        }
        else {
          if (isReturnSearch)
            setSetBooks(data);
        }
      })
    }
    return () => {
      isReturnSearch = false;
      setSetBooks([])
    }
  }, [query])



  useEffect(() => {
    const updated = searchBooks.map((books) => {
      if (SearchMap.has(books.id)) {
        return SearchMap.get(books.id);
      }
      else
        return books
    })
    setUpadteSearchShelf(updated)

  }, [searchBooks])
  const bookmap = (books) => {
    const data = new Map();
    books.map(book =>
      data.set(book.id, book))
    return data

  }



  return (
    <div className="app">
      <BrowserRouter>

        {showSearchPage ? (

          // <SearchBooks
          //   books={books}

          //   showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage}   />

          <div className="search-books">
            <div className="search-books-bar">
              <a
                className="close-search"
                onClick={() => setShowSearchpage(!showSearchPage)}
              >
                Close
              </a>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title, author, or ISBN"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}

                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">

                {console.log(`search result! ${searchBooks}`)}
                {updateSearchShelf.map(book => (
                  <li key={book.id}>
                    <Books book={book}
                      changeShelf={chaneBookShelf} />
                  </li>
                ))}

              </ol>
            </div>
          </div>


        )
          :
          (

            <div className="list-books">
              <Header />
              <div className="list-bools-content">
                <Shelves books={books}
                  changeShelf={chaneBookShelf} />
              </div>
              {/* Search button */}
              <Searchbtn
                setShowSearchpage={setShowSearchpage} showSearchPage={showSearchPage} />
            </div>
          )
        }
      </BrowserRouter>
    </div>
  );
}
export default App;
