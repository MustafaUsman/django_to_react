import React from "react";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { FetchData } from "../components/FetchData";

export const Homepost = ({ category }) => {
    return (
      <div>
        <FetchData category={category} />
      </div>
    );
  };
  
