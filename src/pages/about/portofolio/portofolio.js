import React, { Component } from 'react'
import PortofolioComponent from './portofolioComponent'
import PortofolioDetail from './portofolioModal'
import JSONData from '../../../assets/json/portofolio.json'

class Portofolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: false,
            portoDetail: {
                img: null,
                data: null
            }
        }
        this.handleClickWrapperDetailPorto = this.handleClickWrapperDetailPorto.bind(this)
        this.handleClickPorto = this.handleClickPorto.bind(this)
    }

    handleClickPorto(value) {
        const portoDetail = {
            img: value.img,
            data: value.data
        }
        
        this.setState({
            showDetail: value.showModal,
            portoDetail: portoDetail
        })
    }

    handleClickWrapperDetailPorto(value) {
        this.setState({showDetail: value})
    }

    render() {
        if (JSONData.porto.length > 0) {
            return(
                <section id='portoCont' className='cont1 porto'>
                    <h2>PORTO<span className='blue'>FOLIO</span></h2>
                    {JSONData.porto.map((val, idx) => {
                        return <PortofolioComponent handleClick={this.handleClickPorto} porto={val} index={idx} />
                    })}

                    {this.state.showDetail ? <PortofolioDetail detailPorto={this.state.portoDetail.data} 
                        img={this.state.portoDetail.img} handleClickWrapper={this.handleClickWrapperDetailPorto} /> 
                    : null}
                </section>
            )
        } else {
            return <></>
        }
        
    }
}

export default Portofolio