'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function ChangeEmailPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const supabase = createClient();

  const handler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await supabase.auth.updateUser(
        { email },
        {
          emailRedirectTo: 'http://localhost:3000/login'
        }
      );
      router.push('/login');
    } catch (error) {
      router.push('/error');
    }
  };

  return (
    <>
      <form onSubmit={handler}>
        <div>
          <label htmlFor="password">New Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            className="border"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>{email}</div>
        <button>Do Reset Email</button>
      </form>
    </>
  );
}
