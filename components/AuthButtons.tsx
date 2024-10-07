"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { getCurrentUser, logout } from '@/lib/auth';

export default function AuthButtons() {
  const [user, setUser] = useState<{ id: string; username: string } | null>(null);
  const router = useRouter();

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    router.push('/');
  };

  if (user) {
    return (
      <div className="flex items-center space-x-2">
        <span>欢迎, {user.username}</span>
        <Button onClick={handleLogout}>登出</Button>
      </div>
    );
  }

  return (
    <div className="flex space-x-2">
      <Button onClick={() => router.push('/login')}>登录</Button>
      <Button onClick={() => router.push('/register')}>注册</Button>
    </div>
  );
}