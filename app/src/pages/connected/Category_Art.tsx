import React from 'react';
import Layout from '../../components/LayoutApp';
import { IoIosSearch } from "react-icons/io";
import "../../assets/css/Global.css"
import "../../assets/css/Discover.css"
import { colors } from '@mui/material';

const Categories = () => {
  return (
    <Layout>
      <div className='Title'>
        <h1>Artistique</h1>
        <IoIosSearch size={30} />
      </div>
      <div className='Category'>
        <div className='CategoryItems'>
          <div className='CategoryItem' style={{ backgroundColor: '#ffece4' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTl9KrhI6xv3zyoa4B5w8GqSmDwHq8nSp0w&usqp=CAU"></img>
            <h3>Concert</h3>
          </div>
          <div className='CategoryItem' style={{ backgroundColor: '#a4acac' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwqJGKhSjMeegqtykk9cFICcICyx7hJfjjmg&usqp=CAU"></img>
            <h3>Festival</h3>
          </div>
          <div className='CategoryItem' style={{ backgroundColor: '#f8dcac' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrQ6E3mJ_i2XcDLu2rkVeva6wQPDzjigCWA&usqp=CAU"></img>
            <h3>Exposition</h3>
          </div>
          <div className='CategoryItem' style={{ backgroundColor: '#d89404' }}>
            <img src="https://06.kidiklik.fr/sites/default/files/styles/crop_image/public/6_615c867f692a1_0.png?itok=zqIMWAy2"></img>
            <h3>Visite de musée</h3>
          </div>
          <div className='CategoryItem' style={{ backgroundColor: '#ecacb0' }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkrQ6E3mJ_i2XcDLu2rkVeva6wQPDzjigCWA&usqp=CAU"></img>
            <h3>Spectacle</h3>
          </div>
          <div className='CategoryItem' style={{ backgroundColor: '#d89c7c' }}>
            <img src="https://06.kidiklik.fr/sites/default/files/styles/crop_image/public/6_615c867f692a1_0.png?itok=zqIMWAy2"></img>
            <h3>Autre</h3>
          </div>
        </div>
      </div>
    </Layout >
  );
};

export default Categories;
