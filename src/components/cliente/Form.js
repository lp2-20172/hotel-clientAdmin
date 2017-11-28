import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { save, getById, update } from '../../actions/cliente-action'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            nombre: props.data ? props.data.nombre : '',
            apellido_paterno: props.data ? props.data.apellido_paterno : '',
            apellido_materno: props.data ? props.data.apellido_materno : '',
            direccion: props.data ? props.data.direccion : '',
            edad: props.data ? props.data.edad : '',
            dni: props.data ? props.data.dni : '',
            email: props.data ? props.data.email : ''
        }/*
        this.state = {
            id:  null,
            codigo:'',
            nombre: ''
        }*/
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    nombre: data.nombre,
                    apellido_paterno: data.apellido_paterno,
                    apellido_materno: data.apellido_materno,
                    direccion: data.direccion,
                    edad: data.edad,
                    dni: data.dni,
                    email: data.email,
                });
            });
        }

    }
    handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })

    }
    handleSubmit = event => {
        event.preventDefault()
        console.log('d=' + JSON.stringify(this.state))

        const { id } = this.props.match.params
        if (id) {
            this.props.update(this.state, this.props.history).then(r => {
                r.push('/catalogo/clientes/list')
            }, error => {
                throw (error)
            })
        } else {
            this.props.save(this.state, this.props.history).then(r => {
                r.push('/catalogo/clientes/list')
            }, error => {
                throw (error)
            })
        }
    }

    render() {
        //console.log(JSON.stringify(this.props))
        //const { list } = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Nombre:
            <input type="text"
                            value={this.state.nombre}
                            onChange={this.handleInputChange}
                            name="nombre" />
                    </label><br />
                    <label>Apellido Paterno:
            <input type="text"
                            value={this.state.apellido_paterno}
                            onChange={this.handleInputChange}
                            name="apellido_paterno" />
                    </label><br />
                    <label>Apellido Materno:
            <input type="text"
                            value={this.state.apellido_materno}
                            onChange={this.handleInputChange}
                            name="apellido_materno" />
                    </label><br />
                    <label>Direccion:
            <input type="text"
                            value={this.state.direccion}
                            onChange={this.handleInputChange}
                            name="direccion" />
                    </label><br />
                    <label>Edad:
            <input type="text"
                            value={this.state.edad}
                            onChange={this.handleInputChange}
                            name="edad" />
                    </label><br />
                    <label>DNI:
            <input type="text" maxLength='8'
                            value={this.state.dni}
                            onChange={this.handleInputChange}
                            name="dni" />
                    </label><br />
                    <label>Email:
            <input type="text"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email" />
                    </label><br />
                    <input type="submit" value="Enviar"/>
                </form>

            </div>
        )
    }
}
Form.propTypes = {
    data: PropTypes.object
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.cliente.list.find(item => item.id + '' === props.match.params.id + '')
        }
    }
    return {
        data: null
    }

}
export default connect(mapStateToProps, {
    save,
    getById,
    update
})(Form)
