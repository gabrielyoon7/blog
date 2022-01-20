function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  
  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        {/* FancyBorder의 props.children에 들어갈 내용 시작*/}
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
        {/* FancyBorder의 props.children에 들어갈 내용 끝*/}
      </FancyBorder>
    );
  }
  
  ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('dialog')
  );
  