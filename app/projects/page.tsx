import { Carousel } from "antd";
import styles from "./page.module.css";
import Image from "next/image";

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
        <video className={styles.project_item_video} autoPlay muted width="600" loop height="600" preload="none">
          <source src="/assets/videos/project_1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.project_item}>
        <video autoPlay muted width="600" loop height="600" preload="none">
          <source src="/assets/videos/project_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.project_item}>
        <video autoPlay muted width="600" loop height="600" preload="none">
          <source src="/assets/videos/project_3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className={styles.project_item}>
        <video autoPlay muted width="600" loop height="600" preload="none">
          <source src="/assets/videos/project_4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Work;
