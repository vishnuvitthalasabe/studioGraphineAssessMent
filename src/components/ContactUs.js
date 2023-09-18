import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../css/ContactUs.css";

const ContactUs = () => {
  const [isValid, setIsValid] = useState(null);

  const ValidateEmail = (event) => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (event.target.value.match(validRegex)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    if (event.target.value === "") setIsValid(null);
  };

  return (
    <div className="subMainContainer">
      <div className="subContainer">
        <div className="newsletter">
          <h2 id="nletterHeader">Newslleter</h2>
          <p id="nletterParagraph">
            Get news about articles and updates
            <br /> in your inbox.
          </p>
        </div>
        <div className="contactForm">
          <Form>
            <Form.Group>
              <Form.Control id="inputs" type="email" placeholder="NAME" />
            </Form.Group>
            <Form.Group style={{ display: "flex", flexDirection: "column" }}>
              <Form.Control
                onChange={ValidateEmail}
                id="inputs"
                type="pass"
                placeholder="EMAIL"
              />
              {isValid != null ? (
                <Form.Text id="warning">
                  {isValid ? "" : "Email entered is Invalid"}
                </Form.Text>
              ) : (
                <div></div>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Control
                id="inputs"
                type="text-area"
                placeholder="MESSAGE"
              />
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className="getintouchDiv">
          <h1 id="getintouchLogo">
            GET
            <br /> IN TOUCH
          </h1>
          <Button id="sendButton">SEND</Button>
      </div>
    </div>
  );
};

export default ContactUs;
