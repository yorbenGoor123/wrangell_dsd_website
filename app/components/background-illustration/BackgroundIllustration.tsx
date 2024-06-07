import styles from "./BackgroundIllustration.module.css";
import classNames from "classnames";

interface Props {
  speed: number;
}

const BackgroundIllustration = (props: Props) => {
  const { speed } = props;
  const tiles = [];

  for (let i = 0; i < 40; i++) {
    tiles.push(
      <div
        key={i}
        className={styles.background_tile}
        style={{ left: `${i * 2}rem` }}
      ></div>
    );
  }

  return (
      <div
        className={classNames(styles.background_animation, {
          [styles.fade_in]: speed > 4,
          [styles.fade_out]: speed <= 4,
        })}
      >
        {tiles}
      </div>
  );
};

export default BackgroundIllustration;
