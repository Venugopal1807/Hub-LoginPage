import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ setAuth }) => {
  const [user, setUser] = useState({ name: 'User' });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setAuth(false);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">HubCredo Dashboard</h1>
        <button 
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 text-sm"
        >
          Logout
        </button>
      </nav>

      <div className="max-w-4xl mx-auto mt-10 p-6">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome, {user.name}!</h2>
          <p className="text-gray-600 mb-6">
            You have successfully authenticated into the system. 
            This is a protected route.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 border rounded bg-blue-50 border-blue-100">
              <h3 className="font-bold text-blue-700">Profile Status</h3>
              <p className="text-sm text-gray-600">Active</p>
            </div>
            <div className="p-4 border rounded bg-green-50 border-green-100">
              <h3 className="font-bold text-green-700">Role</h3>
              <p className="text-sm text-gray-600">Internship</p>
            </div>
            <div className="p-4 border rounded bg-purple-50 border-purple-100">
              <h3 className="font-bold text-purple-700">Additional</h3>
              <p className="text-sm text-gray-600">n8n Trigger Integrated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;