import React, { useState } from "react";
import {
  IResumeDataResume,
  IResumeDataResumeEducation,
  IResumeDataResumeWork,
  IResumeDataResumeSkill,
} from "../interfaces/IMainData";

interface IProps {
  data: IResumeDataResume;
}

const Resume = ({ data }: IProps) => {
  const [skillmessage] = useState<string>(data.skillmessage);
  const [educations] = useState<IResumeDataResumeEducation[]>(data.education);
  const [works] = useState<IResumeDataResumeWork[]>(data.work);
  const [skills] = useState<IResumeDataResumeSkill[]>(data.skills);

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <EduComponent data={educations} />
            </div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <WorkComponent data={works} />
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">
              <SkillComponent data={skills} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const EduComponent = ({ data }: { data: IResumeDataResumeEducation[] }) => {
  return (
    <>
      {data?.map((education) => {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      })}
    </>
  );
};

const WorkComponent = ({ data }: { data: IResumeDataResumeWork[] }) => {
  return (
    <>
      {data?.map((work) => {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
          </div>
        );
      })}
    </>
  );
};
const SkillComponent = ({ data }: { data: IResumeDataResumeSkill[] }) => {
  return (
    <>
      {data?.map((skill) => {
        var className = "bar-expand " + skill.name.toLowerCase();
        return (
          <li key={skill.name}>
            <span style={{ width: skill.level }} className={className}></span>
            <em>{skill.name}</em>
          </li>
        );
      })}
    </>
  );
};

export default Resume;
