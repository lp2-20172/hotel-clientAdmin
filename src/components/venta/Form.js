import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { save, getById, update } from '../../actions/venta-action'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            direccion: props.data ? props.data.direccion : '',
            numDoc: props.data ? props.data.numDoc : '',
            igv: props.data ? props.data.igv : '',
            serie: props.data ? props.data.serie : '',
            numero_reservacion: props.data ? props.data.numero_reservacion : '',
            vendedor: props.data ? props.data.vendedor : '',
            cliente: props.data ? props.data.cliente : '',
            doc_type: props.data ? props.data.doc_type : '',
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
                    direccion: data.direccion,
                    numDoc: data.numDoc,
                    igv: data.igv,
                    serie: data.serie,
                    numero_reservacion: data.numero_reservacion,
                    vendedor: data.vendedor,
                    cliente: data.cliente,
                    doc_type: data.doc_type,
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
                r.push('/catalogo/ventas/list')
            }, error => {
                throw (error)
            })
        } else {
            this.props.save(this.state, this.props.history).then(r => {
                r.push('/catalogo/ventas/list')
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
                    <label>Direccion:
            <input type="text"
                            value={this.state.direccion}
                            onChange={this.handleInputChange}
                            name="direccion" />
                    </label><br />
                    <label>Nro Documento:
            <input type="text"
                            value={this.state.numDoc}
                            onChange={this.handleInputChange}
                            name="numDoc" />
                    </label><br />
                    <label>IGV:
            <input type="text"
                            value={this.state.igv}
                            onChange={this.handleInputChange}
                            name="igv" />
                    </label><br />
                    <label>Serie:
            <input type="text"
                            value={this.state.serie}
                            onChange={this.handleInputChange}
                            name="serie" />
                    </label><br />
                    <label>Nro de Reservacion:
            <input type="text"
                            value={this.state.numero_reservacion}
                            onChange={this.handleInputChange}
                            name="numero_reservacion" />
                    </label><br />
                    <label>Vendedor:
            <input type="text"
                            value={this.state.vendedor}
                            onChange={this.handleInputChange}
                            name="vendedor" />
                    </label><br />
                    <label>Cliente:
            <input type="text"
                            value={this.state.cliente}
                            onChange={this.handleInputChange}
                            name="cliente" />
                    </label><br />
                    <label>Tipo de Documento:
            <input type="text"
                            value={this.state.doc_type}
                            onChange={this.handleInputChange}
                            name="doc_type" />
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
            data: state.venta.list.find(item => item.id + '' === props.match.params.id + '')
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
