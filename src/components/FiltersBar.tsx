import React from "react";
import filters from "../assets/styles/filters.scss";
import { Button } from "primereact/button";

export const Filters = () => {
  return (
    <>
      <div className="container">
        <div className="filter_button">
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
