import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API"

class Search extends Component {
  // Initialize this.state.books as an empty array
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  // var query = this.state.title;
  findBook = (query) => {
    console.log(query)
    API.getGoogleSearchBooks(query)
      .then(res => { this.setState({ books: res.data.items, title: "", author: ""}); console.log(res.data.items) }
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.findBook(this.state.title);
    // this.populateResults()
    // API.saveBook()
    // .then()

  }

  // populateResults = () => {
  //     this.state.books.map(book => console.log(book)
  //     //   (
  //     //   <ListItem key={book._id}>
  //     //     <a href={"/books/" + book._id}>
  //     //       <strong>
  //     //         {book.title} by {book.author}
  //     //       </strong>
  //     //     </a>
  //     //     <DeleteBtn />
  //     //   </ListItem>
  //     // )
  //     )
  // }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What book are you looking for?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    <a href={"/books/" + book.id}>
                      <strong>
                        {book.volumeInfo.title} by {book.volumeInfo.authors[0]}
                      </strong>
                    </a>
                    <DeleteBtn />
                    <br></br>
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></img>
                    <br></br>
                    Description: {book.volumeInfo.description}
                    <br></br>
                    <a href={book.volumeInfo.infoLink}>Link to book info</a>

                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
