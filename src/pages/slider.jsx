import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Img, Text, Heading, Button } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  ArcElement,
  Chart as ChartJS,
  Title,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
  LineElement,
  TooltipItem,
  TooltipModel,
  PointElement,
} from 'chart.js';
import './slider.css'; // Import your CSS file

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % totalItems;
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="carousel-container flex flex-col items-center justify-start w-[88%] sm:w-full gap-2">
      <div className="carousel-track flex flex-row justify-center w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-card flex flex-col w-full ${
              currentIndex === index ? 'active' : ''
            }`}
          >
            <div className="card-header flex flex-row justify-start w-full">
              <Text as="p" className="w-[95%] !text-gray-900_04 !font-sfprotext leading-5">
                {item.header}
              </Text>
            </div>
            <div className="card-body flex-grow h-[100px] w-full relative">
              <Text
                as="p"
                className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto !text-blue_gray-700_01 !font-sfprotext !font-normal leading-5 absolute"
              >
                {item.content}
              </Text>
              {/* Replace with your button image or component */}
              {/* <Img
                src="images/img_button.svg"
                alt="button_one"
                className="h-[60px] w-[60px] right-[21%] top-[7%] m-auto absolute"
              /> */}
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button carousel-button-prev" onClick={handlePrevious}>
        <i className="fas fa-chevron-left"></i> {/* Replace with your left arrow icon */}
      </button>
      <button className="carousel-button carousel-button-next" onClick={handleNext}>
        <i className="fas fa-chevron-right"></i> {/* Replace with your right arrow icon */}
      </button>
    </div>
  );
};

export default Carousel;
