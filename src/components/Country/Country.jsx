import React from 'react';

const Country = ({country}) => {
    const {flags, name, population} = country;
    return (
        <>
        <div>
            <div className="border-solid border-2 p-5 border-slate-400 shadow-lg shadow-cyan-950 rounded-lg h-full">
                <img className='text-center mx-auto' src={flags?.png} alt={name.common} />
                <div className="">
                    <h3 className='text-2xl font-semibold'>{name?.common} </h3>
                    <p>Official: {name?.official} </p>
                    <p>Population: <strong>{population}</strong> </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Country;