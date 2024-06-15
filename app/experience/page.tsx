import ExperienceListItem from "../containers/experience-list-item/ExperienceListItem";
import styles from "./experience.module.css";
import IllustrationFadeIn from "../containers/Landing/illustration_fade_in.json";
import Animation from "@/app/components/animation/Animation";

export interface Experience {
  timeFrame: string;
  job: string;
  href: string;
  jobDescription: string;
  technologies: string[];
}

const experiences: Experience[] = [
  {
    timeFrame: "2023-Present",
    job: "Ecalcura . Departement Zorg",
    href: "https://www.zorg-en-gezondheid.be/ecalcura",
    jobDescription:
      "In eCalcura, data is entered to calculate allowances for various care sectors. These sectors include residential care centers (with or without short-stay centers), special recognition day care centers, mobile palliative care teams, psychiatric care homes, certain rehabilitation facilities, sheltered living initiatives, and type 3 short stay centers.",
    technologies: [
      "C#",
      "ASP.NET",
      "Html",
      "CSS",
      "JavaScript",
      "EntityFramework",
      "Sql",
      "Azure",
      "React",
    ],
  },
  {
    timeFrame: "2023",
    job: "Vf clubs . Velofollies",
    jobDescription:
      "An application where you manage Cycling clubs. You can manage activities, clubs, memberships and analytics.",
    technologies: [
      "C#",
      "ASP.NET",
      "Html",
      "CSS",
      "JavaScript",
      "EntityFramework",
      "Sql",
      "Azure",
      "React",
    ],
    href: "https://www.velofollies.be/nl/download-app/",
  },
  {
    timeFrame: "2023",
    job: "Calculation tool . Deschacht",
    jobDescription:
      "A calculation tool (Hauraton) for a construction company to calculate the right drainage channel parts according to your chosen parameters.",
    technologies: [
      "C#",
      "ASP.NET",
      "Html",
      "CSS",
      "JavaScript",
      "Blazor",
      "EntityFramework",
    ],
    href: "https://www.deschacht.eu/engineering/rekentools/",
  },
  {
    timeFrame: "2022-2023",
    job: "Heat-erp design system in blazor . Zerofriction",
    jobDescription:
      "A collaborative project in India. Where my task was to enforce good quality code and best practices.",
    technologies: ["C#", "ASP.NET", "Html", "CSS", "Blazor"],
    href: "https://www.zerofriction.co/",
  },
  {
    timeFrame: "2021-2023",
    job: "Heat-erp . Zerofriction",
    jobDescription:
      "Extend features and refactor the global state management to work with observables, actions and computed values using Mobx.",
    technologies: ["Mobx", "React", "Typescript"],
    href: "https://www.zerofriction.co/",
  },
  {
    timeFrame: "2022",
    job: "Portal heat-erp . Zerofriction",
    jobDescription:
      "Customer application where you can manage your utility contracts, invoices and consumption.",
    technologies: ["Html", "CSS", "JavaScript", "Blazor"],
    href: "https://www.zerofriction.co/",
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
          Yorben Goor
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
            An insightful and creative developer with a robust ambition to learn
            new ideas and concepts across a range of related disciplines. My
            passion extends to various fields, including machine learning,
            robotics, artificial intelligence, and game development.
            <br />
            <br />
            With a deep-seated curiosity, I constantly seek out opportunities to
            expand my knowledge and apply innovative solutions to complex
            problems. My approach to development is not just about writing code
            but about understanding the underlying principles and theories that
            drive technology forward.
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
