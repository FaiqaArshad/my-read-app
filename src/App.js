import "./App.css";
import { useState } from "react";
import Shelves from "./components/Shelves";
import Searchbtn from "./components/Searchbtn";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from "./components/Header";
import { useEffect } from "react";
import * as BooksAPI from './BookAPI'
import Books from "./components/Book";
import { useDebounce } from 'use-debounce'
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([])
  const [SearchMap, setSearchMap] = useState(new Map());
  const [searchBooks, setSetBooks] = useState([])
  const [data] = useDebounce(query, 500)
  const [updateSearchShelf, setUpadteSearchShelf] = useState([])


  // getting data from API
  useEffect(() => {
    BooksAPI.getAll()
      .then(data => {
        console.log(data)
        setBooks(data)
        setSearchMap(bookmap(data))

      }
      );
  }, [])


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


  const chaneBookShelf = (book, shelf) => {
    const updatedBooks = books.map(bk => {
      if (bk.id === book.id) {
        book.shelf = shelf;
        return book;
      }
      return bk;
    })
    if (!SearchMap.has(book.id)) {
      book.shelf = shelf;
      updatedBooks.push(book)
    }

    setBooks(updatedBooks);
    BooksAPI.update(book, shelf);
  }

  useEffect(() => {
    let isReturnSearch = true;
    if (data) {
      BooksAPI.search(data).then(data => {

        if (data.error) {
          setSetBooks([])

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

  return (

    <>
      <BrowserRouter>


        <Routes>


          <Route path="/search" element={
            <div className="search-books">
              <div className="search-books-bar">
                <Link to="/">
                  < button className="close-search">  Close</button>
              



                </Link>
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

          } />



          <Route path="/" element={


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

          } />
        </Routes>

      </BrowserRouter>


    </>


  );
}
export default App;
