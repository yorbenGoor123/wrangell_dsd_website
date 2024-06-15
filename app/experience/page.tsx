import ExperienceListItem from "../containers/experience-list-item/ExperienceListItem";
import styles from "./experience.module.css";
import IllustrationFadeIn from "../containers/Landing/illustration_fade_in.json";
import Animation from "@/app/components/animation/Animation";

export interface Experience {
  timeFrame: string;
  job: string;
  jobDescription: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    timeFrame: "2023-Present",
    job: "DotNet Developer . Noest",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
    technologies: ["Html", "Css", "JavaScript"],
  },
  {
    timeFrame: "2021-2023",
    job: "Frontend Developer . Noest",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
    technologies: ["Html", "Css", "JavaScript"],
  },
  {
    timeFrame: "2019-2021",
    job: "Intern . Noest",
    jobDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of",
    technologies: ["Html", "Css", "JavaScript"],
  },
];

const Experience = () => {
  return (
    <div className={styles.experience}>
      <div className={styles.experience_title_container}>
        <h1 className={styles.experience_title}>
          <span className={styles.experience_title_role}>
            Full stack developer
          </span>
          <br />
          Hi I&apos;m Yorben
          <br />
          <span className={styles.experience_title_role_description}>
            I make digital solutions that suits your problem
          </span>
        </h1>
        <div className={styles.experience_illustration}>
          <Animation
            speed={1}
            loop={true}
            width={650}
            height={650}
            animationData={IllustrationFadeIn}
          />
        </div>
      </div>
      <div className={styles.experience_list}>
        <div className={styles.about_me}>
          <h2 className={styles.about_me_title}>Hi I&apos;m Yorben</h2>
          <p className={styles.about_me_paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
            <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <ul className={styles.experience_list_items}>
          {experiences.map((experience) => (
            <ExperienceListItem key={experience.job} experience={experience} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
