import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import { MainContainer, ProfileContainer } from "./StyledPage";
import { useFetch } from "./useFetch";

const Page = () => {
  const { loading, people } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    console.log(people.length);
    if (!loading) return setFollowers(people[page]);
  }, [loading, page]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > people.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = people.length - 1;
      }
      return prevPage;
    });
  };

  const handleValue = (index) => {
    setPage(index);
  };
  return (
    <MainContainer>
      <h1>{loading ? "Loading..." : "Pagination"}</h1>

      <ProfileContainer>
        {followers.map((follower) => {
          return <Profile key={follower.id} {...follower} />;
        })}
      </ProfileContainer>
      <div className="pgBtnContainer">
        <span>
          <button onClick={prevPage}>Prev</button>
        </span>
        {people.map((_, index) => {
          return (
            <button key={index} onClick={() => handleValue(index)}>
              {index + 1}
            </button>
          );
        })}
        <span>
          <button onClick={nextPage}>Next</button>
        </span>
      </div>
    </MainContainer>
  );
};

export default Page;
