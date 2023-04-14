import React from "react";
import { FetchData } from "../components/FetchData";

export const Home = ({ category }) => {
  return <FetchData category={category} />;
};
