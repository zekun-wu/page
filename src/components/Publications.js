import React, { Component }  from 'react';
import "./publications.css"

class Publications extends Component {
  render() {
    if (this.props.resumePublications && this.props.sharedBasicInfo) {
      var sectionName = this.props.sharedBasicInfo.section_name.publications;
      var publications = this.props.resumePublications.map(function (publication, i) {
        return (
          <tr key={i}>
            <td>
              <a href={publication.url} target="_blank" rel="noreferrer">
                {publication.title}
              </a>
              <br />
              <span className="pub-venue">{publication.authors}</span>
              <br />
              <span className="pub-venue">{publication.venue}</span>
            </td>
            <td className="pub-year">{publication.year}</td>
          </tr>
        );
      });
    }

    return(
      <section id="publications">
        <div className="col-md-12">
          <div className="row">
              <h1 className="section-title" style={{ color: "black" }}>
                <span>{sectionName}</span>
            </h1>
          </div>
          <div className="row">
          <table className="pub-table">
              <tbody>{publications}</tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}

export default Publications;
