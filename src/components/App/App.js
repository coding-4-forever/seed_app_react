import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from '../Routes'
import { Main } from '../Navigation/Main'
import Footer from '../Footer/Footer'
import AddTodo from '../Todo/AddTodo'
import TodoList from '../Todo/TodoList'

class  App extends Component {

  render() {

    return (

        <Router>
          <div className="app">
            {/*<header className="header">*/}
              {/*/!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
              {/*<p>*/}
                {/*Edit <code>src/App.js</code> and save to reload.*/}
              {/*</p>*/}
              {/*/!*<a*!/*/}
                {/*/!*className="App-link"*!/*/}
                {/*/!*href="https://reactjs.org"*!/*/}
                {/*/!*target="_blank"*!/*/}
                {/*/!*rel="noopener noreferrer"*!/*/}
              {/*/!*>*!/*/}
                {/*/!*Learn React*!/*/}
              {/*/!*</a>*!/*/}

            {/*</header>*/}
              {/*<Main/>*/}
              {/*<Routes/>*/}

              <AddTodo />
              <TodoList />
              <Footer />

          </div>
        </Router>
    );
  }
}

export default App;