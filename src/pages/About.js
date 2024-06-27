import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Pizza Paradize, where every slice tells a story of passion and quality. Our journey began with a love for creating unforgettable pizza experiences, using only the freshest ingredients and time-honored recipes. We pride ourselves on our diverse menu that caters to both traditionalists and those seeking new and exciting flavors. At Pizza Paradize, we believe in the power of good food to bring people together, whether it’s a family gathering or a casual hangout with friends. Our cozy, inviting atmosphere is designed to make you feel right at home. Our friendly staff is dedicated to providing exceptional service, ensuring that every visit is a delightful one. We continually innovate and experiment to offer new tastes while keeping the classics you love. From our signature pizzas to our delicious sides and desserts, every item is crafted with care. Come to Pizza Paradize, where every meal is a celebration of flavor and happiness.
        </p>
      </div>
    </div>
  );
}

export default About;
