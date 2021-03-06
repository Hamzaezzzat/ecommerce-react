import React from "react";

function Footer() {
    return (
        <div className="  footer d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <div className="text-white mb-3 mb-md-0">
                Copyright © 2022. All rights reserved.
            </div>

            <div>
                <a href="#!" className="text-white mx-4">
                    <i className="fa fa-facebook-f"></i>
                </a>
                <a href="#!" className="text-white me-4">
                    <i className="fa fa-twitter"></i>
                </a>
                <a href="#!" className="text-white me-4">
                    <i className="fa fa-google"></i>
                </a>
                <a href="#!" className="text-white">
                    <i className="fa fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    );
}

export default Footer;
