import React from 'react'
import Form from '../components/Form'

const Home = () => {
  return (
    <section className='section section--home'> 
        <div className="blur blur--left"></div>
        <div className="o-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 banner-desktop">
                        <img src="images/banner.png" alt="" className=''/>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
        <div className="blur blur--right"></div>
    </section> 
  )
}

export default Home