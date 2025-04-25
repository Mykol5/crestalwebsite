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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

export default function AdminPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // 1. Firebase login
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Get ID token
      const token = await user.getIdToken();

      // 3. Send token to backend
      const res = await fetch('https://crestal-backend.onrender.com/api/adminlogin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Admin login failed');
      }

      // 4. Store token locally (optional for further admin APIs)
      localStorage.setItem('adminToken', token);

          // Log the token to check if it's saved correctly
      console.log('Token saved:', localStorage.getItem('adminToken'));

      // 5. Navigate to admin dashboard
      // router.push('/admin/dashboard');
          // Instead of using router.push, use window.location.href to redirect to a different URL with the token in the query params
      // window.location.href = `https://crestaladmin.netlify.app/auth?token=${token}`;
      window.location.href = `https://admin.crestal.app/auth?token=${token}`;
      // window.location.href = `http://192.168.97.108:3001/auth?token=${token}`;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className={`w-full font-bold py-2 rounded ${
            loading
              ? 'bg-orange-300 cursor-not-allowed'
              : 'bg-orange-500 hover:bg-orange-600'
          }`}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
      </form>
    </main>
  );
}
