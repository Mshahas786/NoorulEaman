import React from 'react'
import {
    Col,
    // Button,
    // Container,
    // Row,
    Card,
    CardColumns,
  } from "react-bootstrap";

  import "./Style.css";
const ProductContainer = () => {
    return (
        <div className="">
      <Col xs="8" className="bg-light float-right h-100">
        <div className="wrapper d-flex overflow-auto mt-3">
          <div className="item btn btn-outline-primary mr-2">mens wear</div>
          <div className="item btn btn-outline-primary mr-2">mens wear</div>
          <div className="item btn btn-outline-primary mr-2">mens wear</div>
          <div className="item btn btn-outline-primary mr-2">mens wear</div>
          <div className="item btn btn-outline-primary mr-2">mens wear</div>
          <div className="item btn btn-outline-primary mr-2">mens wear</div>
          <div className="item btn btn-outline-primary mr-2">mens wear</div>
          <div className="item btn btn-outline-primary mr-2">mens wear</div>
          <div className="item btn btn-outline-primary mr-2">mens wear</div>
          <div className="item btn btn-outline-primary mr-2">mens wear</div>
          <div className="item btn btn-outline-primary mr-2">mens wear</div>
          <div className="item btn btn-outline-primary mr-2">mens wear</div>
        </div>

        <div className="">
          <CardColumns>

            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>

            

          </CardColumns>
        </div>
      </Col>
    </div>
    )
}

export default ProductContainer
