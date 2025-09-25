'use client';

import { Alert } from "antd";
import { FC, ReactNode, useEffect, useState } from "react";

interface Props {
    children: ReactNode;
}

const NetworkProvider: FC<Props> = ({ children }) => {
    const [isOnline, setIsOnline] = useState<boolean>(true)

    useEffect(() => {
        const updateStatus = () => setIsOnline(navigator.onLine);

        window.addEventListener('online', updateStatus)
        window.addEventListener('offline', updateStatus)

        updateStatus();

        return () => {
            window.removeEventListener('online', updateStatus);
            window.removeEventListener('offline', updateStatus)
        }
    }, [])
    return (
        <>
            {!isOnline && (
                <div className="!fixed !top-0 !left-0 !w-full z-[9999]">
                    <Alert
                        message="No network"
                        type="error"
                        showIcon
                    />
                </div>)
            }
            {children}
        </>
    )
}

export default NetworkProvider