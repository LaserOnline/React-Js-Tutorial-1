
import './App.css';
import AppHeader from './components/AppHeader';
import TattooPost from './components/TattooPost';
import Tattooltem from './components/Tattooltem';
import tattoos from './data/tattos';
import { useState } from 'react';
import AppSearch from './components/AppSearch';

function App() 
{

    const [selectedTattoo,setSelectedTattoo] = useState(tattoos[null]);
    const [searchText, setSearchText] = useState('');

    function onTattooOpenClick(theTattoo)
    {
        setSelectedTattoo(theTattoo);
    }

    function onTattooCloseClick()
    {
        setSelectedTattoo(null);
    }

    const filteredTattoos = tattoos.filter((tattoo) => {
        return tattoo.title.includes(searchText);            
    })
    
    const tattooElments = filteredTattoos.map((tattoo, index) => {
        return <Tattooltem key={index} tattoo = {tattoo} onTattooClick = {onTattooOpenClick}/>
    })

    let tattooPost = null;
    if (!!selectedTattoo) 
    {
        tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick = {onTattooCloseClick}/>
    }

    return (

        <div className="App-Background">

            <AppHeader/>  {/*  //? Header  */}
            <section className ="app-section">
                <div className ="app-container">
                    <AppSearch value = {searchText} onValueChange = {setSearchText} />
                        <div className="App-grid">
                            {tattooElments}
                        </div>
                </div>
            </section>
            {tattooPost}
        </div>
        
    );
}

export default App;
