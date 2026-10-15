import React from 'react'

function Modal({ isOpen, title, children, onClose, footer, }) {

    if (!isOpen) {
        return null
    }

    return (
        <div className="modal-overlay" onClick={onClose} >
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 id="modal-title">{title}</h2>

          <button type="button" onClick={onClose} aria-label="Close modal" >
            &times;
          </button>
        </div>

        <div className="modal-body">
          {children}
        </div>

        {footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
    )
}

export default Modal