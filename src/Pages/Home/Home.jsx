import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Books from '../Books/Books';

const Home = () => {
    const  data = useLoaderData();
    console.log(data)
    return (
        <div >
           <Banner ></Banner>
          <div className='' >
             <Books data={data}  ></Books>
          </div>
        </div>
    );
};

export default Home;