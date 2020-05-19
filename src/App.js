import React from 'react';
import BookList from './components/book-list';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle'
import AuthContextProvider from './context/AuthContext';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <ThemeContextProvider>
        <Navbar />
        <BookContextProvider>
        <BookList />
        </BookContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
      </AuthContextProvider>

    </div>
  );
}

export default App;
