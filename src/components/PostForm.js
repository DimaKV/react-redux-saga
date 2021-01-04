import React from "react";

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handlerSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.title);
  };
  changeHandlerInput = (event) => {
    // event.persist();
    this.setState((prev) => {
      return {
        [event.target.name]: event.target.value,
      };
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
          <div>
            <label htmlFor='title' className='form-label'>
              Post Title
            </label>
            <input
              type='text'
              className='form-control'
              id='title'
              name='title'
              value={this.state.title}
              onChange={this.changeHandlerInput}
            />
          </div>
          <div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
