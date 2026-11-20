import Header from "./components/Header/Header.jsx";
import usePageConfig from "./hooks/usePageConfig.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Video from "./components/Video/Video.jsx";
import About from "./components/About/About.jsx";
import Reality from "./components/Reality/Reality.jsx"
import Course from "./components/Course/Course.jsx"
import Partner from "./components/Partner/Partner.jsx"
import Review from "./components/Review/Review.jsx";

function App() {
  const config = usePageConfig();
  return (
    <>
      <Header/>
      <Intro config={config}/>
      <Video config={config}/>
      <About config={config}/>
      <Reality />
      <Course />
      <Review />
      <Partner />
    </>
  );
}

export default App
