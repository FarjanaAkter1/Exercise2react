import './App.css';

function App() {

  const squareStyle = {
    width: '700px',
    height: '400px',
    backgroundColor: 'yellow',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontSize: '24px',
    fontWeight: 'bold',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  return (
    <div style={squareStyle}>
      Hello, World!
    </div>
  );
};

export default App;