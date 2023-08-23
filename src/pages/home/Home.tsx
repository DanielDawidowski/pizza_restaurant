import React, { FC, ReactElement } from "react";
import Layout from "../../components/layout/Layout";
import Image from "../../components/image/Image";
import HeroImg from "../../assets/Images/home-hero.png";

const Home: FC = (): ReactElement => {
  return (
    <Layout>
      <Image src={HeroImg} alt={HeroImg} />
    </Layout>
  );
};

export default Home;
