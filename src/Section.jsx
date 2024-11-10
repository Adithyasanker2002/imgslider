import React, { useEffect } from "react";
import image from "./assets/image.jpg";

const Section = () => {
  useEffect(() => {
    const content = document.querySelector(".content");
    const imageContainer = document.querySelector(".imgContainer");
    const opacityElements = document.querySelectorAll(".opacity");
    const border = document.querySelector(".border");
    const section = document.querySelector("section");

    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;

      opacityElements.forEach((element) => {
        element.style.opacity = scrollY / (sectionTop + sectionHeight);
      });

      content.style.transform = `translateY(${scrollY / (sectionHeight + sectionTop) * 50 - 50}px)`;
      imageContainer.style.transform = `translateY(${scrollY / (sectionHeight + sectionTop) * -50 + 50}px)`;
      border.style.width = `${(scrollY / (sectionTop + sectionHeight)) * 30}%`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="ram">
      <div className="shadow"></div>
      <div className="container">
        <div className="content opacity">
          <h3 className="title">
            About
            <div className="border"></div>
          </h3>
          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque officiis quos expedita ipsa...
          </p>
        </div>

        <div className="imgContainer opacity">
          <img src={image} alt="section image" />
        </div>
      </div>
    </section>
  );
};

export default Section;
