import React from "react";
import { Card, Button } from "react-bootstrap";
import "./VerticalCard.css";

const VerticalCard = ({
  image,
  cardTitle,
  infoText,
  buttonText,
  buttonLink,
  imageFitStyle,
}) => {
  const handleClick = () => {
    window.open(buttonLink, "_blank"); // Open the buttonLink in a new tab
  };

  return (
    <Card className="card-container">
      <Card.Img
        className="card-img"
        style={{ objectFit: { imageFitStyle } }}
        variant="top"
        src={image}
      />
      <Card.Body>
        <Card.Title className="card-title">{cardTitle}</Card.Title>
        <Card.Text className="card-text">{infoText}</Card.Text>
        <Button className="card-button-custom" onClick={handleClick}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default VerticalCard;
