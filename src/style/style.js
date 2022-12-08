import styled from "styled-components";
import { appTheme } from "../components/theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${(props) => (props.align ? "center" : "space-between")};
  margin: auto;
  align-items: center;
  position: relative;
  margin-top: ${(appTheme) => (appTheme.marg ? "0" : "20px")};
  margin-bottom: 20px;
  width: ${(props) =>
    props.wid ? appTheme.width.fulWidth : appTheme.width.contentWidth};
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.Display ? "flex" : "block")};
  }
  @media screen and (min-width: 1300px) and (max-width: 2000px) {
    margin-top: ${(appTheme) => (appTheme.marg ? "0" : "largeXlMargin")};
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  width: ${appTheme.width.contentWidth};
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.Display ? "flex" : "block")};
  }
  @media screen and (min-width: 1300px) and (max-width: 2000px) {
    margin-top: ${(appTheme) => (appTheme.marg ? "0" : "largeXlMargin")};
  }
`;

export const MainButton = styled.div`
  button {
    border: none;
    background-color: ${appTheme.color.lightColor};
    color: ${appTheme.color.textColor};
    padding: 5px 15px;
    font-size: ${appTheme.font.xlSize};
  }
  button:hover {
    background-color: ${appTheme.color.appBackgroundcolor};
    color: ${appTheme.color.lightColor};
  }

  @media screen and (min-width: 1501px) and (max-width: 2000px) {
    button {
      font-size: ${appTheme.font.largeXlSize} !important;
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1500px) {
    button {
      font-size: ${appTheme.font.smallXlSize} !important;
    }
  }
`;
export const Button = styled.button`
  background-color: ${appTheme.color.appBackgroundcolor};
  color: ${appTheme.color.lightColor};
  border-radius: 5px;
  border: none;
  width: 28%;
  font-size: ${appTheme.font.xlSize};
  margin-top: ${appTheme.outerSpace.xlMargin};
  padding: 10px 13px !important;
  @media screen and (min-width: 1501px) and (max-width: 2000px) {
    font-size: ${appTheme.font.largeXlSize} !important;
  }
  @media screen and (min-width: 992px) and (max-width: 1500px) {
    font-size: ${appTheme.font.XlSize} !important;
  }
  @media screen and (min-width: 769px) and (max-width: 991px) {
    width: 35%;
  }
  @media screen and (max-width: 768px) {
    width: ${appTheme.width.fulWidth};
    font-size: ${appTheme.font.xlSize};
  }
`;
export const JournalButton = styled.button`
  background-color: ${appTheme.color.appBackgroundcolor};
  color: ${appTheme.color.lightColor};
  border-radius: 5px;
  border: none;
  font-size: ${appTheme.font.xlSize};
  padding: 3px 25px !important;

  @media screen and (max-width: 768px) {
    font-size: ${appTheme.font.xlSize};
  }

  @media screen and (min-width: 1501px) and (max-width: 2000px) {
    font-size: ${appTheme.font.largeXlSize} !important;
  }
  @media screen and (min-width: 992px) and (max-width: 1500px) {
    font-size: ${appTheme.font.smallXlSize} !important;
  }
`;
export const SubButton = styled.button`
  border: 1px solid ${appTheme.color.borderColor};
  border-radius: 5px !important;
  background-color: ${appTheme.color.lightColor};
  color: ${appTheme.color.textColor} !important;
  padding: 5px 20px;
  width: 100 !important;
  font-size: ${appTheme.font.xlSize};
  &:hover {
    background-color: ${appTheme.color.appBackgroundcolor};
    color: ${appTheme.color.lightColor} !important;
  }
`;
export const SearchButton = styled.button`
  background-color: ${appTheme.color.appBackgroundcolor} !important;
  color: ${appTheme.color.lightColor};
  top: 4px;
  right: 4px;
  width: 30%;
  border: 0;
  border-radius: 5px;
  padding: 5px 1px !important;
  position: absolute;
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 20%;
  }
  @media screen and (min-width: 568px) and (max-width: 768px) {
    width: 26%;
  }
  @media screen and (max-width: 568px) {
    width: 36%;
  }
  @media screen and (min-width: 1501px) and (max-width: 2000px) {
    font-size: ${appTheme.font.largeXlSize} !important;
  }
  @media screen and (min-width: 992px) and (max-width: 1500px) {
    font-size: ${appTheme.font.smallXlSize} !important;
  }
`;

export const FadeBlock = styled.div`
  position: absolute;
  background-color: ${appTheme.color.fadeColor};
  bottom: -8px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px 15px;
  width: 71%;
  color: ${appTheme.color.headingColor} !imporatnt;
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 90%;
    bottom: 25px;
  }
  @media screen and (min-width: 993px) and (max-width: 1299px) {
    width: 90%;
    padding: 20px 15px;
  }
  @media screen and (min-width: 1300px) and (max-width: 2000px) {
    width: 90%;
    padding: 20px 15px;
  }
  @media screen and (max-width: 768px) {
    width: ${appTheme.width.contentWidth};
    font-size: ${appTheme.font.smallXlSize};
    padding: 30px 15px !important;
    position: unset;
    width: ${appTheme.width.fulWidth};
    border-radius: 0;
    text-align: center;
  }
`;
export const TextCard = styled.div`
  border: 1px solid ${appTheme.color.borderColor};
  color: ${appTheme.color.headingColor} !important;
  width: 32%;
  align-self: normal;
  margin-top: ${appTheme.outerSpace.xlMargin};
  padding: 20px 30px;
  border-radius: 2px;

  @media screen and (max-width: 400px) {
    padding: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    padding: 20px;
  }
  @media screen and (max-width: 768px) {
    width: ${appTheme.width.fulWidth};
  }
`;

export const TopBar = styled.div`
  background-color: ${appTheme.color.appBackgroundcolor};
  .nav-link {
    padding: 10px 5px !important;
    color: ${appTheme.color.lightColor};
    font-size: ${appTheme.font.lgSize};
    margin: 0 8px;
  }
  .nav-link:hover {
    background-color: ${appTheme.color.lightColor};
    color: ${appTheme.color.textColor} !important;
  }
  @media screen and (max-width: 992px) {
    padding: 0%;
  }
  @media screen and (min-width: 1300px) and (max-width: 2000px) {
    .nav-link {
      font-size: ${appTheme.font.smallXlSize};
    }
  }
`;

export const Box = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0);
`;

export const Container = styled.div`
  width: ${appTheme.width.fulWidth};
`;

export const SubSlider = styled.div`
  height: 350px;
  width: 100%;
  img {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
  }
  @media screen and (min-width: 1300px) and (max-width: 2000px) {
    height: 460px !important;
  }
  @media screen and (max-width: 992px) {
    height: 300px !important;
  }
`;

export const SubSection = styled.div`
  width: ${appTheme.width.contentWidth};
  margin: auto;
  font-size: ${appTheme.font.xlSize};
  padding: ${(props) => (props.padding ? "20px 0" : "0")};
  @media screen and (max-width: 992px) {
    width: ${(props) =>
      props.wid ? appTheme.width.fulWidth : appTheme.width.contentWidth};
  }
`;

export const Profile = styled.div`
  img {
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid ${appTheme.color.borderColor} !important;
  }
  justify-content: unset;
  @media screen and (max-width: 768px) {
    img {
      height: 45px !important;
      width: 45px !important;
    }
    justify-content: start !important;
  }
`;
export const division = styled.div`
  img {
    height: 260px;
  }
`;

export const SubWrapper = styled.div`
  text-align: center;
  width: ${(props) => (props.wid ? "20%" : "80%")};
  @media screen and (max-width: 768px) {
    width: ${(fulWidth) => (fulWidth.wid ? "unset" : "100%")};
  }
`;
export const HeaderWrapper = styled.div`
  text-align: center;
  width: ${(props) => (props.wid ? "10%" : "90%")};

  @media screen and (max-width: 768px) {
    width: ${(fulWidth) => (fulWidth.wid ? "unset" : "100%")};
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: ${(fulWidth) => (fulWidth.wid ? "20%" : "80%")};
  }
  @media screen and (min-width: 1800px) and (max-width: 2000px) {
    width: ${(props) => (props.wid ? "10%" : "50%")};
  }
  @media screen and (min-width: 1500px) and (max-width: 1799px) {
    width: ${(props) => (props.wid ? "10%" : "60%")};
  }
  @media screen and (min-width: 1200px) and (max-width: 1499px) {
    width: ${(props) => (props.wid ? "10%" : "80%")};
  }
`;

export const Logo = styled.div`
  height: 120px;
  img {
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 768px) {
    img {
      object-fit: scale-down;
      width: ${appTheme.width.fulWidth};
    }
  }
   @media screen and (min-width: 1300px) and (max-width: 2000px) {
    img {
      object-fit: fill;
      width:100%;
    }
`;
export const Size = styled.div`
  margin-top: ${appTheme.outerSpace.xlMargin} !imporatnt;
  width: ${appTheme.width.fulWidth} !imporatnt;
  height: 460px;
  img {
    height: 100%;
    width: ${appTheme.width.fulWidth} !important;
    position: relative;
  }
  @media screen and (min-width: 1300px) and (max-width: 2000px) {
    height: 500px;
  }

  @media screen and (max-width: 768px) {
    height: 300px;
    img {
      height: 100%;
      width: ${appTheme.width.fulWidth};
    }
  }
  @media screen and (max-width: 568px) {
    height: 300px !important;
  }
`;

export const OuterSpace = styled.div`
  margin-top: ${appTheme.outerSpace.xxlMargin} !important;
  margin-bottom: 20px !important;
`;
export const Title = styled.h6`
  font-size: ${appTheme.font.largeXlSize};
  font-weight: 600;
  line-height: 20px;
  text-align: center;
  margin-top: ${appTheme.outerSpace.xxlMargin} !important;
  margin-bottom: 20px !important;
  width: ${appTheme.width.contentWidth};
  margin: auto;
  @media screen and (min-width: 1300px) and (max-width: 2000px) {
    font-size: ${appTheme.font.largeXlSize};
  }
`;
export const Division = styled.div`
  position: relative;
  width: ${appTheme.width.contentWidth};
  margin: auto;
`;

export const themecolor = styled.div`
  color: ${appTheme.color.textColor};
`;

export const Heading = styled.h3`
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 15px;
  font-size: ${appTheme.font.largexxl};
  color: ${(textColor) =>
    textColor.colss ? appTheme.color.textColor : appTheme.color.headingColor};
  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (max-width: 568px) {
    font-size: ${appTheme.font.mediumXlSize};
  }
`;

export const SubHeading = styled.h5`
  font-weight: 500;
  line-height: 20px;
  font-size: ${appTheme.font.mediumXlSize};
  color: ${(textColor) =>
    textColor.cols ? appTheme.color.textColor : appTheme.color.headingColor};
  @media screen and (max-width: 568px) {
    font-size: ${appTheme.font.mediumXlSize};
  }
`;

export const UnderSubHeading = styled.h6`
  font-weight: 500;
  line-height: ${(props) => (props.line ? "35px" : "20px")};

  color: ${(headingColor) =>
    headingColor.cols
      ? appTheme.color.lightColor
      : appTheme.color.headingColor};
  @media screen and (max-width: 768px) {
    font-size: ${appTheme.font.mediumXlSize};
  }
  @media screen and (min-width: 1501px) and (max-width: 2000px) {
    font-size: ${appTheme.font.largeXlSize} !important;
    line-height: 30px;
  }
  @media screen and (min-width: 992px) and (max-width: 1500px) {
    font-size: ${appTheme.font.XlSize} !important;
  }
`;
export const SubText = styled.p`
line-height: ${(props) => (props.line ? "20px" : "25px")};
  font-size: ${appTheme.font.xlSize} !important;
  color: ${(headingColor) =>
    headingColor.subColor
      ? appTheme.color.headingColor
      : appTheme.color.lightColor};

  font-weight: 300;
  margin-bottom: ${(props) => (props.marg ? "5px" : "10px")};
  @media screen and (max-width: 768px) {
    font-size: ${appTheme.font.xlSize};
  }
  @media screen and (min-width: 1501px) and (max-width: 2000px) {
    font-size: ${appTheme.font.largeXlSize} !important;
    line-height: 30px;
  }
  @media screen and (min-width: 992px) and (max-width: 1500px) {
    font-size: ${appTheme.font.smallXlSize};
  
  .addDecoration p{
    text-decoration: underline;
  }
`;
export const Text = styled.p`
  line-height: 25px;
  font-size: ${appTheme.font.xlSize} !important;
  font-weight: 300;
  margin-top: ${(props) => (props.top ? "31px" : "0")};
  color: ${(paraText) =>
    paraText.color ? appTheme.color.textColor : appTheme.color.paraText};
  margin-bottom: ${(props) => (props.marg ? "0px" : "10px")};
  text-decoration: ${(props) => (props.line ? "underline" : "none")};
  @media screen and (max-width: 768px) {
    font-size: ${appTheme.font.xlSize};
  }
  @media screen and (min-width: 1501px) and (max-width: 2000px) {
    font-size: ${appTheme.font.largeXlSize} !important;
    line-height: 30px;
  }
  @media screen and (min-width: 992px) and (max-width: 1500px) {
    font-size: ${appTheme.font.smallXlSize};
  }
`;

export const SpanText = styled.span`
  color: ${appTheme.color.textColor} !important;
`;

export const SmallHeading = styled.p`
  line-height: 15px;
  margin-bottom: ${(props) => (props.marg ? "10px" : "0px")} !important;
  // font-size: ${appTheme.font.lgSize} !important;
  color: ${(paraText) =>
    paraText.color ? appTheme.color.textColor : appTheme.color.headingColor};
  font-weight: 600;
  margin-bottom: ${(props) => (props.marg ? "0" : "20px")};
  @media screen and (max-width: 768px) {
    font-size: ${appTheme.font.smallXlSize} !important;
    font-weight: 700;
  }
  @media screen and (min-width: 1501px) and (max-width: 2000px) {
    font-size: ${appTheme.font.largeXlSize} !important;
    line-height: 30px;
  }
  @media screen and (min-width: 992px) and (max-width: 1500px) {
    font-size: ${appTheme.font.lgSize};
  }
`;

export const IntroCard = styled.div`
  position: absolute;
  width: 60%;
  background-color: #ffffffc7;
  display: flex;
  flex-direction: column;
  right: 11px;
  bottom: 0;
  text-align: justify;
  padding: 42px;
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 70%;
  }
  @media screen and (min-width: 568px) and (max-width: 768px) {
    width: ${appTheme.width.fulWidth};
    background-color: #ffffffe6;
    padding: 20px;
    position: unset !important;
    margin-top: ${appTheme.outerSpace.xlMargin} !imporatnt;
  }
  @media screen and (max-width: 568px) {
    width: ${appTheme.width.fulWidth};
    background-color: #ffffffe6;
    right: 0;
    padding: 20px;
    position: unset !important;
    margin-top: ${appTheme.outerSpace.xlMargin} !imporatnt;
  }
`;

export const ImageCard = styled.div`
  color: ${appTheme.color.headingColor} !important;
  width: 28%;
  margin-top: ${appTheme.outerSpace.xlMargin};
  position: relative;
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: 30%;
  }
  @media screen and (min-width: 568px) and (max-width: 768px) {
    width: 32%;
  }
  @media screen and (max-width: 768px) {
    width: ${appTheme.width.fulWidth};
    position: unset;
  }
`;

export const SubSize = styled.div`
  height: 250px;
  img {
    width: ${appTheme.width.fulWidth};
    max-height: 100%;
    max-width: 100%;
    border-radius: 10px;
  }
  @media screen and (min-width: 1300px) and (max-width: 2000px) {
    height: 350px;
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 992px) {
    height: 350px;
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  @media screen and (min-width: 568px) and (max-width: 768px) {
    height: 350px;
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    width: ${appTheme.width.fulWidth};
    height: 350px;
    img {
      border-radius: 0px !important;
      max-height: 100%;
      max-width: 100%;
    }
  }
`;
export const EventsCard = styled.div`
  color: ${appTheme.color.headingColor} !important ;
  position: relative;
  width: ${(props) => (props.width ? "5%" : "30%")};
  margin-top: ${(props) => (props.margin ? "0" : "40px")};
  // height: ${(props) => (props.height ? "unset" : "180px")};
  img {
    width: ${appTheme.width.fulWidth} !important;
    max-height: 100%;
    max-width: 100%;
    height: 280px;
  }
  @media screen and (min-width: 1300px) and (max-width: 2000px) {
    height: unset !important;
  }
  @media screen and (max-width: 768px) {
    width: ${appTheme.width.fulWidth};
    height: unset;
    text-align: center;
    margin-top: ${appTheme.outerSpace.xxlMargin};
    img {
      object-fitt: cover;
    }
  }
`;
export const Span = styled.span`
  color: ${appTheme.color.textColor} !important ;
`;
export const ProfileSection = styled.div`
  margin-top: ${appTheme.outerSpace.xlMargin} !imporatnt;
  width: ${appTheme.width.contentWidth} !important;
  margin: auto;
  img {
    width: 100px !important;
    height: 100px !important;
    border-radius: 50px;
    padding: 5px;
    border: 8px solid ${appTheme.color.colorTransparent};
    margin: auto;
  }
`;

export const Jar = styled.div`
  width: ${appTheme.width.contentWidth} !important;
  margin: auto;
`;

export const EventFade = styled.div`
  position: absolute;
  background-color: ${appTheme.color.trasparent};
  bottom: 0px;
  display: ${(props) => (props.disp ? "none" : "block")};
  padding: 10px 15px;
  width: ${(props) => (props.widths ? "0" : "95%")};
  color: ${appTheme.color.textColor}!imporatnt;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.disp ? "block" : "block")};
    position: unset;
    width: ${appTheme.width.fulWidth};
    padding: 20px;
  }
  @media screen and (min-width: 769px) and (max-width: 992px) {
    width: ${appTheme.width.fulWidth} !important;
  }
  @media screen and (min-width: 1025px) and (max-width: 2000px) {
    bottom: 0px;
  }
`;

export const LetterBar = styled.div`
  background-color: ${appTheme.color.appBackgroundcolor};
  text-align: center;
  justify-content: center;
  color: ${appTheme.color.lightColor};
  margin-top: ${appTheme.outerSpace.xxlMargin};
  padding: 20px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  color: ${appTheme.color.textColor};
  flex-wrap: wrap;
  img {
    width: 33%;
    height: 70px;
    padding: 3px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: ${(props) => (props.marg ? "none" : "40px")};
    img {
      width: 33% !important;
      height: 120px !important;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1299px) {
    img {
      height: 80px !important;
      padding: 3px !important;
      width: 33% !important;
    }
  }
  @media screen and (min-width: 1300px) and (max-width: 2000px) {
    img {
      height: 100px !important;
      padding: 6px !important;
      width: 33% !important;
    }
  }
`;
export const Bar = styled.div`
  width: 50%;
  margin: auto;
  position:relative;
  @media screen and (min-width: 768px) and (max-width: 992px) {
    width: ${appTheme.width.contentWidth};
  }
  @media screen and (max-width: 768px) {
    width: ${appTheme.width.fulWidth};
  }
    @media screen and (min-width: 1501px) and (max-width: 2000px) {
      input {
        font-size: ${appTheme.font.largeXlSize} !important;
      }
    }
    @media screen and (min-width: 992px) and (max-width: 1500px) {
      input {
        font-size: ${appTheme.font.smallXlSize} !important;
      }
    }
  }
`;
