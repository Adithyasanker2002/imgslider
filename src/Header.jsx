import React, { useEffect } from "react";
import person from "./assets/person.png";
import mountain1 from "./assets/mountain1.png";
import mountain2 from "./assets/mountain2.png";
import mountain3 from "./assets/mountain3.png";
import sky from "./assets/sky.png";

const Header = () => {
  useEffect(() => {
    const translateElements = document.querySelectorAll(".translate");
    const bigTitle = document.querySelector(".big-title");
    const shadow = document.querySelector(".shadow");

    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      translateElements.forEach((element) => {
        const speed = element.getAttribute("data-speed");
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });

      bigTitle.style.opacity = -scrollY / (window.innerHeight / 2) + 1;
      shadow.style.height = `${scrollY * 0.5 + 300}px`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="zumba">
      <nav>
        <div className="container">
        
          <div className="hamburger-menu">
         
          </div>
        </div>
      </nav>

      <h1 className="big-title translate" data-speed="0.1">Discover</h1>

      <img width={'100%'}  src={person} className="person translate" data-speed="-0.25" alt="person" />
      <img width={'100%'}  src={mountain1} className="mountain1 translate" data-speed="-0.2" alt="mountain1" />
      <img width={'100%'}  src={mountain2} className="mountain2 translate" data-speed="0.4" alt="mountain2" />
      <img width={'100%'}  src={mountain3} className="mountain3 translate" data-speed="0.3" alt="mountain3" />
      <img width={'100%'}  src={sky} className="sky translate" data-speed="0.5" alt="sky" />
    </header>
  );
};

export default Header;
