import { Spin } from 'antd';
import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <Spin size="large" />
    </div>
  );
};

export default Spinner;
