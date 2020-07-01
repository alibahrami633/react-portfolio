import React, { useState } from "react";
import "./style.css";

function Modal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    return (
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;