'use client';

import { Alert, Button } from 'antd';
import { FC } from 'react';

interface Props {
  error: Error;
}

const Error: FC<Props> = ({ error }) => {
  return (
    <>
      {error && (
        <h1 className="text-center">Please add a rating for any movie on the search page!</h1>
      )}
    </>
  );
};

export default Error;
