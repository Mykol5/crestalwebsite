// export default function AdminPage() {
//     return (
//       <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
//         <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
//         <p className="text-gray-400">Only accessible at /admin</p>
//       </main>
//     );
//   }
  


'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Store token locally if needed (e.g. for further API calls)
      localStorage.setItem('adminToken', data.token);

      // Navigate to admin dashboard
      router.push('/admin/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
      <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded"
        />
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded"
        >
          Login
        </button>
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      </form>
    </main>
  );
}
