
export const selectedConversation = (state: any = null, {type, payload}) => {

  // DEBUG
  console.log('selected conversation reducer hit! type: ');
  console.log(type);
  console.log('payload: ');
  console.log(payload);
  console.log('state: ');
  console.log(state);

  switch (type) {

    // When an `event` from our store is dispatched with an action
    // type of `SELECT_CONVERSATION`, it will hit this switch case
    case 'SELECT_CONVERSATION':
      return payload;

    default:
      return state;
  }
};
