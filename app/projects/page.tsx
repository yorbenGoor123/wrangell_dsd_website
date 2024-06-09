import { Carousel } from "antd";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const contentStyle: React.CSSProperties = {
  height: "20rem",
  color: "#fff",
  lineHeight: "20rem",
  textAlign: "center",
  background: "#364d79",
  borderRadius: ".5rem",
};

const Work = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.project_item}>
        <Link
          target="_blank"
          href="https://www.youtube.com/watch?v=5SEscjgX_q4"
          className={styles.cursor}
        >
          <video
            className={styles.project_item_video}
            autoPlay
            muted
            width="600"
            loop
            height="600"
            preload="none"
          >
            <source src="/assets/videos/project_1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Link>
      </div>

      <div className={styles.project_item}>
        <Link
          target="_blank"
          href="https://www.behance.net/gallery/102257727/The-Travelling-Flower-Motion"
          className={styles.cursor}
        >
          <video autoPlay muted width="600" loop height="600" preload="none">
            <source src="/assets/videos/project_2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Link>
      </div>

      <div className={styles.project_item}>
        <Link target="_blank" href="https://o-soleil.eu/" className={styles.cursor}>
          <video autoPlay muted width="600" loop height="600" preload="none">
            <source src="/assets/videos/project_3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Link>
      </div>

      <div className={styles.project_item}>
        <Link
          target="_blank"
          href="https://wrangell-dsd.com/wordpress/"
          className={styles.cursor}
        >
          <video autoPlay muted width="600" loop height="600" preload="none">
            <source src="/assets/videos/project_4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Link>
      </div>
    </div>
  );
};

export default Work;
