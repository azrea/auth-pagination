import { useState, useEffect } from "react";
import paginate from "./utils";

const url = "https://random-word-api.herokuapp.com/word?number=100000";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [words, setWords] = useState([]);
  const [number, setNumber] = useState(0);

  const fetchWords = async () => {
    setLoading(true);
    const response = await fetch(url);

    const wordList = await response.json();

    const arr = paginate(wordList);

    setWords(arr[number]);

    setLoading(false);
  };

  const changeNumber = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  useEffect(() => {
    fetchWords();
  }, [number]);

  return { words, loading, number, setNumber, changeNumber, setLoading };
};

export default useFetch;
