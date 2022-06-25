const INITIAL_STATE = {
  images: [],
}
export default function images(INITIAL_STATE = [], action) {
  console.log('action-----', action);
  switch (action.type) {
    case 'SET_IMAGES':
      return {
        images: [...action.data]
      }
    default:
      return INITIAL_STATE
  }
}