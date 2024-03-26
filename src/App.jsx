import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log('puppies: ', puppies);

  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  console.log('featuredPup object: ', featuredPup);
  return (
    <>
        <div className='fancyDiv'>
          {
            puppies.map((puppy) => {
              return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
            })
          }
        </div>
        {
          featPupId && (
            <div className='fancyDiv'>
              <h2>{featuredPup.name}</h2>
              <ul>
                <li>Age: {featuredPup.age}</li>
                <li>Email: {featuredPup.email}</li>
              </ul>
            </div>
          )
        }
    </>
  )
}

export default App
