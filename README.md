# MyReads Project

This is the simple React js project to track the reading app. Basically in main page of the application it has three shelves that is: `1) Continue Reading 2)  Want to Read 3)  Read `
Each book in a respective shelf have four different options to select that is `1) Continue Reading 2)  Want to Read 3)  Read  4) none`. USer has options to select to move the book to respective shelf. Each book has information of their title and authors. Moreover it has one more functionality that is to search the respcetive and then moving the book to repective shlef otherwise defualt option is none.


## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Project Structure

```bash
├── node_modules # packages and dependencies to be used throughout the project
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── 
|_src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app.Contains data having different componentets calling and state management and life cycle of application ius managed by this file.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ── components # Different componentes that have been used to built an application 
    │   ├── Header.js # componenet to store data for header of application
    │   └── Shelves.js # moving the book to the respective shelf based on their status that is "want to read, Continue Reading, Read and none"
    |   ├── Shelf.js # Rendering the book on respective shelf and to the main page of application
    │   └── Book.js # component to defining the state of each book  and rendering based on status
    |   ├── Searchbtn.js # Redirecting to sEarch functionality of an application
    



## Backend Server

To simplify your development process,a backend server has been provided for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods  to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.





