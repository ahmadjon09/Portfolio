import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Connect,
  Hero,
  Navbar,
  Copyrights,
  StarsCanvas,
  Education,
  Skills,
  Projects,
} from './components';


const App = () => {
  return (
    <BrowserRouter>

      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Connect />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Copyrights />
      </div>

    </BrowserRouter>
  );
};


export default App;




// import React, { useEffect, useState } from 'react';
// import { BrowserRouter } from 'react-router-dom';

// import {
//   About,
//   Contact,
//   Connect,
//   Hero,
//   Navbar,
//   Copyrights,
//   StarsCanvas,
//   Education,
//   Skills,
//   Projects,
// } from './components';

// const App = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkIfMobile = () => {
//       const isMobile = window.innerWidth <= 1000; // Set your desired mobile width threshold 
//       setIsMobile(isMobile);
//     };

//     checkIfMobile();
//     window.addEventListener('resize', checkIfMobile);

//     return () => {
//       window.removeEventListener('resize', checkIfMobile);
//     };
//   }, []);

//   return (
//     <BrowserRouter>
//       {isMobile ? (
//         <div class="flex justify-center items-center h-screen bg-white ">
//           <div class="text-center text-black font-bold">
//             <h1>The Graphics of the site is not supported by mobile phones.</h1>
//             <h1>Use a desktop or a laptop to access it.</h1>
//           </div>
//         </div>
//       ) : (
//         <div className='relative z-0 bg-primary'>
//           <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
//             <Navbar />
//             <Hero />
//           </div>
//           <About />
//           <Education />
//           <Skills />
//           <Projects />
//           <Connect />
//           <div className='relative z-0'>
//             <Contact />
//             <StarsCanvas />
//           </div>
//           <Copyrights />
//         </div>
//       )}
//     </BrowserRouter>
//   );
// };

// export default App;