import React from "react";
import { Route, Routes } from "react-router-dom";
import WithNavbar from "../components/WithNavbar";
import WithoutNavbar from "../components/WithoutNavbar";
import ContactInfo from "../pages/contactInfo/ContactInfo";
import FirstMenu from "../pages/firstMenu/FirstMenu";
import HomePage from "../pages/homePage/HomePage";
import SecondMenu from "../pages/secondMenu/SecondMenu";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<WithoutNavbar />}>
          <Route path="/" element={<HomePage />} />{" "}
          {/*showing HomePage without navbar*/}
        </Route>
        <Route element={<WithNavbar />}>
          {" "}
          {/*showing remaining pages with navbar*/}
          <Route path="/firstmenu" element={<FirstMenu />} />
          <Route path="/secondmenu" element={<SecondMenu />} />
          <Route path="/contactinfo/:id" element={<ContactInfo />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
