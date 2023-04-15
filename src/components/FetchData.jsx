// Import necessary dependencies
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

// Custom hook to fetch data from the News API and return the data and a 
//function to handle click events on the news articles 

function useFetchData(category) {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  // Fetch data when category changes and set the data to state 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=d4c522fccd9f41539a7fee8f34293e29`
      );
      setData(result.data.articles);
    };

    fetchData();
  }, [category]);

  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return { data, handleClick };

}


// FetchData component to fetch data from the News API and display the data 
export const FetchData = ({ category = "general" }) => {
  const { data, handleClick } = useFetchData(category);
  const navigate = useNavigate();

  // Navigate back to the previous page when the back button is clicked 
  const handleBackClick = () => {
    navigate(-1);
  };


  // Render component 
  return (

    <div className="container my-4">
      {/*Display category name*/}
      <h4 style={{ textAlign: "center" }}>
        <u>
          <i>TOP {category.toUpperCase()} HEADLINES:</i>
        </u>
      </h4>
      {/*Display data if data is available, else display loading message*/}
      <div className="container my-3">
        {" "}
        {data ? (
          <div className="row">
            {data.map((item, index) => (
              <div className="col-md-4 mb-3" key={item.url}>
                <div className="container my--3 shadow-lg rounded">
                  <h5 className="my-2">{item.title}</h5>
                  {/*Image*/}
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={item.urlToImage}
                      alt="News Image"
                      className="img-fluid"
                      style={{
                        width: "auto",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />

                  </div>
                  {/*Read More button with target link to provided API news url*/}
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
      {/*Go back button*/}
      <div className="text-center">
        <button
          onClick={handleBackClick}
          style={{
            backgroundColor: "#2E4057",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default FetchData;