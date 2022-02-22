import React from "react";

const Refresh = ({ refresh }) => {
  return (
    <div>
      <>
        <h2 className="loadingh2">No tours left</h2>
        <button className="tourRefreshBtn" onClick={refresh}>
          Refresh
        </button>
      </>
    </div>
  );
};

export default Refresh;
