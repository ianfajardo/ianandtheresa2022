import Card from "react-bootstrap/Card";
import Cookies from "universal-cookie";
import {
  Form,
  DropdownButton,
  Button,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";

import React, { Component, useState } from "react";

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: "",
      day: "",
      year: "",
      error: "",
    };

    this.handleDay = this.handleDay.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.enterDate = this.enterDate.bind(this);
  }

  handleMonth(event) {
    this.setState({ month: event.target.value });
  }

  handleDay(event) {
    this.setState({ day: event.target.value });
  }

  handleYear(event) {
    this.setState({ year: event.target.value });
  }

  enterDate() {
    if (
      this.state.month == "8" &&
      this.state.day == "5" &&
      this.state.year == "2022"
    ) {
      console.log("correct date");
      window.location.href = "/home";
    } else {
      this.setState({ error: "Date is incorrect." });
    }
  }

  render() {
    return (
      <Card className="password-box it-date-box">
        <Card.Body>
          <div className="it-location mb-4" style={{ fontSize: "1rem" }}>
            Enter our Wedding Date to Access our Site
          </div>
          <div className="row">
            <div className="col-lg-4">
              <Form.Select
                value={this.state.month}
                onChange={this.handleMonth}
                aria-label="Default select example"
              >
                <option>Month</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </Form.Select>
            </div>
            <div className="col-lg-4">
              <Form.Select
                value={this.state.day}
                onChange={this.handleDay}
                aria-label="Default select example"
              >
                <option>Day</option>
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </Form.Select>
            </div>
            <div className="col-lg-4">
              <Form.Select
                value={this.state.year}
                onChange={this.handleYear}
                aria-label="Default select example"
              >
                <option>Year</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
              </Form.Select>
            </div>
          </div>
          <div className="text-danger mt-3" style={{ fontSize: ".85rem" }}>
            {this.state.error}
          </div>
          <Button
            onClick={this.enterDate}
            variant="primary"
            className="mt-3"
            type="submit"
          >
            Submit
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Password;
