
// ```
// recipes.reducer.js
// (c) 2016 David Newman
// blackshuriken@hotmail.com
// recipes.reducer.js may be freely distributed under the MIT license
// ```

// ** Import our `recipe` store
import { Conversation } from './conversation.store';

// # Redux reducer for `recipes`

// A traditional `reducer` is a function which takes a `state`
// object and an action to perform.

// `ngrx` reducers work differently:
//   * the second parameter is an object with the type of
//     action to perform and the payload for that action

// The `recipes` reducer performs actions on our list of `recipes`
// Notice that we set `state` to a default value to initialize
// smoothly
export const conversations = (state: any = [], {type, payload}) => {

  // DEBUG
  console.log('Conversations reducer hit! type: ');
  console.log(type);
  console.log('payload: ');
  console.log(payload);
  console.log('state: ');
  console.log(state);

  switch (type) {

    // `ADD_RECIPES` returns whatever collection passed in as a
    // new array
    case 'ADD_CONVERSATIONS':
      return payload;

    // `CREATE_RECIPE` returns a new array by concatenating the
    // existing recipe array with our new recipe
    case 'CREATE_CONVERSATION':
      return [...state, payload];

    // `UPDATE_RECIPE` returns a new array by mapping to the current
    // array, locating the recipe to update and cloning to create
    // a new object using `Object.assign`
    case 'UPDATE_CONVERSATION':
      return state.map(conversation => {

        return conversation._id === payload._id
          ? Object.assign({}, conversation, payload) : conversation;
      });

    // `DELETE_RECIPE` returns a new array by filtering out the
    // `recipe` that we want to delete
    case 'DELETE_CONVERSATION':

      return state.filter(conversation => {

        return conversation._id !== payload._id;
      });

    default:
      return state;
  }
};
