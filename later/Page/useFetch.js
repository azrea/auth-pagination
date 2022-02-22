import { useEffect, useState } from "react";
import paginate from "./utils";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([]);

  const fetchFollowers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPeople(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    fetchFollowers();
  }, []);
  return { loading, people };
};
