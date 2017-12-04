import client from './'

const url = "/api-hotel/pagos/"
export const PAGO_LIST = "PAGO_LIST"
export const pagoList = (list) => (
    {
        type: PAGO_LIST,
        list
    }
)

export const PAGO_LIST_FAILURE = 'PAGO_LIST_FAILURE'
export const pagoListFailure = error => ({
    type: PAGO_LIST_FAILURE,
    error
})

export const getList = (q = '') => {
    let params = {
        params: {
            query: q
        }
    }
    return (dispatch) => {
        client.get(url, params).then(r => {
            dispatch(pagoList(r.data))
        }).catch(error => {
            //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(pagoListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(pagoListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(pagoListFailure('Error ' + error.message))
            }
            //console.log(error.config);

        })
    }
}


export const PAGO_ADD = "PAGO_ADD"
export const pagoAdd = () => (
    {
        type: PAGO_ADD,
    }
)
export const save = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.post(url, d).then(r => {
                    dispatch(pagoAdd())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}


export const getById = (id) => {
    return (dispatch) => {
        return client.get(`${url}${id}`).then(r => {
            return r.data
        })
    }
}
export const PAGO_UPDATE = "PAGO_UPDATE"
export const pagoUpdate = () => (
    {
        type: PAGO_UPDATE,
    }
)
export const update = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.put(`${url}${d.id}/`, d).then(r => {
                    dispatch(pagoUpdate())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const PAGO_DELETE = "PAGO_DELETE"
export const pagoDelete = (data) => (
    {
        type: PAGO_DELETE,
        data
    }
)

export const del = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.delete(`${url}${id}`).then(r => {
                    dispatch(pagoDelete(id))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}