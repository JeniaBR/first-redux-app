import React from 'react';
import {Panel, FormControl, FormGroup, Well, ControlLabel, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBooks} from '../../actions/booksActions';

class BooksForm extends React.Component {
  handleSubmit = () => {
    const book = [{
      title: this.titleInput.value,
      description: this.descriptionInput.value,
      price: this.priceInput.value
    }];
    
    this.props.postBooks(book);
  }
  render(){
    return(
      <Well>
        <Panel>
          <FormGroup controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Title"
              inputRef={(input) => {this.titleInput = input;}}/>
          </FormGroup>
          <FormGroup controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Description"
              inputRef={(input) => {this.descriptionInput = input;}}/>
          </FormGroup>
          <FormGroup controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Price"
              inputRef={(input) => {this.priceInput = input;}}/>
          </FormGroup>
          <Button onClick={this.handleSubmit} bsStyle="primary">Save Book</Button>
        </Panel>
      </Well>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({postBooks}, dispatch);
}

export default connect(null, mapDispatchToProps)(BooksForm);