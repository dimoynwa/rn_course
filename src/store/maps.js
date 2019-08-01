import {addPlace, deletePlace} from './actions/places';

export const mapStateToProps = (state) => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: (key) => dispatch(deletePlace(key)),
    };
}