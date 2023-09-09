import Router from "components/Router";
import { useRef } from "react";
import HelmetTemplate from "components/HelmetTemplate";
import HomeScreen from "route/HomeScreen";
import Notify from "components/Notify";

const App = () => {
  const seoContent = useRef({
    title: "Sajin",
    desc: "Easily share or save your photos with friends with Sajin",
  });
  return (
    <FullScreen>
      <HomeScreen />
    </FullScreen>
  );
};

export default App;
