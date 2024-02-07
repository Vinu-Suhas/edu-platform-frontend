import React from "react";
import "./Header.css";
import { useHoverEffect } from "../CustomHooks/useHoverEffect";
import { DropDownMenu } from "../DropDownMenu/DropDownMenu";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const studyMaterial = useHoverEffect();
  const courseAndPrograms = useHoverEffect();
  const blog = useHoverEffect();
  const nav = useNavigate();
  return (
    <div className="headerContainer">
      <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg" />
      <div className="p2Container">
        <div className="buttonContainer">
          <button className="loginButton" onClick={() => nav("/login")}>
            Login
          </button>
          <button className="signUp" onClick={() => nav("/signup")}>
            Sign Up
          </button>
        </div>
        <ul>
          <li
            onMouseEnter={studyMaterial.handleMouseEnter}
            onMouseLeave={studyMaterial.handleMouseLeave}
          >
            Study Material
            {studyMaterial.isDropdownVisible && (
              <DropDownMenu
                itemsList={["Interview notes", "Mock Test", "Video tutorial"]}
              />
            )}
          </li>
          <li
            onMouseEnter={courseAndPrograms.handleMouseEnter}
            onMouseLeave={courseAndPrograms.handleMouseLeave}
          >
            Courses and Programs
            {courseAndPrograms.isDropdownVisible && (
              <DropDownMenu
                itemsList={[
                  "Placement Programs",
                  "Master Competitive Programming",
                  "Full Stack Program",
                ]}
              />
            )}
          </li>
          <li>Pratice and Coding </li>
          <li>Elevation Academy</li>
          <li>CBM Academy</li>
          <li
            onMouseEnter={blog.handleMouseEnter}
            onMouseLeave={blog.handleMouseLeave}
          >
            Blog
            {blog.isDropdownVisible && (
              <DropDownMenu
                itemsList={[
                  "C",
                  "C++",
                  "Python",
                  "Data Structure",
                  "Operating System",
                  "DBMS",
                ]}
              />
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
