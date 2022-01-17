class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          {/* 2. onSubmit을 통해서 handleSubmit 함수로 전달해서 alert를 호출*/}
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            {/* 1. input의 onChange를 통해서 handleChange 함수를 건드려서 state를 바꿈*/}
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  ReactDOM.render(
    <NameForm />,
    document.getElementById('name-form')
  );