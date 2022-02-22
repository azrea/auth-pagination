import { useEffect, useState } from "react";
import useFetch from "./FetchWords";

const useFetchDefinition = async (word) => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const response = await fetch(url);
  const data = await response.json();
  const definition = data[0].meanings[0].definitions[0].definition;

  return definition;
};

export default useFetchDefinition;
