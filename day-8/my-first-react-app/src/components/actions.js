const increment = someParam => ({
  type: "INCREMENT",
  payload: {
    someParam
  }
});

const decrement = {
  type: "DECREMENT"
};

const addNote = note => ({
  type: "ADD_NOTE",
  note: note
});

export { addNote, increment, decrement };
