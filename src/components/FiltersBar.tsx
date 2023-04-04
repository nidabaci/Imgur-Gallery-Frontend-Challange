import React from "react";
import "../styles/filters.scss"
import { Button } from "primereact/button";

export const FiltersBar = () => {
  return (
    <>
      <div className="mb-10 mt-10 flex justify-center items-center filter_bar">
        <div className="container filter_button">
          <div>
            <Button>TOP</Button>
            <Button>HOT</Button>
            <Button>USERS</Button>
          </div>
          <div className="trending_button">
            <Button>TRENDING</Button>
          </div>
        </div>
      </div>
    </>
  );
};
