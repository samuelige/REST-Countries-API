import React from 'react'

const Country = () => {
    return (
        <div className="country">
            <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="country flag"/>
            {/* <div className="country-image">
                <img src="https://randomuser.me/api/portraits/men/90.jpg" alt="country flag"/>
            </div> */}
            <div className="content">
                <h2>Lorem.</h2>
                <div className="other-content">
                    <h5>Population: <span className="item">Lorem.</span></h5>
                    <h5>Region: <span className="item">Lorem.</span></h5>
                    <h5>Capital: <span className="item">Lorem.</span></h5>
                </div>
            </div>
        </div>
    )
}

export default Country
