'use client';

import { useState } from "react";

export const useLoading = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const startLoading = (): void => setIsLoading(true);

    const stopLoading = (): void => setIsLoading(false);

    return { isLoading, startLoading, stopLoading };
}
