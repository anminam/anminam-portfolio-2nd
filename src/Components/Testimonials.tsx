import React, { useState, useEffect } from "react";
import { IResumeDataTestimonial } from "../interfaces/IMainData";

interface IProps {
  data: IResumeDataTestimonial;
}

const Testimonials = ({ data }: IProps) => {
  const [testimonials, setTestimonials] = useState<JSX.Element[]>();

  useEffect(() => {
    if (data) {
      setTestimonials(
        data.testimonials.map(function (testimonial) {
          return (
            <li key={testimonial.user}>
              <blockquote>
                <p>{testimonial.text}</p>
                <cite>{testimonial.user}</cite>
              </blockquote>
            </li>
          );
        })
      );
    }
  }, [data]);

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{testimonials}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
