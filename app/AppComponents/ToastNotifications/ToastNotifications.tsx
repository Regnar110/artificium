import React from 'react'
import { Toaster, resolveValue } from 'react-hot-toast';
const ToastNotifications = () => {
  return (

    <Toaster>
      {(t) => (
        <div
          style={{ opacity: t.visible ? 1 : 0, background: 'white', padding: 8 }}
        >
          {resolveValue(t.message, t)}
        </div>
      )}
    </Toaster>
    
  )
}

export default ToastNotifications
