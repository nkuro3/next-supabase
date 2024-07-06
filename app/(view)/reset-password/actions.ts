'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClient } from '@/utils/supabase/server';

// import { NextResponse, NextRequest } from 'next/server';

export async function resetRequest(formData: FormData) {
  const supabase = createClient();

  const email = formData.get('email') as string;

  // const res = NextResponse.next();
  // console.log('res.url', res.url);
  // const redirectTo = new URL('/reset-password', res.url);

  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'http://localhost:3000/reset-password'
  });

  console.log('Password reset email sent');
}

export async function doReset(formData: FormData) {
  const supabase = createClient();

  const password = formData.get('password') as string;

  console.log('Resetting password');
  console.log('password', password);

  try {
    await supabase.auth.updateUser({ password });
    // https://www.reddit.com/r/Supabase/comments/1dbsjg9/calling_updateuser_from_nextjs_server_action/?rdt=55528
    // server action 内でupdateUserするとエラーになるのはバグらしい。
    revalidatePath('/', 'layout');
    redirect('/');
  } catch (error) {
    redirect('/error');
  }
}
