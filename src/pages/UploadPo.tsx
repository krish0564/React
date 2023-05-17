import { render } from "@testing-library/react";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import PoDetails from "./PoForm/PoDetails";

type Props = {};

const UploadPo = (props: Props) => {
  const [submitPdf, setSubmitPdf] = useState(false);
const[file,setFile]=useState<File>();
  const handleSubmit = () => {
    setSubmitPdf(true);
  };

  return (
    <>
      <Card
        className="text-center"
        style={{ top: "8rem", width: "18rem", left: "30rem" }}
      >
        <Card.Header>Upload PO</Card.Header>
        <Card.Body>
          <Card.Title>PO Order</Card.Title>
          <Card.Text>
            <input type="file" name="file" accept=".pdf" onChange={(e: any) => setFile(e.target.value)}

              />
          </Card.Text>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Card.Body>
      </Card>
      {submitPdf && <PoDetails  file={file}/>}
    </>
  );
};

export default UploadPo;
