import { Spin } from 'antd'
import React from 'react'

const MySpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <Spin size="large" />
    </div>
  )
}

export default MySpinner