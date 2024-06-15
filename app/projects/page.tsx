import { Carousel } from "antd";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

interface Video {
  src: string;
  href: string;
}

const videos: Video[] = [
  {
    src: "/assets/videos/project_1.mp4",
    href: "https://www.youtube.com/watch?v=5SEscjgX_q4",
  },
  {
    src: "/assets/videos/project_2.mp4",
    href: "https://www.behance.net/gallery/102257727/The-Travelling-Flower-Motion",
  },
  {
    src: "/assets/videos/project_3.mp4",
    href: "https://o-soleil.eu/",
  },
  {
    src: "/assets/videos/project_4.mp4",
    href: "https://wrangell-dsd.com/wordpress/",
  },
];

const Work = () => {
  return (
    <div className={styles.projects}>
      {videos.map((video, index) => (
        <div key={index} className={styles.project_item}>
          <Link target="_blank" href={video.href} className={styles.cursor}>
            <video
              className={styles.project_item_video}
              muted
              autoPlay
              playsInline
              width="600"
              loop
              height="600"
              preload="none"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Work;
