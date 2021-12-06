import { CONSTANTS } from "../actions";
////here
export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID }
  };
};

export const deleteCard = (listId, cardId) => ({
  type: CONSTANTS.DELETE_CARD,
  payload: { listId, cardId }
})
