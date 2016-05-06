import React, { Component } from 'react';
// connecting react and redux with react-redux
import { connect } from 'react-redux';

class BookList extends Component {
     renderList() {
          return this.props.books.map((book) => {
               return (
                    // because it's a list add a key that is unique
                    <li key={book.title} className="list-group-item">{book.title}</li> 
               );
          });
     }
     
     render() {
          return (
               <ul className="list-group col-sm-4">
                    {this.renderList()}
               </ul>
          );
     }
}

// function that connects react and redux
function mapStateToProps(state) {
     // whatever is returned will show up as props
     // inside of BookList
     return {
          books: state.books
     };
}

// react-redux makes the connect function available
// takes a function and component to produce a container
// a container is aware of state
export default connect(mapStateToProps)(BookList);