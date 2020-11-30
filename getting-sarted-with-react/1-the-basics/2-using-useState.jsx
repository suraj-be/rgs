function Button() {
  const [counter, setCounter] = useState(5);
  const handleClick = () => {
    setCounter(counter * 2);
  }
  return (
    <button onClick={handleClick}>
      {counter}
    </button>
  )
}

function Display() {
  return '.....';
}

ReactDOM.render(
  <>
    <Button />
    <Display />
  </>,
  document.getElementById('mountNode')
)