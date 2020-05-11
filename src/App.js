import React from 'react';
import BookList from './components/book-list';
import Navbar from './components/Navbar';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider>

    </div>
  );
}

export default App;
