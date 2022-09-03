//import logo from './logo.svg';
//import './App.css';
//import React from 'react';
import { useState, useEffect } from 'react';


const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

function App() {
  const [color, setColor] = useState('Tomato');
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(1);
  const [profile, setProfile] = useState({});
  const [time, setTime] = useState(0);

 const divStyle = {backgroundColor: color};

 const increment = () => setCount(prevCount => prevCount + 1);

 const next = () => {
  setIndex(index => index + 1);
 }
 const back = () => {
  setIndex(index => index - 1);
 }

 const handleChange = ({ target }) => {
  const {name, value} = target;
  setProfile((prevProfile) => ({
    ...prevProfile,
    [name]: value
  }));
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(profile, '', 2));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
    setTime((prev) => prev + 1);
    }, 1000);
    return () => {clearInterval(intervalId)};
  },[]);  //[] e pentru a nu opri counteru in timp ce tastezi
 
  return (
    <div style={divStyle}>
      <p>de cand ai intrat in aceasta gaura au trecut {time} secunde</p>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
       <p>ai apasat de {count} ori pe buton</p>
            <button onClick={increment}>apasa</button>

        <p>intrebarea#{index}</p>
        <button onClick={next}>next</button>
        <button onClick={back}>back</button>
      <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange}
          value={profile.firstName || ''}
          name="firstName"
          type="text"
          placeholder="First Name"
          ></input>
        <input
          onChange={handleChange}
          value={profile.lastName || ''}
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
        <input
        onChange={handleChange}
        value={profile.password || ''}
        type="password"
        name="password"
        placeholder="Password"
      />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

export default App;
