import { useState } from "react";
import HomeScroll from './components/HomeScroll.jsx'

function App() {
  return (
    <>
      <HomeScroll needBtn={true} heading="Trending" />
      <HomeScroll heading="Popular" />
      <HomeScroll heading="Top Rated" />
      <HomeScroll heading="Upcoming" />
      <HomeScroll heading="Now Playing" />
    </>
  );
}

export default App;
