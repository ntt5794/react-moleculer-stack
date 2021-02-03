import { call, put, takeEvery } from 'redux-saga/effects';
import { getProducts, getProduct, createProduct, updateProduct } from '../../services/api.service';

export default function* () {
    yield takeEvery('FETCH_PRODUCTS', listProducts);
    yield takeEvery('FETCH_PRODUCT', fetchProduct);
    yield takeEvery('CREATE_PRODUCT', createProducts);
    yield takeEvery('UPDATE_PRODUCT', updateProducts);
}
function* fetchProduct(action) {
    const payload = action.payload;
    const data = yield call(getProduct, payload);
    if (data) {
        yield put({ type: 'FETCH_PRODUCT_SUCCESS', payload: { data } });
    } else {
        yield put({ type: 'FETCH_PRODUCT_FAILED' });
    }
}
function* listProducts(action) {
    const payload = action.payload;
    const data = yield call(getProducts, payload);
    if (data) {
        yield put({ type: 'FETCH_PRODUCTS_SUCCESS', payload: { data } });
    } else {
        yield put({ type: 'FETCH_PRODUCTS_FAILED' });
    }
}

function* createProducts(action) {
    const payload = action.payload;
    const data = yield call(createProduct, payload);
    if (data) {
        yield put({ type: 'CREATE_PRODUCT_SUCCESS', payload: { data } });
    } else {
        yield put({ type: 'CREATE_PRODUCT_FAILED' });
    }
}

function* updateProducts(action) {
    const payload = action.payload;
    const data = yield call(updateProduct, payload);
    if (data) {
        yield put({ type: 'CREATE_PRODUCT_SUCCESS', payload: { data } });
    } else {
        yield put({ type: 'CREATE_PRODUCT_FAILED' });
    }

}