import React from 'react'

const Trip = () => {
    return (
        <>
            <div className="trips_wrap full light-colors">
            <div className="container">
                <div className="row m-0">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="trips">
                    <div className="trips_icons">
                        <i className="ti-video-camera" />
                    </div>
                    <div className="trips_detail">
                        <h4>Quality eLearning with Expert Data Scientists</h4>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="trips">
                    <div className="trips_icons">
                        <i className="ti-medall" />
                    </div>
                    <div className="trips_detail">
                        <h4>Resourceful Modules with Interactive Sessions</h4>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="trips none">
                    <div className="trips_icons">
                        <i className="ti-infinite" />
                    </div>
                    <div className="trips_detail">
                        <h4>Accredited Certificate Recognised Worldwide</h4>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>


        </>
    )
}

export default Trip
