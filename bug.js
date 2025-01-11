import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

// Home.js
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link> 
    </div>
  );
}

//About.js
export default function About(){
  return(
    <div>
      <h1>About Page</h1>
    </div>
  );
}

//This is an example of a common mistake.  When navigating, relative paths are used, causing unexpected behavior when nested routes are introduced.  In this case, the Link component will try to go to '/about' relative to the current route which is already '/about', resulting in infinite redirect loop.