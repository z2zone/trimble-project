import React, { Component } from "react";
import axios from "axios";
import { getToken } from "../../Utils/Common";

class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = { start: "", destination: "", level: null, address: "", phoneNo: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { start, destination, level} = this.state;
    event.preventDefault();
    alert(`
      start : ${start}
      destination : ${destination}
      level : ${level}
    `);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div class="rate">
        <h1>Instant Transport Quote</h1>
        <section class="accordion">
          <input
            type="checkbox"
            name="collapse"
            id="handle1"
            checked="checked"
          />
          <h2 class="handle">
            <label for="handle1">Basic Information</label>
          </h2>
          <div class="content">
            <form onSubmit={this.handleSubmit}>
              <div>
                <span>Start Zone</span>
                <input
                  name="start"
                  placeholder="Start Zone"
                  value={this.state.start}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                Destination
                <input
                  name="destination"
                  placeholder="Destination"
                  value={this.state.destination}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                Service Level
                <input
                  name="level"
                  placeholder="Service Level"
                  value={this.state.level}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                Address
                <input
                  name="address"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                Phone Number
                <input
                  name="phoneNo"
                  placeholder="Phone No"
                  value={this.state.phoneNo}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <button className="rate-submit">Create Account</button>
              </div>
            </form>
          </div>
        </section>
        <section class="accordion">
          <input type="checkbox" name="collapse2" id="handle2" />
          <h2 class="handle">
            <label for="handle2">Optional Details</label>
          </h2>
          <div class="content">
            <p>
              <strong>Overall Impression:</strong> A deep reddish-copper,
              moderately strong, malty, complex Trappist ale with rich malty
              flavors, dark or dried fruit esters, and light alcohol blended
              together in a malty presentation that still finishes fairly dry.
            </p>
            <p>
              <strong>History:</strong> Originated at monasteries in the Middle
              Ages, and was revived in the mid-1800s after the Napoleonic era.
            </p>
          </div>
        </section>
        <section class="accordion">
          <input type="checkbox" name="collapse2" id="handle3" />
          <h2 class="handle">
            <label for="handle3">Special Memo</label>
          </h2>
          <div class="content">
            <p>
              <strong>Overall Impression:</strong> A pale, somewhat spicy, dry,
              strong Trappist ale with a pleasant rounded malt flavor and firm
              bitterness. Quite aromatic, with spicy, fruity, and light alcohol
              notes combining with the supportive clean malt character to
              produce a surprisingly drinkable beverage considering the high
              alcohol level.
            </p>
            <p>
              <strong>History:</strong> Originally popularized by the Trappist
              monastery at Westmalle.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Rate;