import { createSelector } from "reselect"
import memoize from 'lodash.memoize'

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => 
        collections ? Object.keys(collections).map(key => collections[key]) : [] // <-- make into array
)

// By wrapping this function is memoize, we're saying that whenever this function gets called and receives collectionUrlParam, I want to memoize the return of this function (in this case we return a selector). If this function gets called again with the same collectionUrlParam, don't rerun this function because we'll return the same value as last time, which we've memoized so just return the selector that's been stored.
export const selectCollection = memoize(collectionUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null // <-- refactored from array of data to an object, "data normalization"
        )
    )