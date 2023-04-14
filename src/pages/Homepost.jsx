import React from "react"; // Importing the React library which is required to create and manage components
import { Card } from "../components/Card"; // Importing a custom Card component from a relative file path
import { Navbar } from "../components/Navbar"; // Importing a custom Navbar component from a relative file path
import { FetchData } from "../components/FetchData"; // Importing a custom FetchData component from a relative file path

export const Homepost = ({ category }) => { // Creating a functional component named Homepost which receives a prop named category
    return (
      <div>
        <FetchData category={category} /> {/* Rendering the custom FetchData component and passing the category prop to it*/}
      </div>
    );
};
