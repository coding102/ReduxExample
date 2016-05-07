import React, { Component } from 'react';
// connecting react and redux with react-redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

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

// anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
     // whenever selectBook is called, the reult shold be passed 
     // to all of our reducers
     return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// react-redux makes the connect function available
// takes a function and component to produce a container
// a container is aware of state

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook.  Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);