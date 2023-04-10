import type { NextPage } from "next";
import { useStore } from "../src/store";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import MainContent from "../src/components/MainContent/MainContent";

const Home: NextPage = () => {
  const view = useStore((state) => state.view);

  return (
    <div className="app-container">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
};

export default Home;
