import React from "react";
import "./Home.css";
export const Home = () => {
  return (
    <>
      <div className="homecontainer1">
        <div className="homecontainer1-column1">
          <h1 className="line1">Start your journey of success </h1>
          <h1> Personalised Coding Programs to</h1>
          <h1> make coding easier for you</h1>
          <h3>Want to know how PrepBytes can help you?</h3>
          <button className="knowMore">Know More</button>
        </div>
        <div className="homecontainer1-column2">
          <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Masterhead(web).svg" />
        </div>
      </div>
      <div className="homecontainer2">
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google-launchpad.webp" />
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/future-skills-homepage.webp" />
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/she-leads.webp" />
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aws-ed-start.webp" />
      </div>
      <div className="homecontainer3">
        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/stairs_of_approach(web).svg" />
      </div>
      <div className="homecontainer4">
        <h1 style={{ textAlign: "center" }}>I WANT TO</h1>
        <div className="courseCardContainer">
          <div className="courseCard">
            <img
              src="https://prepbytes.netlify.app/static/media/Full_Stack.a01a607d720680462d14.webp"
              width={"100%"}
              alt="poster"
            />
            <h2>PREPARE FOR CAMPUS PLACEMENTS</h2>
          </div>
          <div className="courseCard">
            <img
              src="https://prepbytes.netlify.app/static/media/master_competetive_pgm.1dbf0bfd3bb3d39d541d.webp"
              width={"100%"}
              alt="poster"
            />
            <h2>MASTER COMPETITIVE PROGRAMMING</h2>
          </div>
          <div className="courseCard">
            <img
              src="https://prepbytes.netlify.app/static/media/Project_Poster.d4fcaeb59c6fc625ac4a.webp"
              width={"100%"}
              alt="poster"
            />
            <h2>BUILD DEVELOPMENT PROJECTS</h2>
          </div>
        </div>
      </div>
    </>
  );
};
