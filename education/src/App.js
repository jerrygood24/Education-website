import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./component/layout/Footer";
import Drawer from "./component/layout/Drawer";
import Calendar from "./component/layout/Calendar";
// const Layout = ({ children }) => {
//   return (
//     <>
//       {/* <Header /> */}
//       <Drawer />
//       <div>{children}</div>
//       <Footer />
//     </>
//   );
// };
function App() {
  return (
    <BrowserRouter>
      <Drawer />
      <Routes>
        <Route exact path="/calendar" element={<Calendar />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;