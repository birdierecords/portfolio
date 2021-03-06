import React from "react";
import { Button } from 'reactstrap';

// import Article from "../components/Article";

export default class Features extends React.Component {
  render() {

    return (
        <div className="inner cover">
            <h1 className="cover-heading">Features</h1>
            <p className="lead">This page will showcase Ian's skills and projects</p>
            <p className="lead">
                <Button color="primary" size="lg">Website Under Maintenance</Button>
            </p>
        </div>
    );
  }
}
