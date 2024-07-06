import Link from 'next/link';
import { login, signup } from './actions';

export default function LoginPage() {
  return (
    <form>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" className="border" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" className="border" required />
      </div>
      <div>
        <button formAction={login}>Log in</button>
      </div>
      <div>
        <button formAction={signup}>Sign up</button>
      </div>
      <Link href="/reset-password">Reset Password</Link>
    </form>
  );
}
