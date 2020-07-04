import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Map() {
    return (
        <div className="large">
            <fieldset>
                <legend className="legend">Location<i className="fas fa-street-view"></i></legend>
                <iframe className="map" title="alibahrami633-location-Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6322732749!2d144.49268535040093!3d-37.97123697758661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC!5e0!3m2!1sen!2sau!4v1585626492282!5m2!1sen!2sau"
                    frameborder="0" style={{ border: 0 }} aria-hidden="false"
                    tabindex="0">
                </iframe>
            </fieldset>
        </div>
    );
}

export default Map;