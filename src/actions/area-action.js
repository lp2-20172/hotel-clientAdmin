import client from './'

const url = "/api-hotel/area/"
export const AREA_LIST = "AREA_LIST"
export const areaList = (list) => (
    {
        type: AREA_LIST,
        list
    }
)

export const AREA_LIST_FAILURE = 'AREA_LIST_FAILURE'
export const areaListFailure = error => ({
    type: AREA_LIST_FAILURE,
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
            dispatch(areaList(r.data))
        }).catch(error => {
            //throw (error)
            //console.log('getList catch:' + JSON.stringify(error.response))
            if (error.response) {
                dispatch(areaListFailure(error.response.data.detail))
            } else if (error.request) {
                console.log(error.request);
                dispatch(areaListFailure(JSON.stringify('Error ' + error.request)))
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                dispatch(areaListFailure('Error ' + error.message))
            }
            //console.log(error.config);

        })
    }
}


export const AREA_ADD = "AREA_ADD"
export const areaAdd = () => (
    {
        type: AREA_ADD,
    }
)
export const save = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.post(url, d).then(r => {
                    dispatch(areaAdd())
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
export const AREA_UPDATE = "AREA_UPDATE"
export const areaUpdate = () => (
    {
        type: AREA_UPDATE,
    }
)
export const update = (d, h) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.put(`${url}${d.id}/`, d).then(r => {
                    dispatch(areaUpdate())
                    resolve(h)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}

export const AREA_DELETE = "AREA_DELETE"
export const areaDelete = (data) => (
    {
        type: AREA_DELETE,
        data
    }
)

export const del = (id) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            try {
                client.delete(`${url}${id}`).then(r => {
                    dispatch(areaDelete(id))
                    resolve(r)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}