let initialState = {
  id: {
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    password: 'string',
    friends: ['userId', 'userId'],
    singleForks: ['singleEventId1', 'singleEventId2'],
    multiForks: ['multiEventId1', 'multiEventId2'],
    favorites: ['restIds'],
    os: 'iOS/Android'
  }
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ALL':
      console.log('in the reducer');
      const newState = Object.assign({}, state);
      newState.firstName = action.firstName;
      newState.lastName = action.lastName;
      // newState.email = action.email;
      // newState.password = action.password;
      // newState.friends = action.friends;
      // newState.singleForks = action.singleForks;
      // newState.multiForks = action.multiForks;
      // newState.favorites = action.favorites;
      // newState.os = action.os;
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
