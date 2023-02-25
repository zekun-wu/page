import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Education extends Component {

  render() {

    if (this.props.resumeEducation && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.education;
      console.log(this.props)
      var edu = this.props.resumeEducation.map(function (edu, i) {
        const school = edu.school;
        const title = edu.title;
        const loc = edu.location;
        console.log(edu)

        // var tech = technologies.map((technology, i) => {
        //   return (
        //     <Badge pill className="experience-badge mr-2 mb-2" key={i}>
        //       {technology}
        //     </Badge>
        //   );
        // });
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={edu.years}
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={<i className="fab fa-angular experience-icon"></i>}
            key={i}
          >
            <div style={{ textAlign: "left", marginBottom: "4px" }}>
              <Badge pill className="main-badge mr-2 mb-2" key={i}>
                {loc}
              </Badge>
            </div>

            <h3
              className="vertical-timeline-element-title"
              style={{ textAlign: "left" }}
            >
              {edu.school}
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              style={{ textAlign: "left" }}
            >
              {edu.title}
            </h4>

            {/* <div style={{ textAlign: "left", marginTop: "15px" }}>{title}</div> */}
          </VerticalTimelineElement>
        );
      });
    }

    return (
      <section id="resume" className="pb-5">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                {sectionName}
              </span>
            </h1>
          </div>
        </div>
        <div className="col-md-8 mx-auto">
          <VerticalTimeline>
            {edu}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Education;
