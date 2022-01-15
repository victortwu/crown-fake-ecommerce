import { call, put, takeLatest } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'

import ShopActionTypes from './shop.types'

// generator functions

export function* fetchCollectionsAsync() {
    
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()  
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch(err) {
        yield put(fetchCollectionsFailure(err.message))
    }
    
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}