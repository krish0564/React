import React, { ReactEventHandler, useState } from "react";
import { Form, Button, Row, Col, Container, InputGroup } from "react-bootstrap";
import AddRows from "./AddRows";
import axios from 'axios'

type Props = {};

const PoDetails = ({file}:any) => {
  const [inputList, setInputList] = useState({
     po_id: '',
    date: "",
    taskList: [{ index: Math.random(), po_description: "", amount: 0,po_id: '' }]
  });
 
  const handleAddRows = (e: any) => {
    const pid =inputList.po_id;
    setInputList({
      ...inputList,
      taskList: [
        ...inputList.taskList,
        { index: Math.random(), po_description: "", amount: 0,po_id:pid},
      ],
    });
  };
  const handleRemoveRows = (index: number) => {
    setInputList({
      ...inputList,
      taskList: inputList.taskList.filter((s, sindex) => index !== sindex),
    });
  };
  const formSubmit = (e: any) => {
    e.preventDefault();
       // console.log(inputList);
        const items=inputList.taskList
        items[0].po_id=inputList.po_id
        for(let i=0;i<items.length;i++){
          console.log(items[i].index) ;
         // delete items[i].index;
          
         

        }

        const details={po_id: inputList.po_id,po_file:file,
        po_date: inputList.date}
        //console.log(file)
        console.log(details)
        console.log(items)
        let data={details,items}
        console.log(data)
        axios.post("http://localhost:9000/poDetails",data)

        .then((d)=>console.log(d.data))

        .catch(err=>console.log(err));

       
        
  };
  return (
    <Container>
      <Form
        onSubmit={formSubmit}
        style={{
          border: "1px solid grey",
          top: "8rem",
          margin: "13rem",
          padding: "3rem",
        }}
      >
        <h1 style={{ textAlign: "center", margin: ".5rem" }}>
          Purchase Order Details
        </h1>
        <br />
        <Row className="mb-3">
          <Form.Group as={Col} controlId="number">
            <Form.Label>PO Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter order number"
              name="number"
              value={inputList.po_id}
              onChange={(e) =>
                setInputList({ ...inputList, po_id: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group as={Col} controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder=""
              name="date"
              value={inputList.date}
              onChange={(e) =>
                setInputList({ ...inputList, date: e.target.value })
              }
            />
          </Form.Group>
        </Row>
        <AddRows
          add={handleAddRows}
          deleted={handleRemoveRows}
          inputList={inputList}
          setInputList={setInputList}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default PoDetails;
