import React from 'react'
import { useParams } from 'react-router';
import { personsData } from '../data/data';
import { FaIndent } from 'react-icons/fa';

const OnePerson = () => {
    const { id } = useParams();
    const findarray =  personsData.find((item) => item.id === parseInt(id));
       console.log(findarray)
  return (
       <>
         <div>
              <h1 className="text-4xl font-bold mb-4">{findarray?.name}</h1>
              <p className="text-lg mb-4">{findarray?.age} </p>
              <p className="text-lg mb-4 bg-green-200">{findarray?.hobbies} </p>

         </div>
       </>
  )
}

export default OnePerson