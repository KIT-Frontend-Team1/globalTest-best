// 재료 추가, 삭제 로직 짜기
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";

// 추가, 삭제 기능 reducer
const ingredientReducer = (state, action) => {
  switch (action.type) {
    case ADD_INGREDIENT: {
      return [...state, action.payload];
    }
    case DELETE_INGREDIENT: {
      return state.filter((item) => item.id !== action.payload);
    }
    default: {
      return state;
    }
  }
};
export default ingredientReducer;
