type MainLoaderProps = {
    message: string
}

const MainLoader = ({ message }: MainLoaderProps) => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#121212] relative overflow-hidden font-sans">

            <style>{`
        /* Smooth Spin Animation 
           - Starts at 90deg (Bottom) -> Slow start (ease-in)
           - Whips over the top -> Fast middle
           - Ends at 450deg (Bottom) -> Slow end (ease-out)
           This creates a continuous, fluid motion without hard stops.
        */
        @keyframes spin-smooth {
          0% {
            transform: rotate(90deg);
          }
          100% {
            transform: rotate(450deg);
          }
        }
        
        @keyframes pulse-opacity {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Gradient Flow Animation
          Rotates the gradient definition itself inside the shape
        */
        @keyframes gradient-shift {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loader-spin-variable {
          animation: spin-smooth 1.8s ease-in-out infinite;
          transform-origin: center;
        }

        .text-pulse {
          animation: pulse-opacity 2s ease-in-out infinite;
        }

        /* Apply animation to the gradient element inside SVG if supported, 
           or fallback to static if not, but we use SMIL for better SVG support below */
      `}</style>

            {/* Main Loader Container */}
            <div className="relative flex flex-col items-center gap-10 p-12">

                {/* The Spinner SVG */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40">

                    {/* Darker Backing Ring for #121212 bg */}
                    <div className="absolute inset-0 rounded-full border-[6px] border-white/5 box-border"></div>

                    {/* The Actual Gradient Spinner */}
                    <svg
                        className="loader-spin-variable w-full h-full absolute inset-0 drop-shadow-2xl"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            {/* Gradient Definition 
                Using userSpaceOnUse allows the gradient to stay relative to the coordinate system,
                creating a "liquid" effect as the bar spins through it.
              */}
                            <linearGradient
                                id="spinner-gradient"
                                gradientUnits="userSpaceOnUse"
                                x1="0" y1="0" x2="100" y2="100"
                            >
                                <stop offset="0%" stopColor="rgb(184, 46, 252)">
                                    {/* Animating the colors slightly for extra life */}
                                    <animate attributeName="stop-color" values="rgb(184, 46, 252);rgb(41, 75, 244);rgb(184, 46, 252)" dur="4s" repeatCount="indefinite" />
                                </stop>
                                <stop offset="100%" stopColor="rgb(41, 75, 244)">
                                    <animate attributeName="stop-color" values="rgb(41, 75, 244);rgb(184, 46, 252);rgb(41, 75, 244)" dur="4s" repeatCount="indefinite" />
                                </stop>

                                {/* Rotates the gradient angle continuously */}
                                <animateTransform
                                    attributeName="gradientTransform"
                                    type="rotate"
                                    from="0 50 50"
                                    to="360 50 50"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                            </linearGradient>

                            {/* Enhanced Glow for Dark Mode */}
                            <filter id="glow-strong" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* The Spinning Circle */}
                        <circle
                            cx="50"
                            cy="50"
                            r="42"
                            stroke="url(#spinner-gradient)"
                            strokeWidth="6"
                            strokeLinecap="round"
                            strokeDasharray="180 300"
                            style={{ filter: 'url(#glow-strong)' }}
                        />
                    </svg>
                </div>

                {/* Minimal Text Label */}
                <div className="text-pulse text-xs uppercase tracking-[0.4em] text-white/40 font-medium whitespace-nowrap" >
                    {message}
                </div>
            </div>
        </div>
    );
};

export default MainLoader;