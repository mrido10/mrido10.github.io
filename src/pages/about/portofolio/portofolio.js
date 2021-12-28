import React, { Component } from 'react'
import PortofolioComponent from './portofolioComponent'
import moneyManager from '../../../assets/images/money-manager.jpg'

class Portofolio extends Component {
    state = {
        porto: [
            // {name: 'Money Manager', img: moneyManager},
            // {name: 'Money Manager', img: moneyManager},
            // {name: 'Money Manager', img: moneyManager},
            // {name: 'Money Manager', img: moneyManager},
        ]
    }
    render() {
        if (this.state.porto.length > 0) {
            return(
                <section id='portoCont' className='cont1 porto'>
                    <h2>PORTO<span className='blue'>FOLIO</span></h2>
                    {this.state.porto.map((val) => {
                        return <PortofolioComponent name={val.name} img={val.img} />
                    })}
                    
                </section>
            )
        } else {
            return <></>
        }
        
    }
}

export default Portofolio