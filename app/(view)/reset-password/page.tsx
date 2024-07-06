'use client';

import { useState } from 'react';
import { resetRequest, doReset } from './actions';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');

  const supabase = createClient();

  const handler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await supabase.auth.updateUser({ password });
      router.push('/login');
    } catch (error) {
      router.push('/error');
    }
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" className="border" required />
        </div>
        <div>
          <button formAction={resetRequest}>ResetRequest</button>
        </div>
      </form>
      <form onSubmit={handler}>
        <div>
          <label htmlFor="password">New Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            className="border"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {password}
        <button>Do Reset</button>
      </form>
    </>
  );
}
