import React from 'react';
import Header from '../Header/Header'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer'
import NavTab from '../NavTab/NavTab';

function Main({ isLoggedIn, openSidebarFunc, isSidebarOpen, closeSidebar }, props) {
  return (
    <>
      <NavTab
        openSidebarBtnClicked={isSidebarOpen}
        closeSidePopup={closeSidebar}
      />
      <Header
        isLoggedIn={isLoggedIn}
        buttonClicked={openSidebarFunc}
      />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </>

  );
}
export default Main