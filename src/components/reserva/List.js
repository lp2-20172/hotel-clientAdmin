import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import { connect } from 'react-redux'
import { getList, del } from '../../actions/reserva-action'

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import {
    Link
} from 'react-router-dom'


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            q: "",
        }
    }

    componentWillMount() {
        this.props.getList(this.state.q)
    }
    change = (e) => {
        const q = e.target.value
        console.log("q:" + q)
        this.props.getList(q)
    }
    handleClick = () => {
        this.props.history.push('/catalogo/reservas/new');
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })
        this.props.getList(this.state.q)
    }

    render() {

        let { list, del } = this.props
        if (list === null) {
            list = []
        }
        return (
            <Card>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            R
                      </Avatar>
                    }
                    title="User List"
                    subheader="Users list"
                />

                <CardContent>
                    <Typography component="p">
                        q={this.props.q}
                    </Typography>

                    <TextField
                        id="search"
                        label="Search"
                        value={this.props.q}
                        onChange={this.change}
                        margin="normal"
                    />

                    <Button fab color="primary" aria-label="add" onClick={this.handleClick}>
                        <AddIcon />
                    </Button>

                    <Paper style={{
                        overflowX: 'auto',
                    }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell >Costo</TableCell>
                                    <TableCell >Tipo Reserva</TableCell>
                                    <TableCell >Fecha Ingresa</TableCell>
                                    <TableCell >Fecha Salida</TableCell>
                                    <TableCell >Cliente</TableCell>
                                    <TableCell >Edit</TableCell>
                                    <TableCell >Delete</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {list.map((d, index) =>
                                    <TableRow key={index}>
                                        <TableCell numeric>{index + 1}</TableCell>
                                        <TableCell >{d.costo_alojamiento}</TableCell>
                                        <TableCell >{d.tipo_reserva}</TableCell>
                                        <TableCell >{d.fecha_ingresa}</TableCell>
                                        <TableCell >{d.fecha_salida}</TableCell>
                                        <TableCell >{d.nombre_cliente}</TableCell>
                                        <TableCell >
                                            <Link to={`/catalogo/reservas/edit/${d.id}`}>Edit</Link>
                                        </TableCell>
                                        <TableCell >
                                            <Button onClick={() => del(d.id)} > X </Button>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </Paper>
                </CardContent>

            </Card>

        )
    }
}
List.propTypes = {
    list: PropTypes.array
}
const mapStateToProps = (state) => {
    return { list: state.reserva.list }
}
export default connect(mapStateToProps, {
    getList,
    del
})(List)
