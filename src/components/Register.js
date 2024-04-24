import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      alert("Thank you for registering!!");
      navigate('/');
    }
    setValidated(true);
  };

  return (
    <div className='signUp'>
    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{marginTop: '20px', display: 'flex', flexDirection: 'column'}}>
      
      <div style={{ marginBottom: '20px' }}>
        <Form.Group as={Row} controlId="validationCustomUsername">
          <Form.Label column sm={3} style = {{fontWeight:'bold'}}>Username</Form.Label>
          <Col sm={5}>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend" style={{width: 200}}>@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Col>
        </Form.Group>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Form.Group as={Row} controlId="validationCustom05">
          <Form.Label column sm={3} style = {{fontWeight:'bold'}}>Password</Form.Label>
          <Col sm={5}>
            <Form.Control
              type="password"
              placeholder="Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Form.Group as={Row} controlId="validationCustom01">
          <Form.Label column sm={3} style={{fontWeight:'bold'}}>First name</Form.Label>
          <Col sm={5}>
            <Form.Control
              required
              type="text"
              placeholder="Enter first name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Enter first name
              </Form.Control.Feedback>
          </Col>
        </Form.Group>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Form.Group as={Row} controlId="validationCustom02">
          <Form.Label column sm={3} style = {{fontWeight:'bold'}}>Last name</Form.Label>
          <Col sm={5}>
            <Form.Control
              required
              type="text"
              placeholder="Enter last name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
                Enter last name
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Form.Group as={Row} controlId="validationCustom03">
          <Form.Label column sm={3} style = {{fontWeight:'bold'}}>City</Form.Label>
          <Col sm={5}>
            <Form.Control
              type="text"
              placeholder="City"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Form.Group as={Row} controlId="validationCustom04">
          <Form.Label column sm={3} style = {{fontWeight:'bold'}}>State</Form.Label>
          <Col sm={5}>
            <Form.Control
              type="text"
              placeholder="State"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
      </div>
      
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>

      <Button type="submit"style={{marginBottom:'20px'}}>Submit</Button>
    </Form>
    </div>
  );
};

export default Register;