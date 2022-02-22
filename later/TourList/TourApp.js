import Refresh from "./Refresh";
import "./Tours.css";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

const TourApp = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };

  const refresh = () => {
    fetchTours();
  };

  if (tours.length === 0) {
    return (
      <section className="tourMainContainer">
        <Refresh refresh={refresh} />
      </section>
    );
  }
  return (
    <section className="tourMainContainer">
      {loading ? <Loading /> : <Tours deleteTour={deleteTour} tours={tours} />}
    </section>
  );
};

export default TourApp;
