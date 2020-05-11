import React,{Component} from 'react'

class Navbar extends Component{
    render(){
        return(
            <div className='nav'>
                <h2>Context App</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

export default Navbar