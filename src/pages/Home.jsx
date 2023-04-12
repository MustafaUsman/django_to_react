import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { FetchData } from "../components/FetchData";

export const Home = () => {
    return (
        <div>
            <Card/>
            <FetchData/>
        </div>
)};