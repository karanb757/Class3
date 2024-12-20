import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toast = () => {
  const notifySuccess = () => toast.success('🦄 Success notification!');
  const notifyError = () => toast.error('❤️ Error notification!');
  const notifyInfo = () => toast.info('👌 Info notification!');
  const notifyWarning = () => toast.warning('Warning notification!');

  return (
    <div className="grid place-items-center h-screen bg-gray-100">
      <div className="space-y-2">
        <button
          onClick={notifySuccess}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Success Toast
        </button>

        <button
          onClick={notifyError}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Error Toast
        </button>

        <button
          onClick={notifyInfo}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Info Toast
        </button>

        <button
          onClick={notifyWarning}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          Warning Toast
        </button>
      </div>
      <ToastContainer />
    </div>
    )
}

export default Toast