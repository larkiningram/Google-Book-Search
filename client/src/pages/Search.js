import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
import SaveBtn from "../components/SaveBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API"

class Search extends Component {
  // Initialize this.state.books as an empty array
  state = {
    savedBooks: [],
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  findBook = (query) => {
    console.log(query)
    API.getGoogleSearchBooks(query)
      .then(res => { this.setState({ books: res.data.items, title: "", author: "" }); console.log(res.data.items) }
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
    this.findBook(this.state.title || this.state.author);
  }

  saveThisBook = event => {
    event.preventDefault()
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks).then(res => { this.setState({ savedBooks: res.data.items }); console.log(this.state.savedBooks) })
  }

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
                placeholder="Title"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author"
              />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
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
                    {/* <a href={"/books/" + book.id}> */}
                      <strong>
                        {book.volumeInfo.title} by {book.volumeInfo.authors[0]}
                      </strong>
                    {/* </a> */}
                    <SaveBtn onClick={this.saveThisBook} />
                    <br></br>
                    <div className="row">
                      <Col size="md-2">
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></img>
                        <br></br>
                      </Col>
                      <Col size="md-9">
                        {book.volumeInfo.description}
                        <br></br>
                        <a href={book.volumeInfo.infoLink}>Link to book info</a>
                      </Col>
                    </div>
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
