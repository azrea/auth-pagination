import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  MainContainer,
  SearchbarContainer,
  BookList,
} from "./StyledStockPhotos";
import Book from "./Book";
import { FaSearch } from "react-icons/fa";

const MainUrl = `https://www.googleapis.com/books/v1/volumes?q=`;
const clientId = `&key=AIzaSyDlOTfyNfg9mixMMTh6xcZfPqKTirKe1b4`;
const startIndexUrl = `&startIndex=`;
const endIndexUrl = `&maxResults=40`;

const StockPhotos = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("Enid blyton");
  const [startIndex, setStartIndex] = useState(0);
  const [books, setBooks] = useState([]);
  const [prev, setPrev] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchPhotos();
  };

  const fetchPhotos = async () => {
    setLoading(true);

    const googleUrl = `${MainUrl}${query}${startIndexUrl}${startIndex}${endIndexUrl}${clientId}`;

    try {
      const response = await fetch(googleUrl);
      const data = await response.json();

      setBooks((prevBooks) => {
        console.log(prevBooks);
        return [...new Set([...prevBooks, ...data.items])];
      });
      setLoading(false);
      console.log(books);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const observer = useRef();
  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          console.log("visible", startIndex);
          console.log(node);
          setStartIndex((e) => e + 40);
          setPrev(books);
          fetchPhotos();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    setBooks([]);
    setStartIndex(0);
  }, [query]);

  return (
    <MainContainer>
      <SearchbarContainer>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>
          <FaSearch className="searchIcon" />
        </button>
      </SearchbarContainer>

      {!loading ? (
        <BookList>
          {books.map((book, index) => {
            if (books.length === index + 1) {
              return (
                <div ref={lastElement}>
                  <Book key={index} {...book} />
                </div>
              );
            }
            return <Book key={index} {...book} />;
          })}
        </BookList>
      ) : (
        <>
          <BookList>
            {prev.map((book, index) => {
              if (books.length === index + 1) {
                return (
                  <div ref={lastElement}>
                    <Book key={index} {...book} />
                  </div>
                );
              }
              return <Book key={index} {...book} />;
            })}
          </BookList>
          <h2>Loading...</h2>
        </>
      )}
    </MainContainer>
  );
};

export default StockPhotos;
