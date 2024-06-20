import './App.css';

const user = {
  name: 'React JS',
}

function App() {
  return (
    <div>
      <nav>
      <ul>
        <h1 className='text-h1'>
          BOOTCAMP Batch 1 : Experiment with {user.name}
        </h1>

        <li>
          <a href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#news">
            About
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
      </nav>
      <h2 className="text-h2">Hello World!, This is {user.name}.</h2>
    </div>
  );
}

export default App;
