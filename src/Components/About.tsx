import React, { useState } from "react";
import { IResumeDataMain } from "../interfaces/IMainData";

interface IProps {
  data?: IResumeDataMain;
}

const About = ({ data }: IProps) => {
  const [name] = useState(data?.name);
  const [profilepic] = useState("images/" + data?.image);
  const [bio] = useState(data?.bio);
  const [description] = useState(data?.description);
  const [street] = useState(data?.address.street);
  const [city] = useState(data?.address.city);
  const [state] = useState(data?.address.state);
  const [zip] = useState(data?.address.zip);
  const [phone] = useState(data?.phone);
  const [email] = useState(data?.email);
  const [resumeDownload] = useState(data?.resumedownload);

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Tim Baker Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
