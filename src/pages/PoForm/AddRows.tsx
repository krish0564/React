import React from "react";
import { Form, Button, Row, Col, Container, InputGroup } from "react-bootstrap";

type Props = {};

const AddRows = ({ add, inputList, deleted, setInputList }: any) => {
  const { taskList } = inputList;

  return taskList.map((val: any, idx: any) => {
    let po_description = `po_description-${idx}`,
      amount = `amount-${idx}`;
    return (
      <InputGroup className="mb-3" key={val.index}>
        <InputGroup.Text>Product-${idx + 1}</InputGroup.Text>
        <Form.Control
          aria-label="Enter Product name"
          name="product"
          data-id={idx}
          value={val.po_description}
          id={po_description}
          onChange={(e) => {
            val.po_description = e.target.value;
            setInputList({ ...inputList });
          }}
        />
        <InputGroup.Text>Amount</InputGroup.Text>
        <Form.Control
          type="number"
          aria-label="Enter Amount"
          name="amount"
          data-id={idx}
          id={amount}
          value={val.amount}
          onChange={(e) => {
            val.amount = e.target.value;
            setInputList({ ...inputList });
          }}
        />
        <InputGroup.Text>
          {idx === 0 ? (
            <button
              onClick={() => add()}
              type="button"
              className="btn btn-primary text-center"
            >
              <i className="fa fa-plus-circle" aria-hidden="true">
                +
              </i>
            </button>
          ) : (
            <button
              onClick={(e) => deleted(idx)}
              type="button"
              className="btn btn-danger"
            >
              <i className="fa fa-minus" aria-hidden="true">
                -
              </i>
            </button>
          )}
        </InputGroup.Text>
      </InputGroup>
    );
  });
};

export default AddRows;
//
