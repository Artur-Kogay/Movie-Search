'use client';

import { Alert, Button } from 'antd';
import { FC } from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

const Error: FC<Props> = ({ error, reset }) => {
  const errorStatus = Number(error.message.slice(0, 3));

  return (
    <>
      {errorStatus === 401 || errorStatus === 404 ? (
        <h1 className="text-center">Please add a rating for any movie on the search page!</h1>
      ) : (
        <Alert
          message={'Error'}
          description={error.message}
          type="error"
          showIcon
          action={
            <Button size="small" type="primary" onClick={() => reset()}>
              Reset
            </Button>
          }
        />
      )}
    </>
  );
};

export default Error;
