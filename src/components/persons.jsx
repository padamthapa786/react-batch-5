import React from 'react';
import { Link } from 'react-router';
import { personsData } from '../data/data';


const Persons = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {personsData.map(person => (
        <Link to={`product/${person.id}`}   key={person.id} className="border p-4 rounded shadow">
          <h2 className="text-xl">{person.name}</h2>
        </Link>
      ))}
    </div>
  );
};

export default Persons;