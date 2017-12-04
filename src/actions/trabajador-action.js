import client from './'

const url = "/api-hotel/trabajadores/"
export const TRABAJADOR_LIST = "TRABAJADOR_LIST"
export const trabajadorList = (list) => (
    {
        type: TRABAJADOR_LIST,
        list
    }
)

export const TRABAJADOR_LIST_FAILURE = 'TRABAJADOR_LIST_FAILURE'
export const trabajadorListFailure = error => ({
    type: TRABAJADOR_LIST_FAILURE,
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
            dispatch(trabajadorList(r.data))
        }).catch(error => {
            //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(trabajadorListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(trabajadorListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(trabajadorListFailure('Error ' + error.message))
            }
            //console.log(error.config);

        })
    }
}


export const TRABAJADOR_ADD = "TRABAJADOR_ADD"
export const trabajadorAdd = () => (
    {
        type: TRABAJADOR_ADD,
    }
)
export const save = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.post(url, d).then(r => {
                    dispatch(trabajadorAdd())
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
export const TRABAJADOR_UPDATE = "TRABAJADOR_UPDATE"
export const trabajadorUpdate = () => (
    {
        type: TRABAJADOR_UPDATE,
    }
)
export const update = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.put(`${url}${d.id}/`, d).then(r => {
                    dispatch(trabajadorUpdate())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const TRABAJADOR_DELETE = "TRABAJADOR_DELETE"
export const trabajadorDelete = (data) => (
    {
        type: TRABAJADOR_DELETE,
        data
    }
)

export const del = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.delete(`${url}${id}`).then(r => {
                    dispatch(trabajadorDelete(id))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}