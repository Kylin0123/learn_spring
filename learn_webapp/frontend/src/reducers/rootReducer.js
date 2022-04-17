const rootState = {}

export const updateState = {
    type: "updateState",
    data: {}
}

const RootReducer = (state = rootState, action) => {
    switch(action.type) {
        case 'updateState':
            return rootState = state
    }
}

export default RootReducer;