import React, { Component } from 'react';
import './App.css';
import SideBar from './Components/Sidebar/SideBar';
import Navbar from './Components/Navbar/NavBar';
import Tasks from './Components/Dashboard/Tasks/Tasks';
import List from './Components/Dashboard/List/CreateList';

class App extends Component {
  render() {
    return (
      <div className='app__container'> 
        <div className='sidebar__container'>
          <SideBar />
        </div>

        <div className='dashboard__container'> 
          <div className='navbar__container'> 
            <Navbar />
          </div>  
          <div className='main__containers'>
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
