import React from "react"
// // import MyMap from "./mymap"
// import Home from './RouterPrograms/Home'
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import About from './RouterPrograms/About'
// import Users from './RouterPrograms/Users'
// import Contact from './RouterPrograms/Contact'
// import Navbar from './RouterPrograms/Navbar'
import WeatherApp from './weatherApp1'


function App() {
  return (
    <>
    <WeatherApp></WeatherApp>
     {/* <h2 style={{textAlign: "center",marginTop: 10}}>
      My Location with Search
     </h2>
     <MyMap /> */}
     {/* <BrowserRouter>
             <Navbar />
             <div className="main-content">
               <Routes>
                 <Route path='/' element={<Home />} />
                 <Route path='/about' element={<About />} />
                 <Route path='/users' element={<Users />} />
                 <Route path='/Contact' element={<Contact />} />
               </Routes>
             </div>
           </BrowserRouter> */}
    </>
  )
}
export default App;


