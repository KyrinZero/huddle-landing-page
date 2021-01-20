import React from "react";
import "./styles.scss";
import { useMediaQuery } from "react-responsive";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";

// Assets
import logo from "./assets/images/logo.svg";
import illustration from "./assets/images/illustration-mockups.svg";
import bgDeskstop from "./assets/images/bg-desktop.svg";
import bgMobile from "./assets/images/bg-mobile.svg";

const socialsStyle = { margin: "0 0.5rem" };

export default function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });

  return (
    <div
      className="container"
      style={{ backgroundImage: `url('${isMobile ? bgMobile : bgDeskstop}')` }}
    >
      <header>
        <img src={logo} alt="logo" />
      </header>
      <section>
        <div className="illustration">
          <img src={illustration} alt="logo" />
        </div>
        <div className="text-content">
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button>Register</button>
        </div>
      </section>
      <div className="socials">
        <a href="https://www.facebook.com">
          <LogoFacebook color="white" />
        </a>
        <a href="https://twitter.com/">
          <LogoTwitter color="white" />
        </a>
        <a href="https://www.instagram.com/">
          <LogoInstagram color="white" />
        </a>
      </div>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/KyrinZero/huddle-landing-page">
            Bayajit Mohammed
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
