import { Spin } from 'antd';
import React from 'react'

const LoadingComp = () => {
  return (
    <div className='absolute left-1/2 top-1/2'>
      <Spin size="large" style={{ color: '#a3a3a3'}} />
    </div>
  );
}

export default LoadingComp