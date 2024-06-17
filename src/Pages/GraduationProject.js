// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";

import Header from "../Components/Header";
import DesignProcess from "../Components/DesignProcess";
import graduationProjectData from "../Data/GraduationProjectData";
import ProjectPlan from "../Graduatoin-Pdf/ProjectPlan.pdf";
import StakeholderInterview from "../Graduatoin-Pdf/StakeholderInterview.pdf";
import TrendAnalysis from "../Graduatoin-Pdf/Trend analysis.pdf";
import IframeComponent from "../Components/Iframe";
import EmapthyMap from "../Graduatoin-Pdf/EmpathyMap.pdf";
import MoscowAnalysis from "../Graduatoin-Pdf/MoSCoW analysis.pdf";
import TechnicalPrototype from "../Graduatoin-Pdf/TechnicalPrototype.pdf";
import TechnicalImplementation from "../Graduatoin-Pdf/Technical Implementation.pdf";
import TestDocument from "../Graduatoin-Pdf/Test document.pdf";

function GraduationProject() {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div className="container mx-auto max-width pt-6 pb-16">
          <div className="flex flex-col justify-center gap-3.5 items-center mt-32 mb-32">
            <h1 className="text-2xl text-dark-heading   text-4xl xl:text-6xl  font-bold">
              {graduationProjectData.group1.heading}
            </h1>
            <p className="text-2xl text-dark-heading  text-4xl xl:text-base  m-3">
              {graduationProjectData.group1.subHeading}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "3rem",
              }}
            >
              <img
                src={graduationProjectData.introImage}
                alt="Prototype"
                style={{ width: "50%" }}
              />
            </div>
          </div>

          <div>
            <h1 className="text-xl text-dark-heading font-bold">
              {graduationProjectData.introHeading}
            </h1>
            <br />
            <p className="text-base text-dark-heading">
              {" "}
              {graduationProjectData.introText}
            </p>
            <br />
            <br />
            <br />
          </div>
          <div>
            <h1 className="text-xl text-dark-heading font-bold">
              {graduationProjectData.projectplan}
            </h1>
            <br />
            <p
              className="text-base text-dark-heading    "
              dangerouslySetInnerHTML={{
                __html: graduationProjectData.projectplanText,
              }}
            ></p>
            <br />
          </div>
          <div>
            <a href={ProjectPlan} target="_blank" rel="noopener noreferrer">
              <button
                className="bg-gradient"
                style={{
                  fontSize: "16px",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                <p className="font-bold"> View document</p>
              </button>
            </a>
          </div>
          <br />
          <br />
          <br />
          <div>
            <h1 className="text-xl text-dark-heading font-bold">
              {graduationProjectData.mainQuestion}
            </h1>
            <br />
            <p
              className="text-base text-dark-heading    "
              dangerouslySetInnerHTML={{
                __html: graduationProjectData.reaseachQuestion,
              }}
            ></p>
            <br />
          </div>
          <br />
          <br />
          <br />
          <div
            div
            className="flex flex-col justify-center items-center mt-20 mb-20"
          >
            <h1 className="text-2xl text-dark-heading    font-bold">
              {graduationProjectData.group2.heading}
            </h1>
            <DesignProcess />
          </div>
        </div>
        <h1
          className="text-2xl text-dark-heading  text-4xl   font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {graduationProjectData.group2.subHeading}
        </h1>
        <div className="container mx-auto max-width pt-6 pb-16">
          <div>
            <p
              className="text-base text-dark-heading    "
              dangerouslySetInnerHTML={{
                __html: graduationProjectData.group4.discoverPhase,
              }}
            ></p>
            <br />
            <br />
          </div>

          <section id="Stakeholder-Interview">
            <div className="flex flex-row gap-5 items-center">
              <div style={{ flex: "1" }}>
                <p className="text-base text-dark-heading    font-bold">
                  {graduationProjectData.firstPhase.question}
                </p>
                <br />
                <div className="flex flex-row gap-2">
                  <p className="text-base text-dark-heading    font-bold">
                    {graduationProjectData.firstPhase.subHeading}
                  </p>
                  <p className="text-base text-dark-heading   ">
                    {graduationProjectData.firstPhase.methods}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-base text-dark-heading    font-bold">
                    {graduationProjectData.firstPhase.subheadingWhy}
                  </p>
                  <p className="text-base text-dark-heading   ">
                    {graduationProjectData.firstPhase.why}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-base text-dark-heading    font-bold">
                    {graduationProjectData.firstPhase.subHeadingHow}
                  </p>
                  <p className="text-base text-dark-heading   ">
                    {graduationProjectData.firstPhase.how}
                  </p>
                </div>
                <br />
                <div className="flex flex-col gap-2">
                  <p className="text-base text-dark-heading    font-bold">
                    {graduationProjectData.firstPhase.resultHeading}
                  </p>
                  <p className="text-base text-dark-heading   ">
                    {graduationProjectData.firstPhase.results}
                  </p>
                </div>
                <br />

                <div className="flex flex-col gap-2">
                  <p className="text-base text-dark-heading    font-bold">
                    {graduationProjectData.firstPhase.conclusionHeading}
                  </p>
                  <p className="text-base text-dark-heading   ">
                    {graduationProjectData.firstPhase.conclusion}
                  </p>
                  <br />
                  <div>
                    <a
                      href={StakeholderInterview}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="bg-gradient"
                        style={{
                          fontSize: "16px",
                          padding: "10px 20px",
                          border: "none",
                          borderRadius: "5px",
                        }}
                      >
                        <p className="font-bold"> View document</p>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                <img
                  src={graduationProjectData.firstPhase.image}
                  alt="Prototype"
                />
                <a
                  href="https://cmdmethods.nl/cards/field/interview"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-base text-dark-heading    font-bold">
                    Image source
                  </p>
                </a>
              </div>
            </div>
          </section>
        </div>
        <h1
          className="text-2xl text-dark-heading  text-4xl   font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {graduationProjectData.definePhaseHeading}
        </h1>

        <div className="container mx-auto max-width pt-6 pb-16">
          <div>
            <p
              className="text-base text-dark-heading    "
              dangerouslySetInnerHTML={{
                __html: graduationProjectData.definePhaseIntroText,
              }}
            ></p>
            <br />
            <br />
          </div>
          <div>
            <section id="Empathy-map">
              <div className="flex flex-row flex-row-reverse gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-base text-dark-heading    font-bold">
                    {graduationProjectData.empathyMap.question}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.empathyMap.subHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.empathyMap.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.empathyMap.subheadingWhy}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.empathyMap.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.empathyMap.subHeadingHow}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.empathyMap.how}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.empathyMap.resultHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.empathyMap.results}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.empathyMap.conclusionHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.empathyMap.conclusion}
                    </p>
                    <br />
                    <div>
                      <a
                        href={EmapthyMap}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          className="bg-gradient"
                          style={{
                            fontSize: "16px",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                          }}
                        >
                          <p className="font-bold"> View document</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <div className="flex flex-col">
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <img
                        src={graduationProjectData.empathyMap.image}
                        alt="Prototype"
                      />
                    </div>
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <IframeComponent
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2Fs9g7i0Ryq8IJwKthXhltU9%2FEmpathy-Mapping-Template-(Community)%3Fnode-id%3D0%253A1%26t%3D8MrCKx2e3pcVmd1y-1"
                        title="Example"
                        width="100%"
                        height="400"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </section>

            <section id="Problem-statement">
              <div className="flex flex-row  gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-base text-dark-heading    font-bold">
                    {graduationProjectData.problemStatemet.question}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.problemStatemet.subHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.problemStatemet.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.problemStatemet.subheadingWhy}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.problemStatemet.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.problemStatemet.subHeadingHow}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.problemStatemet.how}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.problemStatemet.resultHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.problemStatemet.results}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.problemStatemet.conclusionHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.problemStatemet.conclusion}
                    </p>
                    <br />
                  </div>
                </div>

                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <div className="flex flex-col gap-7">
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <img
                        src={graduationProjectData.problemStatemet.image1}
                        alt="Prototype"
                      />
                    </div>
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <img
                        src={graduationProjectData.problemStatemet.image}
                        alt="Prototype"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <section id="Trend-Analysis">
              <div className="flex flex-row-reverse  gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-base text-dark-heading    font-bold">
                    {graduationProjectData.cmsSystem.question}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.cmsSystem.subHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.cmsSystem.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.cmsSystem.subheadingWhy}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.cmsSystem.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.cmsSystem.subHeadingHow}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.cmsSystem.how}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.cmsSystem.resultHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.cmsSystem.results}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.cmsSystem.conclusionHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.cmsSystem.conclusion}
                    </p>
                    <br />
                    <div>
                      <a
                        href={TrendAnalysis}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          className="bg-gradient"
                          style={{
                            fontSize: "16px",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                          }}
                        >
                          <p className="font-bold"> View document</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <img
                    src={graduationProjectData.cmsSystem.image}
                    alt="Prototype"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        <h1
          className="text-2xl text-dark-heading  text-4xl   font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {graduationProjectData.ideatePhaseHeading}
        </h1>

        <div className="container mx-auto max-width pt-6 pb-16">
          <div>
            <p
              className="text-base text-dark-heading    "
              dangerouslySetInnerHTML={{
                __html: graduationProjectData.ideatePhaseIntroText,
              }}
            ></p>
            <br />
            <br />
          </div>
          <div>
            <section id="Story-Board">
              <div className="flex flex-row  gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-base text-dark-heading    font-bold">
                    {graduationProjectData.storyBoard.question}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.storyBoard.subHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.storyBoard.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.storyBoard.subheadingWhy}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.storyBoard.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.storyBoard.subHeadingHow}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.storyBoard.how}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.storyBoard.resultHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.storyBoard.results}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.storyBoard.conclusionHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.storyBoard.conclusion}
                    </p>
                    <br />
                  </div>
                </div>
                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <div className="flex flex-col">
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={graduationProjectData.storyBoard.image1}
                        alt="Prototype"
                        style={{ height: "200px", margin: "5px" }}
                      />
                      <img
                        src={graduationProjectData.storyBoard.image2}
                        alt="Prototype"
                        style={{ height: "200px", margin: "5px" }}
                      />
                      <img
                        src={graduationProjectData.storyBoard.image3}
                        alt="Prototype"
                        style={{ height: "200px", margin: "5px" }}
                      />
                      <img
                        src={graduationProjectData.storyBoard.image4}
                        alt="Prototype"
                        style={{ height: "200px", margin: "5px" }}
                      />
                      <img
                        src={graduationProjectData.storyBoard.image5}
                        alt="Prototype"
                        style={{ height: "200px", margin: "5px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <section id="Moscow-Analysis">
              <div className="flex flex-row-reverse  gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-base text-dark-heading    font-bold">
                    {graduationProjectData.moscowAnalysis.question}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.moscowAnalysis.subHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.moscowAnalysis.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.moscowAnalysis.subheadingWhy}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.moscowAnalysis.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.moscowAnalysis.subHeadingHow}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.moscowAnalysis.how}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.moscowAnalysis.resultHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.moscowAnalysis.results}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.moscowAnalysis.conclusionHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.moscowAnalysis.conclusion}
                    </p>
                    <br />
                    <div>
                      <a
                        href={MoscowAnalysis}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          className="bg-gradient"
                          style={{
                            fontSize: "16px",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                          }}
                        >
                          <p className="font-bold"> View document</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <div className="flex flex-col">
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <img
                        src={graduationProjectData.moscowAnalysis.image}
                        alt="Prototype"
                      />
                    </div>
                    <div
                      style={{
                        flex: "1",
                        alignItems: "center",
                        marginTop: "50px",
                      }}
                    >
                      <IframeComponent
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2FlCrFyenA1nUOturkK9Nmzj%2FMoSCoW%3Fnode-id%3D0-1%26t%3DPqc1bDHwjujCAK59-1"
                        title="Example"
                        width="100%"
                        height="400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <h1
          className="text-2xl text-dark-heading  text-4xl   font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {graduationProjectData.prototypePhaseHeading}
        </h1>

        <div className="container mx-auto max-width pt-6 pb-16">
          <div>
            <p
              className="text-base text-dark-heading    "
              dangerouslySetInnerHTML={{
                __html: graduationProjectData.prototypePhaseIntroText,
              }}
            ></p>
            <br />
            <br />
          </div>
          <div>
            <section id="Technical-Prototype">
              <div className="flex flex-row-reverse  gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-base text-dark-heading    font-bold">
                    {graduationProjectData.technicalPrototype.question}
                  </p>
                  <br />
                  <div className="flex flex-row gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.technicalPrototype.subHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.technicalPrototype.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.technicalPrototype.subheadingWhy}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.technicalPrototype.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.technicalPrototype.subHeadingHow}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.technicalPrototype.how}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.technicalPrototype.resultHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.technicalPrototype.results}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {
                        graduationProjectData.technicalPrototype
                          .conclusionHeading
                      }
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.technicalPrototype.conclusion}
                    </p>
                    <br />
                    <div>
                      <a
                        href={TechnicalPrototype}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          className="bg-gradient"
                          style={{
                            fontSize: "16px",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                          }}
                        >
                          <p className="font-bold"> View document</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "50%",
                    flex: "1",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      margin: "20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    This is just the technical prototype demo, not the final
                    product demo.
                  </p>
                  <iframe
                    width="430"
                    height="315"
                    src="https://www.youtube.com/embed/2tqU9AvLaWE?si=8oj62afCZAQeRzgw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </section>
          </div>
        </div>

        <h1
          className="text-2xl text-dark-heading  text-4xl   font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {graduationProjectData.implementationPhase}
        </h1>

        <div className="container mx-auto max-width pt-6 pb-16">
          <div>
            <p
              className="text-base text-dark-heading    "
              dangerouslySetInnerHTML={{
                __html: graduationProjectData.implementationPhaseIntroText,
              }}
            ></p>
            <br />
            <br />
          </div>
          <div>
            <section id="Technical-Implementation">
              <div className="flex flex-row  gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-base text-dark-heading    font-bold">
                    {graduationProjectData.technicalImplementation.question}
                  </p>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.technicalImplementation.subHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.technicalImplementation.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {
                        graduationProjectData.technicalImplementation
                          .subheadingWhy
                      }
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.technicalImplementation.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {
                        graduationProjectData.technicalImplementation
                          .subHeadingHow
                      }
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.technicalImplementation.how}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {
                        graduationProjectData.technicalImplementation
                          .resultHeading
                      }
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.technicalImplementation.results}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {
                        graduationProjectData.technicalImplementation
                          .conclusionHeading
                      }
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.technicalImplementation.conclusion}
                    </p>
                    <br />
                    <div>
                      <a
                        href={TechnicalImplementation}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          className="bg-gradient"
                          style={{
                            fontSize: "16px",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                          }}
                        >
                          <p className="font-bold"> View document</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Fe9s9VL6aWc?si=YOYzMoJ2q_C1MIVQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </section>
          </div>
        </div>
        <h1
          className="text-2xl text-dark-heading  text-4xl   font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {graduationProjectData.testPhase}
        </h1>
        <div className="container mx-auto max-width pt-6 pb-16">
          <div>
            <section id="Test">
              <div className="flex flex-row  gap-5 items-center">
                <div style={{ flex: "1" }}>
                  <p className="text-base text-dark-heading    font-bold">
                    {graduationProjectData.test.question}
                  </p>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.test.subHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.test.methods}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.test.subheadingWhy}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.test.why}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.test.subHeadingHow}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.test.how}
                    </p>
                  </div>
                  <br />
                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.test.resultHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.test.results}
                    </p>
                  </div>
                  <br />

                  <div className="flex flex-col gap-2">
                    <p className="text-base text-dark-heading    font-bold">
                      {graduationProjectData.test.conclusionHeading}
                    </p>
                    <p className="text-base text-dark-heading   ">
                      {graduationProjectData.test.conclusion}
                    </p>
                    <br />
                    <div>
                      <a
                        href={TestDocument}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button
                          className="bg-gradient"
                          style={{
                            fontSize: "16px",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                          }}
                        >
                          <p className="font-bold"> View document</p>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ width: "50%", flex: "1", alignItems: "center" }}>
                  <div className="flex flex-col gap-7">
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <img
                        src={graduationProjectData.test.image}
                        alt="Prototype"
                      />
                    </div>
                    <div style={{ flex: "1", alignItems: "center" }}>
                      <img
                        src={graduationProjectData.test.image1}
                        alt="Prototype"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <h1
          className="text-2xl text-dark-heading  text-4xl   font-bold mt-16 mb-16 bg-gradient "
          style={{
            padding: "4rem",
            width: "100%",
            textAlign: "center",
          }}
        >
          {graduationProjectData.reflection}
        </h1>
        <div className="container mx-auto max-width pt-6 pb-16">
          <div>
            <section id="Test">
              <br />
              <p
                className="text-base text-dark-heading    "
                dangerouslySetInnerHTML={{
                  __html: graduationProjectData.projectplanText,
                }}
              ></p>
              <br />
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GraduationProject;
