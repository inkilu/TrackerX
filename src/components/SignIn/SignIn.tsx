
type SignInProps = {
    handleGoogleLogin: () => void,
    loading: boolean
}

const SignIn = ({ handleGoogleLogin, loading }: SignInProps) => {
    return (
        <div className="app-container">
            <style>{`
        /* CSS Reset and Base Styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          overflow-y:hidden !important;
        }

        /* Simulating body styling on the main wrapper 
           since we are inside a React root 
        */
        .app-container {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          background-color: #1e1e1e;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          width: 100%;
          color: #333;
        }

        /* Container for the login card */
        .login-container {
          width: 100%;
          padding: 20px;
          display: flex;
          justify-content: center;
        }

        /* The main card styling */
        .login-card {
          background-color: #1e1e1e;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          text-align: center;
          transition: transform 0.2s ease;
        }

        /* Title Styling */
        .brand-title {
          font-size: 32px;
          font-weight: 700;
          color: #1a73e8;
          margin-bottom: 10px;
          letter-spacing: -0.5px;
        }

        .subtitle {
          font-size: 16px;
          color: white;
          margin-bottom: 32px;
        }

        /* Google Button Styling */
        .google-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          background-color: #ffffff;
          border: 1px solid #dadce0;
          border-radius: 4px;
          padding: 12px 16px;
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: #3c4043;
          cursor: pointer;
          transition: background-color 0.2s, box-shadow 0.2s, border-color 0.2s;
          text-decoration: none;
          user-select: none;
        }

        .google-btn:hover {
          background-color: #f7f8f8;
          box-shadow: 0 1px 3px rgba(60, 64, 67, 0.3);
          border-color: #d2e3fc;
        }

        .google-btn:active {
          background-color: #eff3f4;
          box-shadow: none;
        }

        .google-btn:focus {
          outline: none;
          border-color: #1a73e8;
          box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);
        }

        .google-btn.loading {
          opacity: 0.7;
          cursor: wait;
        }

        /* Google Icon Wrapper */
        .google-icon-wrapper {
          width: 20px;
          height: 20px;
          margin-right: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Divider */
        .divider {
          display: flex;
          align-items: center;
          margin: 24px 0;
          color: #5f6368;
          font-size: 14px;
        }

        .divider::before,
        .divider::after {
          content: "";
          flex: 1;
          border-bottom: 1px solid #dadce0;
        }

        .divider::before {
          margin-right: 10px;
        }

        .divider::after {
          margin-left: 10px;
        }

        /* Form Elements */
        .input-group {
          margin-bottom: 20px;
        }

        .email-input {
          width: 100%;
          padding: 12px;
          margin-bottom: 10px;
          border: 1px solid #dadce0;
          border-radius: 4px;
          box-sizing: border-box;
          font-size: 16px;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background-color: #1a73e8;
          color: white;
          border: none;
          border-radius: 4px;
          font-weight: 500;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.2s;
        }

        .submit-btn:hover {
          background-color: #1558b0;
        }

        /* Footer Links */
        .footer-links {
            margin-top: 24px;
            font-size: 12px;
            color: #5f6368;
        }

        .footer-links a {
            color: #1a73e8;
            text-decoration: none;
            margin: 0 5px;
        }

        .footer-links a:hover {
            text-decoration: underline;
        }

        /* Responsive Adjustments */
        @media (max-width: 480px) {
            .login-card {
                padding: 30px 20px;
                box-shadow: none;
                background-color: transparent;
            }
            
            .app-container {
                background-color: #1e1e1e;
                align-items: flex-start; /* Align top on mobile */
                padding-top: 50%;
            }
        }
        
        @media (min-width: 481px) {
             .login-card {
                 background-color: #1e1e1e; 
             }
        }
      `}</style>

            <div className="login-container">
                <div className="login-card">
                    {/* Logo / Title */}
                    <h1 className="brand-title">TrackX</h1>
                    <p className="subtitle">Welcome back! Please sign in.</p>

                    {/* Google Sign In Button */}
                    <button
                        className={`google-btn ${loading ? 'loading' : ''}`}
                        onClick={handleGoogleLogin}
                        disabled={loading}
                    >
                        <div className="google-icon-wrapper">
                            {/* Standard Google SVG Icon */}
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" style={{ display: 'block' }}>
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                            </svg>
                        </div>
                        {loading ? 'Signing in...' : 'Continue with Google'}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default SignIn