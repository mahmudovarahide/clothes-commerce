import { MainHomeContainer,MainContentsContainer,MainImgContainer } from "../home.styles";
import MainFoto from "../../../assets/images/hero-right-2.png";

const MainHomeSection = () => {
  return (
    <MainHomeContainer>
      <MainContentsContainer>
        <p>In this season, find the best 🔥</p>
        <h5>Exclusive collection for everyone</h5>
        <button>Explore now</button>
      </MainContentsContainer>
      <MainImgContainer>
        <img src={MainFoto} alt="" />
      </MainImgContainer>
    </MainHomeContainer>
  );
};

export default MainHomeSection;
