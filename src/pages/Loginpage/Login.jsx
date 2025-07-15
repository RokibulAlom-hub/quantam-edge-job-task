import React, { useState } from 'react';
import { Eye, EyeOff, Facebook, Apple } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl max-w-4xl w-full overflow-hidden">
        <div className="flex">
          {/* Left Side - Login Form */}
          <div className="w-1/2 p-12">
            <div className="max-w-sm mx-auto">
              <h1 className="text-3xl font-bold text-white mb-2">Login your account</h1>
              <p className="text-gray-400 mb-8">
                Don't have an account? <a href="#" className="text-green-400 hover:text-green-300">Sign Up</a>
              </p>

              <div className="space-y-6">
                {/* Email Input */}
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    />
                    <div className="absolute left-3 top-3 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    />
                    <div className="absolute left-3 top-3 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-green-600 bg-gray-800 border-gray-600 rounded focus:ring-green-500"
                    />
                    <span className="text-gray-400 text-sm">Remember Me</span>
                  </label>
                  <a href="#" className="text-gray-400 hover:text-green-400 text-sm">Forgot Password?</a>
                </div>

                {/* Login Button */}
                <button
                  onClick={() => console.log('Login clicked')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Login Now
                </button>

                {/* OR Divider */}
                <div className="text-center">
                  <span className="text-gray-400 text-sm">OR</span>
                </div>

                {/* Social Login Buttons */}
                <div className="flex justify-center space-x-4">
                  <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                    <Facebook size={20} className="text-white" />
                  </button>
                  <button className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                    <Apple size={20} className="text-white" />
                  </button>
                  <button className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-1/2 relative">
            <div className="h-full bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-64 h-48 bg-white rounded-lg shadow-lg mb-4 flex items-center justify-center">
                  <div className="text-gray-400 text-6xl">👥</div>
                </div>
                <p className="text-gray-600">Team collaboration workspace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}