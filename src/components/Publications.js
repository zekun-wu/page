import React, { Component }  from 'react';

class Publications extends Component {
  render() {
    if (this.props.resumePublications && this.props.resumeBasicInfo) {
      console.log(this.props)
      const { publications } = this.props.resumePublications;
      return (
        <div>
          {publications.map(publication => (
            <div>
              <h1>{publication.title}</h1>
              <h3>{publication.authors}</h3>
            </div>
          ))}
        </div>
      );
    }
    return(
      <div></div>
    )
  }
}

export default Publications;
