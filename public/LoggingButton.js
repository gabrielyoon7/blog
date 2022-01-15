class LoggingButton1 extends React.Component {
    // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
    // 주의: 이 문법은 *실험적인* 문법입니다.
    handleClick = () => {
      console.log('this is:', this);
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Click me (loggingButton1)
        </button>
      );
    }
  }

  ReactDOM.render(
    <LoggingButton1 />,
    document.getElementById('loggingButton1')
  );

  class LoggingButton2 extends React.Component {
    handleClick() {
      console.log('this is:', this);
    }
  
    render() {
      // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
      return (
        <button onClick={() => this.handleClick()}>
          Click me (loggingButton2)
        </button>
      );
    }
  }

  ReactDOM.render(
    <LoggingButton2 />,
    document.getElementById('loggingButton2')
  );

  