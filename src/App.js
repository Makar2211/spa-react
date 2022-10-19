import React, { useState } from 'react';

import {Massege} from './Message/Message'
import {Input} from './Message/input'

function App() {
  const arr = [
    {id:1,  name: 'makar', age: 18},
    {id:2, name: 'makar', age: 18},
    {id:3,  name: 'makar', age: 18},
  ]
  const [peoples, setPeoples] = useState(arr)
  const handelAge = () => {
    setPeoples(peoples.filter((people) => people.age ++))
  }
  const Refresh = () => {
    setPeoples(arr)
  }
  const handelDelete = (id) => {
    setPeoples(peoples.filter((people) => people.id !== id))
  }
  return (
   <>

    {peoples.map((people) => {
     return <Massege
      {...people}
      key={people.id}
      handelAge={handelAge}
      handelDelete={handelDelete}
      />
    })}
    <button onClick={Refresh}>refresh</button>

    <Input/>
   </>
  );
}

export default App;
