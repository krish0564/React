import axios from 'axios';
import { memo, useState } from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';

const DMRinputs = ({ details }) => {
  const data = details.details;
  const [inputList, setInputList] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault(details.ponumber);
    axios
      .patch(`http://localhost:9000/poDetails/${details.ponumber}`, data)
      .then((d) => {
        console.log('Response', d);
        toast.success('Data Updated Successfully.');
      })
      .catch((err) => {
        toast.error('Data Not Updated.');
      });
  };

  return (
    <div>
      <div className='d-flex justify-content-evenly m-3'>
        <InputGroup className='mt-3 mb-3'>
          <InputGroup.Text>PO Number </InputGroup.Text>
          <Form.Control name='ponumber' value={details.ponumber} disabled />
        </InputGroup>
        <span className='input-group-btn' style={{ width: '10px' }}></span>
        <InputGroup className='mt-3 mb-3'>
          <InputGroup.Text>Date </InputGroup.Text>
          <Form.Control
            label='Enter Amount'
            name='date'
            value={details.date}
            disabled
          />
        </InputGroup>
      </div>
      <Table striped bordered hover responsive='sm' variant='light'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Amount</th>
            <th>Raised Amount</th>
            <th>DMR No.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elementInArray, index) => {
            return (
              <tr key={index}>
                <th scope='row'>
                  <Form.Control
                    name='description'
                    id='description'
                    value={elementInArray.description}
                    disabled
                  />
                </th>
                <td>
                  <Form.Control
                    name='amount'
                    id='amount'
                    value={elementInArray.amount}
                    disabled
                  />
                </td>
                <td>
                  <Form.Control
                    name='raisedAmount'
                    id='raisedAmount'
                    value={elementInArray.raisedAmount}
                    onChange={(e) => {
                      elementInArray.raisedAmount = e.target.value;
                      setInputList({ ...inputList });
                    }}
                  />
                </td>
                <td>
                  <Form.Control
                    name='dmrNo'
                    id='dmrNo'
                    value={elementInArray.dmrNo}
                    onChange={(e) => {
                      elementInArray.dmrNo = e.target.value;
                      setInputList({ ...inputList });
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className='d-flex justify-content-between mb-3'>
        <Button type='submit' className="mx-auto col-md-6" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default memo(DMRinputs);
