import React, { Component } from 'react'
import PortofolioComponent from './portofolioComponent'
import PortofolioDetail from './portofolioModal'
import authImage from '../../../assets/images/porto/auth.png'
import webPorto from '../../../assets/images/porto/web-porto.png'
import pathListener from '../../../assets/images/porto/path-listener.png'
// import { Splide, SplideSlide } from '@splidejs/react-splide'
// import '@splidejs/splide/dist/css/splide.min.css';



class Portofolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            porto: [
                {name: 'Authentication', img: authImage, key: "auth"},  
                {name: 'Path Listener', img: pathListener, key: "pathListener"},  
                // {name: 'Web Portofolio', img: webPorto, key: "webPorto"},  
            ],
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
        if (this.state.porto.length > 0) {
            return(
                <section id='portoCont' className='cont1 porto'>
                    <h2>PORTO<span className='blue'>FOLIO</span></h2>
                    {/* <Splide options={ {
                        type: 'slide', 
                        padding: { left: 10, right: 20 },
                        fixedWidth: '300px',
                        perPage: 4,
                        autoWidth: true,
                        width: '100%',
                        rewind : true,
                    } }>
                    {this.state.porto.map((val) => {
                        return (
                            <SplideSlide>
                                <PortofolioComponent handleClick={this.handleClickPorto} porto={val} />
                            </SplideSlide>
                        )
                    })}
                    </Splide> */}

                    {this.state.porto.map((val) => {
                        return (
                            <PortofolioComponent handleClick={this.handleClickPorto} porto={val} />
                        )
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