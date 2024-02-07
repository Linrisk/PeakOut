import React from 'react';
import Layout from '../../components/LayoutApp';
import { IoIosSearch } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { colors } from '@mui/material';
import "../../assets/css/Global.css"
import "../../assets/css/EventList.css"

const EventList = () => {
    return (
        <Layout>
            <div className='title'>
                <h1>Discover</h1>
                <VscSettings />
                <IoIosSearch />
            </div>
            <div className='ConcertsList'>
                <div className='Concerts'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1O_-ZmTDJ5vhiG74Zo0VZwlWRBeaWbIGUpg&usqp=CAU" alt="Concert" />
                    <div className='ConcertsDesc'>
                        <div className='ConcertsInfos'>
                            <h2>Concert Stromae</h2>
                            <p>Le 12/12/2023</p>
                        </div>
                        <div className='ConcertsPlace'>
                            <p>23 octobre 2023</p>
                            <p>Zénith de Toulouse</p>
                        </div>
                        <div>
                            <p>Je me rends au concert de Stromae en le 23 octobre et je cherche de la...</p>
                        </div>
                    </div>
                </div>

                <div className='Concerts'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1O_-ZmTDJ5vhiG74Zo0VZwlWRBeaWbIGUpg&usqp=CAU" alt="Concert" />
                    <div className='ConcertsDesc'>
                        <div className='ConcertsInfos'>
                            <h2>Concert Stromae</h2>
                            <p>Le 12/12/2023</p>
                        </div>
                        <div className='ConcertsPlace'>
                            <p>23 octobre 2023</p>
                            <p>Zénith de Toulouse</p>
                        </div>
                        <div>
                            <p>Je me rends au concert de Stromae en le 23 octobre et je cherche de la...</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default EventList;