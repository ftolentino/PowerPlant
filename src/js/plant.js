// const plant = () => {
//   // This function stores our state.
//   const storeState = () => {
//     let currentState = {};
//     return (stateChangeFunction = state => state) => {
//       const newState = stateChangeFunction(currentState);
//       currentState = {...newState};
//       return newState;
//     }
//   }
  

  
//   // This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.
  
//   const changeState = (prop) => {
//     return (value) => {
//       return (state) => ({
//         ...state,
//         [prop] : (state[prop] || 0) + value
//       })
//     }
//   }
// }

// export default plant;