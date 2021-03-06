import React, { useState } from "react";
import { IResumeDataMain } from "../interfaces/IMainData";

interface IProps {
  data?: IResumeDataMain;
}

const Header = ({ data }: IProps) => {
  const [name] = useState(data?.name);
  const [occupation] = useState(data?.occupation);
  const [description] = useState(data?.description);
  const [city] = useState(data?.address.city);
  const [cityState] = useState(data?.address.state);
  const [social] = useState(data?.social);

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm {name}.</h1>
          <h3>
            I'm a {city}, {cityState} based <span>{occupation}</span>.{" "}
            {description}.
          </h3>
          <hr />
          <ul className="social">
            {social &&
              social.map((network) => (
                <li key={network.name}>
                  <a href={network.url}>
                    <i className={network.className}></i>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
