
import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter,
  Routes,
  Route,

} from 'react-router-dom'

export default class App extends Component {
 
  apiKey="75ba10542b1344969f47dd0ab1e050c1";
  newsPageSize=15;
  state = {
    progress:0
  }

  setProgress =(prog)=>{
    this.setState({progress:prog})
  }

  
 
  render() {
    return (
      <div>
        {/* APIKEY:75ba10542b1344969f47dd0ab1e050c1 */}
       <BrowserRouter>
       <NavBar className="navbar"/>
       <LoadingBar
        color='#000000'
        progress={this.state.progress}
        height={3}
        onLoaderFinished={()=>this.setProgress(0)}
        transitionTime={500}
        ></LoadingBar>
      
       <div className="container content">
       
       <Routes> 
        
        <Route exact path="/"    element={<News setProgress={this.setProgress} apiKey={this.apiKey}     key="/" className="article" country="in" category="general" pageSize={this.newsPageSize}/>}></Route>
        <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}     key="general"  className="article" country="in" category="general" pageSize={this.newsPageSize}/>}></Route>
        <Route exact path="/business"   element={<News setProgress={this.setProgress}apiKey={this.apiKey}     key="business" className="article" country="in" category="business" pageSize={this.newsPageSize}/>}></Route>
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress}apiKey={this.apiKey}     key="entertainment"  className="article" country="in" category="entertainment" pageSize={this.newsPageSize}/>}></Route>
        <Route exact path="/health"   element={<News setProgress={this.setProgress}apiKey={this.apiKey}     key="health" className="article" country="in" category="health" pageSize={this.newsPageSize}/>}></Route>
        <Route exact path="/science"   element={<News setProgress={this.setProgress}apiKey={this.apiKey}     key="science" className="article" country="in" category="science" pageSize={this.newsPageSize}/>}></Route>
        <Route exact path="/sports"   element={<News setProgress={this.setProgress}apiKey={this.apiKey}     key="sports" className="article" country="in" category="sports" pageSize={this.newsPageSize}/>}></Route>
        <Route exact path="/technology"   element={<News setProgress={this.setProgress}apiKey={this.apiKey}     key="technology" className="article" country="in" category="technology" pageSize={this.newsPageSize}/>}></Route>
        
        </Routes>
        </div>
        
       
       </BrowserRouter>
        
      </div>
    )
  }
}



