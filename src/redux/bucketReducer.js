const initialState = {
  bucketList: [],
  momentsList: []
}

const UPDATE_BUCKET = 'UPDATE_BUCKET';
const UPDATE_MOMENTS = 'UPDATE_MOMENTS';

export function updateBucket(list) {
  return {
    type: UPDATE_BUCKET,
    payload: list
  }
}

export function updateMoments(list) {
  return {
    type: UPDATE_MOMENTS,
    payload: list
  }
}

export default function userReducer(state = initialState, action) {

  switch (action.type) {
    case UPDATE_BUCKET:
      return {
        ...state,
        bucketList: action.payload
      }
    case UPDATE_MOMENTS:
      return {
        ...state,
        momentsList: action.payload
      }

    default: return state;
  }

}