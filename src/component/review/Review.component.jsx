import { Form, Button } from "react-bootstrap";

export default function Review({
   handleSubmit,
   revText,
   labelText,
   defaultValue,
}) {
   return (
      <Form>
         <Form.Group className="mb-3" controlId="example.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control
               ref={revText}
               as="textarea"
               rows={3}
               defaultValue={defaultValue}
            ></Form.Control>
         </Form.Group>
         <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
      </Form>
   );
}
