import Landing from "./containers/Landing/Landing";
import Animation from "./components/animation/Animation";
import animationDataLogo from "./components/animation/logo_wrangell.json";

export default function Home() {
  return (
    <>
      <div className="logo_animation">
        <Animation animationData={animationDataLogo} />
      </div>
      <Landing />
    </>
  );
}
