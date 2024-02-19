import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';

function App() {
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
  ]


  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }


  return (
    <div className="App">
      <Greet name="Abby" messageCount={20} isLoggedIn={false}/>
      <Greet name="Abby" messageCount={20} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>Placeholder</Heading>
      <Oscar>
        <Heading>
          Oscar to you!
        </Heading>
      </Oscar>
      <Greet name="Bongo" isLoggedIn={false}/>
      <Greet name="Bongo" isLoggedIn={true}/>
      <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id)
      }}/>
      <Input value="" handleChange={(event) => console.log(event)}/>
      <Container styles={{border: '1px solid black', padding: '1rem', display: 'none'}}/>
      <LoggedIn/>
      <User/>
      <Private isLoggedIn={true} component={Profile}/>
      {/* <List 
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item) => console.log(item)}
      />
      <List 
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      /> */}
      <List 
        onClick={(item) => console.log(item)}
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          },
        ]}
      />
    </div>
  );
}

export default App;
