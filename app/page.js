import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/Nav/page";
import Landing from "./components/Landing/page";
import Features from "./components/Features/page";
import Statistics from "./components/Statistics/page";
import Reviews from "./components/Reviews/page";
import Numbers from "./components/Numbers/page";

export default function Home() {
  return (
    <body>
      <div id="__next">
        <div className="wrapper wrapper__full">
          <Nav />
          <Landing />
          <Features />
          <Statistics />
          <Reviews />
          <Numbers />
        </div>
      </div>
    </body>
  );
}
