import React from 'react';


import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';



class  App extends React.Component 
{
    
    constructor() { 
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    
      componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=> this.setState({robots: users}));
    }


    onSearchChange = (event) => {
        // update state 
        this.setState  ({searchfield: event.target.value})

    }


    render () {
        const filteredRoborts = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());                      //includes prebuild method in javascript
        })

        if(this.state.robots.length === 0) {
            return <h1> Loading </h1>;
        }else {
            return (
                <div className='tc'>
                    <h1 className='f2'> RoboFriends </h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = {filteredRoborts} />
                    </Scroll>
                </div>
            );
        }

       
    }
 
}



export default App;