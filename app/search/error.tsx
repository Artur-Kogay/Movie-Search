'use client';

import { Alert, Button } from "antd";
import { FC } from "react";

interface Props {
    error: Error
    reset: () => void
}

const Error: FC<Props> = ({error, reset}) => {

  return (
    <Alert 
    message={'Error'}
    description={
        error.message
    }
    type="error"
    showIcon
    action={
        <Button size="small" type="primary" onClick={() => reset()}>
            Reset
        </Button>
    }
    />
  )
}

export default Error