import React from 'react';
import Layout from '../../components/LayoutApp';
import { IoIosSearch } from "react-icons/io";
import "../../assets/css/Global.css"
import "../../assets/css/Discover.css"
import { colors } from '@mui/material';

const HomePage = () => {
  return (
    <Layout>
      <div className='Title'>
        <h1>Discover</h1>
        <IoIosSearch size={30} />
      </div>
      <div className='Category'>
        <h2>Les catégories</h2>
        <div className='CategoryItems'>
          <div className='CategoryItem' style={{ backgroundColor: '#f05c64' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTl9KrhI6xv3zyoa4B5w8GqSmDwHq8nSp0w&usqp=CAU"></img>
            <h3>Artisique</h3>
          </div>
          <div className='CategoryItem' style={{ backgroundColor: '#e0ecFf' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwqJGKhSjMeegqtykk9cFICcICyx7hJfjjmg&usqp=CAU"></img>
            <h3>Musical</h3>
          </div>
          <div className='CategoryItem' style={{ backgroundColor: '#782434' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrQ6E3mJ_i2XcDLu2rkVeva6wQPDzjigCWA&usqp=CAU"></img>
            <h3>Audio-Visuel</h3>
          </div>
          <div className='CategoryItem' style={{ backgroundColor: '#ffe45c' }}>
            <img src="https://06.kidiklik.fr/sites/default/files/styles/crop_image/public/6_615c867f692a1_0.png?itok=zqIMWAy2"></img>
            <h3>Insolite</h3>
          </div>
        </div>
      </div>
    </Layout >
  );
};

export default HomePage;
