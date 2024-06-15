import { Experience } from "@/app/experience/page";
import styles from "./ExperienceListItem.module.css";
import Link from "next/link";

interface Props {
  experience: Experience;
}

const ExperienceListItem = (props: Props) => {
  const { experience } = props;
  return (
    <li>
      <Link href={experience.href} target="_blank">
        <div className={styles.experience_list_item}>
          <span className={styles.experience_list_item_time_frame}>
            {experience.timeFrame}
          </span>
          <div className={styles.experience_list_item_content}>
            <h3 className={styles.experience_list_item_content_job}>
              {experience.job}
            </h3>
            <p className={styles.experience_list_item_content_job_description}>
              {experience.jobDescription}
            </p>
            <ul className={styles.technologies}>
              {experience.technologies.map((technology) => (
                <li key={technology} className={styles.technology}>
                  <span>{technology}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ExperienceListItem;
