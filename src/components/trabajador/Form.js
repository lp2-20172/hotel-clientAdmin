import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux'
import { save, getById, update } from '../../actions/trabajador-action'
import { getList as getPersonList } from '../../actions/person-action'
import { getList as getAreaList } from '../../actions/area-action'

import moment from 'moment';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.data ? props.data.id : null,
            cargo: props.data ? props.data.cargo : '',
            fecha_inicio: props.data ? props.data.fecha_inicio : '',
            fecha_fin: props.data ? props.data.fecha_fin : '',
            f: props.data ? moment(props.data.fecha_inicio, 'YYYY-MM-DD hh:mm A') : moment().format('YYYY-MM-DD hh:mm A'),
            informacion_adicional: props.data ? props.data.informacion_adicional : '',
            area: props.data ? props.data.area : false,
            person: props.data ? props.data.person : false,
        }/*
        this.state = {
            id:  null,
            codigo:'',
            nombre: ''
        }*/
    }
    componentWillMount = () => {
        this.props.getPersonList("")
        this.props.getAreaList("")
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id) {
            this.props.getById(id).then(data => {
                this.setState({
                    id: data.id,
                    cargo: data.cargo,
                    fecha_inicio: data.fecha_inicio,
                    fecha_fin: data.fecha_fin,
                    f: moment(data.fecha_inicio, 'YYYY-MM-DD hh:mm A'),
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
        let { person_list, area_list } = this.props
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Cargo:
            <input type="text"
                            value={this.state.cargo}
                            onChange={this.handleInputChange}
                            name="cargo" />
                    </label><br />
                    <label>Fecha Inicio:
            <input type="date" dateTime={this.state.fecha_fin}
                            format="YYYY-MM-DD hh:mm A"
                            name="f"
                            inputFormat="YYYY-MM-DD hh:mm A"
                            onChange={this.handleChangedate}
                             />
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
                    <div>Area </div>
                    <Input type="select"
                        value={this.state.area}
                        name="area"
                        required="required"
                        onChange={this.handleInputChange}z
                    >

                        {area_list.map((a, index) =>
                            <option key={index}
                                value={a.id}>{a.area}</option>
                        )}
                    </Input>
                    <div>Cliente</div>
                    <Input type="select"
                        value={this.state.person}
                        name="person"
                        required="required"
                        onChange={this.handleInputChange}z
                    >

                        {person_list.map((d, index) =>
                            <option key={index}
                                value={d.id}>{d.nombre} {d.apellido_paterno} {d.apellido_materno}</option>
                        )}
                    </Input>
                    <input type="submit" value="Submit"/>
                </form>

            </div>
        )
    }
}
Form.propTypes = {
    data: PropTypes.object,
    person_list: PropTypes.array,
    area_list: PropTypes.array,
}

const mapStateToProps = (state, props) => {
    if (props.match.params.id) {
        return {
            data: state.trabajador.list.find(item => item.id + '' === props.match.params.id + ''),
            person_list: state.person.list,
            area_list: state.area.list,
        }
    }
    return {
        data: null,
        person_list: state.person.list,
        area_list: state.area.list,
    }

}
export default connect(mapStateToProps, {
    save,
    getById,
    update,
    getPersonList,
    getAreaList,
})(Form)
