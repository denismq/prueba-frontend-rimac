import React from 'react'
import Form from '../components/Form'

const Home = () => {
  return (
    <main> 
        <div className="o-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner-desktop">
                            <img src="images/banner.png" alt="" className=''/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    </main> 
  )
}

export default Home