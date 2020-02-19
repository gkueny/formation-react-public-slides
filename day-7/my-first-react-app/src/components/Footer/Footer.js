import React from "react";
import { connect } from "react-redux";
import { addNote } from "../actions";

const Footer = props => {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <div style={{ margin: "20px 0" }}>
        {/* AVEC REDUX */}
        <button onClick={() => props.addNote(1)}>1</button>
        <button onClick={() => props.addNote(2)}>2</button>
        <button onClick={() => props.addNote(3)}>3</button>
        <button onClick={() => props.addNote(4)}>4</button>
        <button onClick={() => props.addNote(5)}>5</button>
      </div>
      <div style={{ margin: "20px 0" }}>
        {/* SANS REDUX */}
        <button
          onClick={() => {
            props.addNoteWithoutRedux(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            props.addNoteWithoutRedux(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            props.addNoteWithoutRedux(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            props.addNoteWithoutRedux(4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            props.addNoteWithoutRedux(5);
          }}
        >
          5
        </button>
      </div>
    </footer>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addNote: note => dispatch(addNote(note))
  };
};

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterContainer;
