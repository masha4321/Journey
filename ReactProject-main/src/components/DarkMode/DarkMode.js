import React from "react";
import "../DarkMode/DarkMode.css";

const DarkMode = () => {
  let clickedClass = "clicked";

  const body = document.body;

  const nav = document.querySelector(".Navbar");

  const footer = document.querySelector(".footer");

  //body
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  //header
  const lightNav = "Navbar";
  const darkNav = "Dark-Navbar";
  let navTheme;

  //footer
  const lightFooter = "footer";
  const darkFooter = "dark-footer";
  let footerTheme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
    navTheme = localStorage.getItem("navTheme");
    footerTheme = localStorage.getItem("footerTheme");
  }

  //body
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
    nav.classList.add(navTheme);
    footer.classList.add(footerTheme);
  } else {
    body.classList.add(lightTheme);
    nav.classList.add(lightNav);
    footer.classList.add(lightFooter);
  }

  //header
  if (navTheme === lightNav || navTheme === darkNav) {
    nav.classList.add(navTheme);
  } else {
    nav.classList.add(lightNav);
  }

  //footer
  if (footerTheme === lightFooter || footerTheme === darkFooter) {
    footer.classList.add(footerTheme);
  } else {
    footer.classList.add(lightFooter);
  }

  const switchTheme = (e) => {
    //body
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      nav.classList.replace(darkNav, lightNav);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("navTheme", "Navbar");
      navTheme = lightNav;
      footer.classList.replace(darkFooter, lightFooter);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("footerTheme", "footer");
      footerTheme = lightFooter;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      nav.classList.replace(lightNav, darkNav);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("navTheme", "Dark-Navbar");
      navTheme = darkNav;
      footer.classList.replace(lightFooter, darkFooter);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("footerTheme", "dark-footer");
      footerTheme = darkFooter;
    }

    /*header
    if (navTheme === darkNav) {
      nav.classList.replace(darkNav, lightNav);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("navTheme", "Navbar");
      navTheme = lightNav;
    } else {
      nav.classList.replace(lightNav, darkNav);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("navTheme", "Dark-Navbar");
      navTheme = darkNav;
    }

    //footer
    if (footerTheme === darkFooter) {
      footer.classList.replace(darkFooter, lightFooter);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("footerTheme", "footer");
      footerTheme = lightFooter;
    } else {
      footer.classList.replace(lightFooter, darkFooter);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("footerTheme", "dark-footer");
      footerTheme = darkFooter;
    }*/
  };

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    ></button>
  );
};

export default DarkMode;
