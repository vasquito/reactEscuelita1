import React from 'react'

class UsuarioAvatar extends React.Component {
  render() {
    //let picture = this.props.picture;

    return (
      <figure className="media-left">
        <img className="media-object" width="64px" 
            src={`/public/images/empleados/${this.props.picture}`} />
      </figure>
    )
  }
}

export default UsuarioAvatar