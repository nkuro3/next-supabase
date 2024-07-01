'use client';

import { useState } from 'react';

const PasswordConfirmForm = () => {
  const [password, setPassword] = useState('');

  const handlerConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirm = e.target.value;
    if (!confirm) {
      e.target.setCustomValidity('このフィールドを入力してください。');
    } else if (password !== confirm) {
      e.target.setCustomValidity('パスワードが一致しません。');
    } else {
      e.target.setCustomValidity('');
    }
  };

  return (
    <>
      <div className="mb-10">
        <label>Password</label>
        <input
          className="w-full p-2 bg-color-444 border"
          type="password"
          name="password"
          placeholder="password"
          required
          pattern="^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).{10,}$"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="text-left text-sm text-gray-500 h-0">
          大文字・小文字・数字を含む10桁以上のパスワードを入力してください。
        </div>
      </div>
      <div className="mb-10">
        <label>Confirm Password</label>
        <input
          className="w-full p-2 bg-color-444 border"
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          required
          onChange={handlerConfirm}
        />
      </div>
    </>
  );
};

export default PasswordConfirmForm;
