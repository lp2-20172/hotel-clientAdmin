import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { save, getById, update } from '../../actions/pago-action'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            forma_pago: props.data ? props.data.forma_pago : '',
            tipo_moneda: props.data ? props.data.tipo_moneda : '',
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
                    forma_pago: data.forma_pago,
                    tipo_moneda: data.tipo_moneda,
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
                r.push('/catalogo/pagos/list')
            }, error => {
                throw (error)
            })
        } else {
            this.props.save(this.state, this.props.history).then(r => {
                r.push('/catalogo/pagos/list')
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
                    <label>Forma de Pago:
            <input type="text"
                            value={this.state.forma_pago}
                            onChange={this.handleInputChange}
                            name="forma_pago" />
                    </label><br />
                    <label>Tipo de Moneda:
            <input type="text"
                            value={this.state.tipo_moneda}
                            onChange={this.handleInputChange}
                            name="tipo_moneda" />
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
            data: state.area.list.find(item => item.id + '' === props.match.params.id + '')
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
