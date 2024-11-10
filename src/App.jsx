



import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import Section from "./Section";
import "./App.css";


import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";


const images = [
  { src: img1, author: "", title: "DESIGN SLIDER", topic: "BIRD", description: "Lorem ipsum dolor sit amet consectetur..." },
  { src: img2, author: "", title: "DESIGN SLIDER", topic: "BIRD", description: "Lorem ipsum dolor sit amet consectetur..." },
  { src: img3, author: "", title: "DESIGN SLIDER", topic: "BIRD", description: "Lorem ipsum dolor sit amet consectetur..." },
  { src: img4, author: "", title: "DESIGN SLIDER", topic: "BIRD", description: "Lorem ipsum dolor sit amet consectetur..." }
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("");
  const timeoutRef = useRef(null);
  const timeAutoNext = 7000;

  const nextSlide = () => {
    setTransitionDirection("zoom-in");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setTransitionDirection("zoom-out");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

 
  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, timeAutoNext);

    return resetTimeout;
  }, [currentIndex]);


  const handleNextClick = () => {
    clearTimeout(timeoutRef.current);
    nextSlide();
  };

  const handlePrevClick = () => {
    clearTimeout(timeoutRef.current);
    prevSlide();
  };

  return (
   <>
        <div className="carousel">
          <div className="list">
            {images.map((image, index) => (
              <div
                className={`item ${index === currentIndex ? "active" : ""} ${transitionDirection}`}
                key={index}
              >
                <img src={image.src} alt={`Slide ${index + 1}`} />
                <div className="content">
                  <div className="author">{image.author}</div>
                  <div className="title">{image.title}</div>
                  <div className="topic">{image.topic}</div>
                  <div className="des">{image.description}</div>
                  <div className="buttons">
                    <button>SEE MORE</button>
                    <button>SUBSCRIBE</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
    
          <div className="thumbnail">
            {images.map((image, index) => (
              <div
                className={`item ${index === currentIndex ? "active" : ""}`}
                key={index}
                onClick={() => setCurrentIndex(index)}
              >
                <img src={image.src} alt={`Thumbnail ${index + 1}`} />
                <div className="content">
                  <div className="title">Name Slider</div>
                  <div className="description">Description</div>
                </div>
              </div>
            ))}
          </div>
    
          <div className="arrows">
            <button onClick={handlePrevClick} id="prev">{"<"}</button>
            <button onClick={handleNextClick} id="next">{">"}</button>
          </div>
          
          
        </div> 
        
      <Header />
      <Section />
    
   </>
  );
}

export default Carousel;



