// import React, { useState } from "react";

// export default function BookFinder() {
//   const [query, setQuery] = useState("");
//   const [minYear, setMinYear] = useState(0);
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   async function searchBooks() {
//     if (!query.trim()) return;
//     setLoading(true);
//     setError("");
//     try {
//       const res = await fetch(
//         `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
//       );
//       const data = await res.json();
//       setBooks(data.docs || []);
//       if (data.docs.length === 0) setError("No books found.");
//     } catch {
//       setError("Something went wrong. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-6 flex flex-col items-center">
//       <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl text-center">
//         <h1 className="text-3xl font-extrabold mb-4 text-blue-700">📚 Book Finder</h1>

//         <div className="flex flex-col gap-4 justify-center items-center">
//           <input
//             type="text"
//             placeholder="Search book title..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="border-2 border-blue-300 p-3 rounded-lg w-full"
//           />

//           <div className="flex gap-3 items-center">
//             <label className="text-sm font-medium">
//               Minimum Year:
//               <input
//                 type="number"
//                 className="border p-2 rounded-lg ml-2 w-24"
//                 value={minYear}
//                 onChange={(e) => setMinYear(Number(e.target.value))}
//               />
//             </label>

//             <button
//               onClick={searchBooks}
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
//             >
//               Search
//             </button>
//           </div>
//         </div>

//         {loading && <p className="text-gray-600 mt-4">⏳ Searching books...</p>}
//         {error && <p className="text-red-600 mt-4">{error}</p>}
//       </div>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-4xl">
//         {books
//           .filter((b) => (b.first_publish_year || 0) >= minYear)
//           .map((book) => (
//             <a
//               key={book.key}
//               href={`https://openlibrary.org${book.key}`}
//               target="_blank"
//               rel="noreferrer"
//               className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition transform hover:-translate-y-1"
//             >
//               <img
//                 src={
//                   book.cover_i
//                     ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
//                     : "https://dummyimage.com/200x300/ddd/555&text=No+Cover"
//                 }
//                 alt={book.title}
//                 className="rounded-lg w-full h-48 object-cover mb-3"
//               />
//               <h3 className="font-bold text-base text-blue-700">
//                 {book.title}
//               </h3>
//               <p className="text-sm text-gray-700">
//                 {book.author_name?.join(", ") || "Unknown Author"}
//               </p>
//               <p className="text-xs text-gray-500 mt-auto">
//                 {book.first_publish_year || "N/A"}
//               </p>
//             </a>
//           ))}
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function BookFinder() {
  const [query, setQuery] = useState("");
  const [minYear, setMinYear] = useState(0);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchBooks() {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setBooks(data.docs || []);
      if (data.docs.length === 0) setError("No books found.");
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bf-root min-h-screen  align-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 p-6 flex flex-col items-center">
      
      {/* Search Container */}
  <div className="bf-card bg-white  shadow-lg rounded-2xl p-8 w-full max-w-xl text-center mt-10">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700">📚 Book Finder</h1>

        {/* Input centered text */}
        <input
          type="text"
          placeholder="Enter a book title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bf-input border-2 border-indigo-300 p-3 rounded-lg w-full text-center focus:outline-none focus:border-indigo-600"
        />

        {/* Controls */}
  <div className="bf-controls flex justify-center items-center gap-3 my-4">
          <label className="text-sm font-semibold text-gray-700">
            Min Year:
          </label>

          <input
            type="number"
            className="bf-input-number border p-2 rounded-lg w-24 text-center"
            value={minYear}
            onChange={(e) => setMinYear(Number(e.target.value))}
          />

          <button
            onClick={searchBooks}
            className="bf-button bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-gray-500 mt-2">Searching...</p>}
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </div>

      {/* Results */}
      <div className="bf-grid grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 w-full max-w-5xl pb-20">
        {books
          .filter((b) => (b.first_publish_year || 0) >= minYear)
          .map((book) => (
            <a
              key={book.key}
              href={`https://openlibrary.org${book.key}`}
              target="_blank"
              rel="noreferrer"
              className="bf-item bg-white rounded-xl shadow-md p-4 text-center hover:shadow-2xl transform hover:-translate-y-2 transition"
            >
              <img
                src={
                  book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : "https://dummyimage.com/200x300/dddddd/555555&text=No+Cover"
                }
                alt={book.title}
                className="rounded-lg w-full h-48 object-cover mb-3"
              />
              <h3 className="font-bold text-base text-indigo-700">
                {book.title}
              </h3>
              <p className="text-sm text-gray-600">
                {book.author_name?.join(", ") || "Unknown Author"}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {book.first_publish_year || "N/A"}
              </p>
            </a>
          ))}
          
      </div>
    </div>
  );
}
