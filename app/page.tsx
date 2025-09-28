'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Alert, Spin } from 'antd';
import { useCreateGuestSessionId } from './lib/hooks/useCreateGuestSessionId';

export default function HomeRedirect() {
  const router = useRouter();

  const { guestSessionId, guestError, createGuestSession } = useCreateGuestSessionId();

  useEffect(() => {
    createGuestSession();
  }, []);

  useEffect(() => {
    if (guestSessionId) {
      router.push('/search');
    }
  }, [guestSessionId, router]);

  if (guestError) {
    return (
      <Alert
        message="Guest session error"
        description={guestError}
        type="error"
        closable
        className="!fixed !top-0 !right-0 z-[9999]"
      />
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[9999]">
      <Spin size="large" />
    </div>
  );
}
