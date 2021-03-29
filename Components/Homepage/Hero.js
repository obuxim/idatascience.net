import React from 'react'

const Hero = () => {
    return (
        <>                        
        <div className="image-cover hero_banner" style={{background: '#003783'}} data-overlay={0}>
           <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="banner-search-2 transparent">
                <h1 className="big-header-capt cl_2 mb-2">The leading Institute of data science </h1>
                <p>Join the leading institute of data science where thousands of high-flier data scientists learnt and have gained success. </p>
                <div className="mt-4">
                    <div className="banner-search shadow_high">
                    <div className="search_hero_wrapping">
                        <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-12">
                            <div className="form-group">
                            <div className="input-with-icon">
                                <input type="text" className="form-control" placeholder="Keyword" />
                                <img src="assets/img/search.svg" className="search-icon" alt />
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-12 pl-0">
                            <div className="form-group none">
                            <a href="#" className="btn search-btn full-width">Go</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="flixio pt-5">
                <img className="img-fluid" src="https://via.placeholder.com/550x490" alt />
                </div>
            </div>
            </div>
        </div>
        </div>

        </>
    )
}

export default Hero
