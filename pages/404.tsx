import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Redirect404() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  });

  return null;
}
