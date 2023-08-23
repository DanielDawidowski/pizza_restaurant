import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import Image from "../../components/image/Image";
import HeroImg from "../../assets/Images/home-hero.png";
import { HomeStyles } from "./HomeStyles";
import Button from "../../components/button/Button";
import { ButtonColor } from "../../components/button/Button.interface";

const Home: FC = (): ReactElement => {
  return (
    <Layout>
      <HomeStyles>
        <div className="hero__image">
          <Image src={HeroImg} alt={HeroImg} />
        </div>
        <div className="hero__title">
          <h1>
            Your place <br /> for pizza
          </h1>
        </div>
        <div className="hero__buttons">
          <Link to="/menu">
            <Button color={ButtonColor.primary}>Menu</Button>
          </Link>
          <Link to="/create-pizza">
            <Button color={ButtonColor.secondary} onClick={() => console.log("clicked")} disabled={false}>
              Pizza Creator
            </Button>
          </Link>
        </div>
      </HomeStyles>
    </Layout>
  );
};

export default Home;
