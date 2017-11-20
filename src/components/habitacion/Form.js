import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { save, getById, update } from '../../actions/habitacion-action'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            numero: props.data ? props.data.numero : '',
            piso: props.data ? props.data.piso : '',
            precioDiario: props.data ? props.data.precioDiario : '',
            tipoHabitacion: props.data ? props.data.tipoHabitacion : '',
            caracteristicas: props.data ? props.data.caracteristicas : '',
            descripcion: props.data ? props.data.descripcion : ''
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
                    numero: data.numero,
                    piso: data.piso,
                    precioDiario: data.precioDiario,
                    tipoHabitacion: data.tipoHabitacion,
                    caracteristicas: data.caracteristicas,
                    descripcion: data.descripcion,
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
                r.push('/catalogo/habitaciones/list')
            }, error => {
                throw (error)
            })
        } else {
            this.props.save(this.state, this.props.history).then(r => {
                r.push('/catalogo/habitaciones/list')
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
                    <label>Numero:
            <input type="text"
                            value={this.state.numero}
                            onChange={this.handleInputChange}
                            name="numero" />
                    </label><br />
                    <label>Piso:
            <input type="text"
                            value={this.state.piso}
                            onChange={this.handleInputChange}
                            name="piso" />
                    </label>
                    <label>Precio Diario:
            <input type="text"
                            value={this.state.precioDiario}
                            onChange={this.handleInputChange}
                            name="precioDiario" />
                    </label><br />
                    <label>Tipo:
            <input type="text"
                            value={this.state.tipoHabitacion}
                            onChange={this.handleInputChange}
                            name="tipoHabitacion" />
                    </label><br />
                    <label>Descripcion:
            <input type="text"
                            value={this.state.descripcion}
                            onChange={this.handleInputChange}
                            name="descripcion" />
                    </label><br />
                    <input type="submit" value="Submit" />
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
            data: state.habitacion.list.find(item => item.id + '' === props.match.params.id + '')
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