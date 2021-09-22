import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer ';

const customer ={
  'name' : '홍길동',
  'birthday' : '14920205',
  'sex' : 'male',
  'job' : '도적'
}

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      sex={customer.sex}
      job={customer.sex}
    />
  );
}

export default App;
