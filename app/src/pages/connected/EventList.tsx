import React from 'react';
import Layout from '../../components/LayoutApp';
import { IoIosSearch } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { colors } from '@mui/material';
import "../../assets/css/Global.css"
import "../../assets/css/EventList.css"
// import eventsData from "../../assets/json/agenda-des-manifestations-culturelles-so-toulouse.json"

const EventList = () => {
    return (
        <Layout>
            <div className='title'>
                <h1>Eventlist</h1>
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


//TEST

// Composant de la carte (card)
function ArticleCard({ article }) {
    return (
      <div className="card">
        <h2>{article.title}</h2>
        <p>{article.content}</p>
      </div>
    );
  }
  
  // Composant de la liste d'articles
  function ArticleList() {
    return (
      <div className="article-list">
        {articlesData.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    );
  }
  
  // Composant principal de l'application
  function App() {
    return (
      <div className="App">
        <h1>Liste des Articles</h1>
        <ArticleList />
      </div>
    );
  }
  

export default EventList;