import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { Menu } from "semantic-ui-react";

class Header extends Component {
  constructor() {
    super();

    //gets day, month
    var d = new Date()
      .toString()
      .split(" ")
      .splice(0, 3)
      .join(" ")
      // regex number without leading zeros
      .replace(/\b0/g, "");

    this.state = {
      date: d
    };
  }
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container fluid>
        <header>
          <Menu pointing secondary>
            <Link to={"/"}>
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Link to={"/todos"}>
              <Menu.Item
                name="todos"
                active={activeItem === "todos"}
                onClick={this.handleItemClick}
              />
            </Link>
            <Menu.Menu position="right">
              <Menu.Item
                name="logout"
                active={activeItem === "logout"}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
          <div id="title">
            <h1>My Tasks Today</h1>
            <p>{this.state.date}</p>
          </div>
        </header>
      </Container>
    );
  }
}

export default Header;
