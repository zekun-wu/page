import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";
import "./projectsdetailmodel.css";

class ProjectDetailsModal extends Component {
  render() {
    if (this.props.data) {
      const technologies = this.props.data.technologies;
      var title = this.props.data.title;
      var description = this.props.data.description;
      var url = this.props.data.url;
      if (description) {
        var descriptionItems = description.map((d, i) => {
          return (
            <li className="list-inline-item mx-3" key={i}>
              <span>
                <div className="text-center">
                  <i style={{ fontSize: "300%" }}>
                    <p className="text-left" style={{ fontSize: "30%" }}>
                      {d}
                    </p>
                  </i>
                </div>
              </span>
            </li>
          );
        });
      }
    }
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-inside"
      >
        <span onClick={this.props.onHide} className="modal-close">
          <i className="fas fa-times fa-3x close-icon"></i>
        </span>
        <div className="ext-center">
          <div className="col-md-10 mx-auto">
            <h3 className="project-details-title" style={{ padding: "5px 5px 0 5px" }}>
              {/* {title} */}
              {url ? (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
            </h3>
            <div className="col-md-12 text-left"></div>
            <ul className="list-inline mx-auto no-list-style project-details-list">
              {descriptionItems}
            </ul>
          </div>
        </div>
      </Modal>
    );
  }
}

export default ProjectDetailsModal;

