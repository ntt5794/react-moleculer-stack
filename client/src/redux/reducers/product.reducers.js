const defaultState = {
    list: {
        loading: true,
        data: {
            rows: [],
            page: 1,
            pageSize: 10,
            total: 0
        }
    },
    item: {
        loading: true,
        data: null
    }
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case 'FETCH_PRODUCT':
            return {
                ...state, item: {
                    loading: true,
                    data: state.item.data
                }
            };
        case 'FETCH_PRODUCT_SUCCESS':
            return {
                ...state, item: {
                    loading: false,
                    data: action.payload.data
                }
            };
        case 'FETCH_PRODUCT_FAILED':
            return {
                ...state, item: {
                    loading: false,
                    data: state.item.data
                }
            };
        case 'FETCH_PRODUCTS':
            return {
                ...state, list: {
                    loading: true,
                    data: state.list.data
                }
            };
        case 'FETCH_PRODUCTS_SUCCESS': {
            return {
                ...state, list: {
                    loading: false,
                    data: action.payload.data
                }
            };
        }
        case 'FETCH_PRODUCTS_FAILED':
            return {
                ...state, list: {
                    loading: false,
                    data: state.list.data
                }
            };

        case 'CREATE_PRODUCT':
            return {
                ...state, item: {
                    loading: true,
                    data: state.item.data
                }
            };
        case 'CREATE_PRODUCT_SUCCESS':
            return {
                ...state, item: {
                    loading: false,
                    data: action.payload.data
                }
            };
        case 'CREATE_PRODUCT_FAILED':
            return {
                ...state, item: {
                    loading: false,
                    data: state.item.data
                }
            };

        case 'EDIT_PRODUCT':
            return {
                ...state, item: {
                    loading: true,
                    data: state.item.data
                }
            };
        case 'EDIT_PRODUCT_SUCCESS':
            return {
                ...state, item: {
                    loading: false,
                    data: action.payload.data
                }
            };
        case 'EDIT_PRODUCT_FAILED':
            return {
                ...state, item: {
                    loading: false,
                    data: state.item.data
                }
            };


        default:
            return state
    }
}