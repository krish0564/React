import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert, Card, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import DMRinputs from './DMRinputs';

const RaiseDMR = () => {
  const [id, setid] = useState('');
  const [show, setShow] = useState(true);
  const [detail, setdetails] = useState();

  useEffect(() => {
    document.title = 'Raise DMR';
    setdetails();
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:9000/getdetails/${id}`)
      .then((d) => {
        console.log('Response', d);
        toast.success('Data Found');
        setdetails(d.data);
      })
      .catch((err) => {
        toast.error('Data Not Found.');
        setdetails();
      });
  };
  return (
    <Form>
      <Card className='text-center mt-3 files'>
        <Card.Header>Search PO number</Card.Header>
        <Card.Body>
          <div className='search'>
            <i className='fa fa-search' />
            <input
              type='text'
              className='form-control'
              placeholder='Enter PO number here.'
              value={id}
              onChange={(e) => {
                setid(e.target.value);
              }}
            />
            <button
              className='btn btn-light'
              type='submit'
              onClick={handlesubmit}
            >
              Search
            </button>
          </div>
        </Card.Body>
      </Card>
      {detail ? (
        <div className='border p-3 mt-4'>
          <Alert
            className='mt-3'
            show={show}
            onClose={() => setShow(false)}
            variant='primary'
            dismissible
          >
            Data Found.
          </Alert>
          <DMRinputs details={detail} />
        </div>
      ) : (
        <></>
      )}
    </Form>
  );
};

export default RaiseDMR;
