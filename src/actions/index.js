// ACTIONS
export const addAction1 = (number) => ({
  type: "ADD1",
  number});

export const removeAction1 = (number) => ({
  type: "REMOVE1",
  number
});

export const addAction10 = () => ({
  type: "ADD10"
});

export const removeAction10 = () => ({
  type: "REMOVE10"
});
export const resetAction = () => ({
  type: "RESET"
});

// export const fetchCounter = number => {
//   return dispatch => {
//     dispatch(
//       addAction1(),
//       removeAction1(),
//       addAction10(),
//       removeAction10(),
//       resetAction()
//     );
//   };
// };
