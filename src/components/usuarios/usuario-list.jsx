import React from 'react'
import UsuarioRow from './usuario-row.jsx'

class UsuarioList extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <ul className="media-list">
          {
            this.props.listado.map((usuario) => {
              return <UsuarioRow key={ usuario.id }
                                  name={ usuario.fullName }
                                  picture={ usuario.pic }
                                  title={ usuario.title }
                                  department={ usuario.department } />
            })
          }
        </ul>
      </div>
    )
  }
}

export default UsuarioList