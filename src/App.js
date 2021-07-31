import logo from './logo.svg';
import './App.css';

function App() {
  const firstName = 'Reski Mulud';
  const lastName = 'Muchamad';
  const age = 20;
  const job = 'Mahasiswa';

  const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
  const inputBox = <input placeholder="Enter Data" autoComplete />;

  const myArr = [1, 2, 3, 4, 5];
  const myObj = {
    name: 'Reski Mulud Muchamad',
    age: 20,
    job: 'Mahasiswa'
  }

  return (
    <div className="App">
      <h3>Nama Saya Adalah {getFullName(firstName, lastName)}</h3>
      <p>Usia : {age} tahun</p>
      <p>Pekerjaan : {job}</p>

      {inputBox}

      {myArr[0]}

      <p>Nama Saya adalah {myObj.name}</p>

    </div>
  );
}

export default App;
