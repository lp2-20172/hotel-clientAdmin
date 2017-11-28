import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { save, getById, update } from '../../actions/trabajador-action'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            cargo: props.data ? props.data.cargo : '',
            estado: props.data ? props.data.estado : '',
            fecha_inicio: props.data ? props.data.fecha_inicio : '',
            fecha_fin: props.data ? props.data.fecha_fin : '',
            informacion_adicional: props.data ? props.data.informacion_adicional : '',
            area: props.data ? props.data.area : '',
            person: props.data ? props.data.person : '',
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
                    cargo: data.cargo,
                    estado: data.estado,
                    fecha_inicio: data.fecha_inicio,
                    fecha_fin: data.fecha_fin,
                    informacion_adicional: data.informacion_adicional,
                    area: data.area,
                    person: data.person,
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
                r.push('/catalogo/trabajadores/list')
            }, error => {
                throw (error)
            })
        } else {
            this.props.save(this.state, this.props.history).then(r => {
                r.push('/catalogo/trabajadores/list')
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
                    <label>Cargo:
            <input type="text"
                            value={this.state.cargo}
                            onChange={this.handleInputChange}
                            name="cargo" />
                    </label><br />
                    <label>Estado:
            <input type="checkbox"
                            value={this.state.estado}
                            onChange={this.handleInputChange}
                            name="estado" />
                    </label><br />
                    <label>Fecha Inicio:
            <input type="date"
                            value={this.state.fecha_inicio}
                            onChange={this.handleInputChange}
                            name="fecha_inicio" />
                    </label><br />
                    <label>Fecha Fin:
            <input type="date"
                            value={this.state.fecha_fin}
                            onChange={this.handleInputChange}
                            name="fecha_fin" />
                    </label><br />
                    <label>Informacion Adicional:
            <input type="text"
                            value={this.state.informacion_adicional}
                            onChange={this.handleInputChange}
                            name="informacion_adicional" />
                    </label><br />
                    <label>Area:
            <input type="text"
                            value={this.state.area}
                            onChange={this.handleInputChange}
                            name="area" />
                    </label><br />
                    <label>Persona:
            <input type="text"
                            value={this.state.person}
                            onChange={this.handleInputChange}
                            name="person" />
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
            data: state.trabajador.list.find(item => item.id + '' === props.match.params.id + '')
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
