import React from "react";
import "./style.css";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="12" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-outline-dark btn-block">
      {props.children}
    </button>
  );
}

export function Form(props) {
  return (
    <>
      <form>
        {props.children}
      </form>
      <div className="mobile-view-line-breaker"></div>
    </>
  );
}
