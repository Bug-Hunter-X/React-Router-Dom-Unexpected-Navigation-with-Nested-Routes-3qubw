import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';

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

function Home() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link> 
    </div>
  );
}

function About(){
  return(
    <div>
      <h1>About Page</h1>
    </div>
  );
}
//This example uses absolute paths in the Link component to guarantee correct navigation regardless of the current route. Alternatively, you could use the useNavigate hook for programmatic navigation.