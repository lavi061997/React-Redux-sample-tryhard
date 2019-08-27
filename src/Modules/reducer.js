const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_TOURNAMENTS':
            return { ...state };
        case 'TOURNAMENTS_RECEIVED':
            return { ...state, tournaments: action.json }
        default:
            return state;
    }
};

export default reducer;