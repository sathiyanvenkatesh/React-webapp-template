import React, { Component } from 'react'
import Banner from './Banner'
import Header from './Header'

 class Navebar extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Header/>
            </div>
        )
    }
}
export default Navebar;