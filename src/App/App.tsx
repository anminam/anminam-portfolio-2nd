import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Components/Header";
import About from "../Components/About";
import Resume from "../Components/Resume";
import Portfolio from "../Components/Portfolio";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { IMainData, IResumeData } from "../interfaces/IMainData";

const App = () => {
  const [datas, setDatas] = useState<IMainData | null>();
  const [resumeData, setResumeData] = useState<IResumeData>();

  useEffect(() => {
    fetch("/resumeData.json")
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        setResumeData(json);
      });
  }, []);

  return (
    <div className="App">
      {resumeData && (
        <>
          <Header data={resumeData.main} />
          <About data={resumeData.main} />
          <Resume data={resumeData.resume} />
          <Portfolio data={resumeData.portfolio} />
          <Testimonials data={resumeData.testimonials} />
          <Contact data={resumeData.main} />
          <Footer data={resumeData.main} />
        </>
      )}
    </div>
  );
};

export default App;
