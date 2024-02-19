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
      <div className="homecontainer5">
        <div className="homecontainer5-column1">
          <p className="HomeJourney__main-left--heading">
            Are you an Experienced Professional willing to Switch?
          </p>
          <div className="CarrerPlanBox">
            <img
              src="https://prepbytes.netlify.app/static/media/industry_vetted_curriculum.ff2a038a10f9b9465a7a306bcdf7f3bd.svg"
              alt="CarrterPlanICON"
              class="CarrerPlanICON"
            />
            <p class="CarrerPlanBox_Text">
              INDUSTRY VETTED CURRICULUM STRUCTURED FOR YOU
            </p>
          </div>
          <div className="CarrerPlanBox">
            <img
              src="https://prepbytes.netlify.app/static/media/exclusive_placement.7fabadf0f7971f3b5faa1063b2f20966.svg"
              alt="CarrterPlanICON"
              class="CarrerPlanICON"
            />
            <p class="CarrerPlanBox_Text">
              REAL LIFE PROJECTS BUILT ON DEMAND TECH STACK
            </p>
          </div>
          <div className="CarrerPlanBox">
            <img
              src="https://prepbytes.netlify.app/static/media/real_life_projects.759015c0d8351268426471ddf7764adb.svg"
              alt="CarrterPlanICON"
              class="CarrerPlanICON"
            />
            <p class="CarrerPlanBox_Text">
              EXCLUSIVE PLACEMENT SUPPORT TEAM WITH JOB GURANTEE
            </p>
          </div>
          <p class="courseName">
            PrepBytes Elevation Academy -
            <span class="courseName_Text">
              4 months Full Stack Program with Job Guarantee
            </span>
          </p>
        </div>
        <button className="knowMoreButton">KNOW MORE</button>
        <div className="homecontainer5-column2"></div>
      </div>
    </>
  );
};
