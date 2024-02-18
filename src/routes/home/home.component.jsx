import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import MainHomeSection from "./components/main-home-section.components";

const Home = () => {
  return (
    <>
      <Outlet />
      <MainHomeSection />
      <Directory />
    </>
  );
};
export default Home;
