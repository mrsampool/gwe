// React
import React,{useState} from 'react';

// React Components
import {
    Route, useParams, useLocation
} from "react-router-dom";

// Sub-Components
import {Splash} from '../../views/splash/splash';
import Library from '../../views/library/library';
import SessionMap from "../../views/sessionScreen/sessionMap";
import {materialRouter} from "../../utilities/material";
import {AboutGWE} from "../../views/aboutGWE/aboutGWE";

import books from "../../data/books/books";

// Style Sheets
import './App.css';
import './colors.css';
import './fonts.css';
import './elements.css';
import './animations.css';
import {Resources} from "../../views/resources/resources";
import {Read} from "../../views/read/read";

import '../../data/curriculum/curriculum';
import {Guide} from "../../views/guide/guide";
import TopNav from "../topnav/topnav";

export function App(props){

    const [language,setLanguage] = useState('eng');
    const [page,setPage] = useState('');

    function changeLanguage(){
        setLanguage(language === 'eng' ? 'spa' : 'eng');
    }

    let location = useLocation();
    console.log(location);

    let {sessionId} = useParams();
    console.log(sessionId);

    return (
            <div className="App container-fluid">

                <div className={'row w-100 m-0'}>
                    <div className={'col no-gutters p-0'}>
                        <TopNav
                            language={language}
                            changeLanguage={changeLanguage}
                            page={page}
                        />
                    </div>
                </div>

                <div className={'row w-100 h-100 m-0'}>
                    <div className={'col no-gutters p-0 h-100'}>

                            <Route path={'/guide'}
                                   render={ ( { match } ) =>{
                                       setPage('guide');
                                       return(
                                           <Guide
                                               language={language}
                                               changeLanguage={changeLanguage}
                                           />
                                   )
                               }}
                            />

                            <Route path={['/map/s-:sessionId/p-:partNo',"/map/"]}
                                   render={ ( { match } ) =>{
                                       setPage('sessions');
                                       return(
                                           <SessionMap
                                               language={ language }
                                               changeLanguage={changeLanguage}
                                           />
                                       )
                                   }}
                            />

                            <Route path="/library/"
                                   render={ ( { match } ) =>{
                                       setPage('library');
                                       return(
                                           <Library
                                               language={ language }
                                               changeLanguage={changeLanguage}
                                           />
                                       )
                                   }}
                            />

                            <Route path={[
                                '/s:sessionId/p:partNo/:next',
                                '/s:sessionId/p:partNo',
                                '/s:sessionId'
                            ]}
                                   render={ ( { match }) =>{
                                       setPage('');
                                       return materialRouter(match.params,language,changeLanguage)
                                   } }
                            />

                            <Route path={'/read/book/:contentId'}
                                   render={ ( { match }) =>{
                                       setPage('');
                                       const content = books[match.params.contentId]

                                       return(
                                           <Read
                                               content={content}
                                               language={language}
                                               changeLanguage={changeLanguage}
                                               imgPreloads={content.imgPreloads}
                                               audioPreloads={content.audioPreloads}
                                               key={match.params.contentId}
                                           />
                                       )
                                   }}
                            />

                            <Route path="/resources"
                                   render={ ( { match } ) =>{
                                       setPage('resources');
                                       return(
                                           <Resources
                                               language={language}
                                               changeLanguage={changeLanguage}
                                           />
                                       )
                                   }}
                            />

                            <Route path='/aboutGWE'
                                   render={ ( { match } ) => {
                                       setPage('aboutGWE');
                                       return (
                                           <AboutGWE
                                               language={language}
                                               changeLanguage={changeLanguage}
                                           />
                                       )
                                   }}
                            />

                            <Route exact path="/"
                                   render={ ( { match } ) => {
                                       setPage('splash');
                                       return (
                                           <Splash
                                               language={language}
                                               changeLanguage={changeLanguage}
                                           />
                                       )
                                   }}
                            />

                    </div>
                </div>

            </div>
    )
}
