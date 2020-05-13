import React from 'react';
import BookList from './components/book-list';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>

    </div>
  );
}

export default App;
