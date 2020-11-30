/* It's astonishingly less code */

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
  return (
    <button onClick={handleClick}>+{props.increment}</button>
  )
}

function Display(props) {
  return <div>{props.message}</div>;
}

function App() {
  const [counter, setCounter] = useState(1);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
  return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={2} />
      <Button onClickFunction={incrementCounter} increment={3} />
      <Button onClickFunction={incrementCounter} increment={4} />
      <Display message={counter} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode')
)