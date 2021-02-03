const checkError = (response) => {
    if (!response) {
        return {ok: false, msg: 'Something error :D'}
    }
    const status = response.status
    if (status >= 400 && status < 500) {
        return {ok: false, msg: 'Something error :D'}
    }
    if (status >= 500) {
        return {ok: false, msg: 'Something error :D'}
    } else {
        return {ok: false, msg: 'Something error :D'}
    }
}

const onHttpError = err => {
    return {ok: false, msg: 'Something error :D'};
}

export default {
    checkError,
    onHttpError
}