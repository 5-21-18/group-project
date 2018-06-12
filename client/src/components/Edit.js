import React, {Component} from 'react';
//is a "view"


/* This actually needs to have all crud operations for creating, editing and deleting a review.
Will have to use a componentwillupdate to bring in buttons or something to edit and create. If editing, it 
needs to show all previous text. Maybe have different components for creating and editing/deleting. This is 
for reviews only. Need to have a separate component for book picture and summary */
class Edit extends Component {

  update() {
    //axios.put to update reviews
    //target by id
    
  }

  delete() {
    //axios.delete to delete reviews
    //target by id
  }

  //need to add inputs for editing reviews
  render() {
      return (
          <div className='main-div'>
              <h1>This is the <u>Edit</u> component</h1>
          </div>
      );
  }

}

export default Edit;
