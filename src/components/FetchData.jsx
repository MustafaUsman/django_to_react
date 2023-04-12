import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function useFetchData(category) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        // `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=d4c522fccd9f41539a7fee8f34293e29`
      );

      setData(result.data.articles);
    };

    fetchData();
  }, [category]);

  return data;
}

export const FetchData = ({ category = "general" }) => {
  const data = useFetchData(category);
  const navigate = useNavigate();

  const handleClick = (url) => {
    if (2 == 2) {
      navigate("/some-path");
    } else {
      window.open(url);
    }
  };

  return (
    <div className="container my-4">
      <h4 style={{ textAlign: "center" }}>
        <u>
          <i>TOP {category.toUpperCase()} HEADLINES:</i>
        </u>
      </h4>
      <div className="container my-3">
        {" "}
        {data ? (
          <div className="row">
            {data.map((item, index) => (
              <div className="col-md-4 mb-3" key={item.url}>
                <div className="container my--3 shadow-lg rounded">
                  <h5 className="my-2">{item.title}</h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={item.urlToImage}
                      alt="Image Not Found"
                      className="img-fluid"
                      style={{
                        width: "auto",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p className="my-1">{item.description}</p>
                  <a
                    href={item.url}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.url);
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};
