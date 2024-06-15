import Link from "next/link";
import BackgroundElement from "./components/background-element/BackgroundElement";
import Landing from "./containers/Landing/Landing";

export default function Home() {
  return (
    <>
      <BackgroundElement top={8} left={-20} />
      <BackgroundElement reverse top={20} left={60} />
      <BackgroundElement top={2} left={50} width={20} />
      <Landing />
      <Link className="contact" href="mailto:yorben.goor@wrangell-dsd.com">
        yorben.goor@wrangell-dsd.com
      </Link>
    </>
  );
}
