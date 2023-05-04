import PropTypes from 'prop-types'
import { User } from '../../models/user'

function ComponenteB({ user }) {
  return (
    <div>
            <h2>
                Nombre: { user.nombre }
            </h2>
            <h3>
                Apellido: { user.apellido }
            </h3>
            <h3>
                Emil: { user.email }
            </h3>
            <h5>
                Usuario conectado: { user.conectado ? "Contacto en linea" : "Contacto no disponible" }
            </h5>
        </div>
  )
}

ComponenteB.propTypes = {
  user: PropTypes.instanceOf(User)
}

export default ComponenteB
