import React from "react";
// import axios from "axios";
import "./App.css";
import BookFinder from "./components/BookFinder";
// let doctors = [];

// fetch before component runs (top-level await)
// await axios
//   .get(
//     "https://5c7n71qaqk.execute-api.ap-south-1.amazonaws.com/test/dateBasedAPI?date=2025-06-09"
//   )
//   .then((response) => {
//     console.log(response.data);
//     doctors = response.data.data.doctors;
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

function App() {
  return <BookFinder />;
}

export default App;
