import React from 'react'

class UsuarioDetail extends React.Component {

  render() {
    //let picture = this.props.picture;

    return(
      <div className="media-body">
        <h4>{this.props.name}</h4>
        <p>
          {this.props.title} &nbsp;
          <span className="label label-info">{this.props.department}</span>
        </p>
      </div>
    )
  }
}

export default UsuarioDetail