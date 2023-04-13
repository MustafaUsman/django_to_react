// import React, { useState } from "react";
// function News() {
//     let [value, setValue] = useState("");
//     async function getData() {
//       let response = await fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=e695a049d9cb42dd858b02982cd187b0")
//       let result = await response.json();
//       console.log(result);
//       console.log(result.articles);
//       let p = result.articles.map((item) => {
//       return (
//         <div class="max-w-sm rounded overflow-hidden shadow-lg">
//         <img class="w-full" src={item.urlToImage} alt="Mountain"/>
//         <div class="px-6 py-4">
//           <div class="font-bold text-xl mb-2">{item.title}</div>
//           <p class="text-gray-700 text-base">
//             {item.description}
//           </p>
//           <a className='font-bold text-xl' href={item.url}> Read More </a>
//         </div>
//         <div class="px-6 pt-4 pb-2">
//           <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//           <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//           <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//         </div>
//       </div>
//       )})
//       console.log(p);
//       setValue(p);
//     }
  
//     getData();
//     return (
//       <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"> The DailyLife News{value} </div>
//     )
    
//   }
  
//   export default News;


import React, { useState, useEffect } from "react";

function News() {
  let [value, setValue] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    async function getData() {
      let response = await fetch(
        "https://newsapi.org/v2/everything?q=bitcoin&apiKey=e695a049d9cb42dd858b02982cd187b0"
      );
      let result = await response.json();
      console.log(result);
      console.log(result.articles);
      let p = result.articles.map((item, index) => {
        if (index < 10) {
          return (
            <div key={item.url} className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-full" src={item.urlToImage} alt="Mountain" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{item.title}</div>
                <p className="text-gray-700 text-base">{item.description}</p>
                <a className="font-bold text-xl" href={item.url}>
                  Read More
                </a>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          );
        } else {
          return null;
        }
      });
      console.log(p);
      setValue(p);
    }

    getData();
  }, [counter]);

  return (

    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            The DailyLife News  {value}

    </div>

  );
}

export default News;