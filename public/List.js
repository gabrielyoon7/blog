const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) => <li>{numbers}</li> );

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('list')
);



function NumberList(props) {
    //키 누락을 해결한 버전
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('number-list')
  );