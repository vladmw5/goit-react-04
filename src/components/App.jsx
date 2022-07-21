import { useEffect, useState } from 'react';
import { get, ref, push, onValue, off } from 'firebase/database';
import { db } from 'service/firebase/frebaseConfing';
export const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    onValue(ref(db, 'users'), snapshot => {
      if (snapshot.exists()) {
        const arrToAdd = [];
        for (const [key, entry] of Object.entries(snapshot.val())) {
          arrToAdd.push({ id: key, ...entry });
        }
        setUsers(arrToAdd);
      } else {
        console.error(snapshot);
      }
    });
    return () => {
      off(ref(db, '/users'));
    };
  }, []);

  const getAllUsers = () => {
    get(ref(db, '/users'))
      .then(snapshot => {
        if (snapshot.exists()) {
          const arrToAdd = [];
          for (const [key, entry] of Object.entries(snapshot.val())) {
            arrToAdd.push({ id: key, ...entry });
          }
          setUsers(arrToAdd);
        } else {
          console.error(snapshot);
        }
      })
      .catch(console.error);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const objToSend = {
      name,
      email,
      password,
    };
    await push(ref(db, 'users/'), objToSend).then(console.log);
    // getAllUsers();
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </li>
        </ul>
        <button type="submit">Send</button>
      </form>
      {!!users.length && (
        <ul>
          {users.map(user => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      )}
    </main>
  );
};

export default App;
