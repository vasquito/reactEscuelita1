import React from 'react'
import UsuarioAvatar from './usuario-avatar.jsx'
import UsuarioDetail from './usuario-detail.jsx'

class UsuarioRow extends React.Component {

  render() {
    return(
      <li className="media">
        <UsuarioAvatar picture={this.props.picture} />
        <UsuarioDetail name={this.props.name} 
                       title={this.props.title}
                       department={this.props.department}  />

        <hr/>
      </li>
    )
  }
}

export default UsuarioRow