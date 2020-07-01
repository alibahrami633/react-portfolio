import React from "react";
import "./style.css";

function Modal() {
    return (
        <div class="ui basic modal">
            <div class="ui icon header">
                Failure...
        </div>
            <div class="content red centered">
                <p></p>
            </div>
            <div class="actions">
                <div class="ui green ok inverted button">
                    <i class="checkmark icon"></i>
                    Success!
                </div>
            </div>
        </div>
    );
}

export default Modal;