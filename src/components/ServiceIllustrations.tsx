
import { motion, type Variants } from 'framer-motion';

export const DesignServicesIllustration = () => {
  return (
    // Change the wrapper div to this:
<div className="relative lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 w-[320px] h-[220px] z-0 pointer-events-none mx-auto flex items-center justify-center">
  <svg viewBox="0 0 320 220" className="w-full h-full overflow-visible">
    {/* ... rest of your SVG code ... */}
        {/* --- MAIN DIGITAL TABLET --- */}
        <g className="max-lg:animate-float lg:group-hover:animate-float" style={{ animationDelay: '0s' }}>
          <rect x="70" y="50" width="180" height="120" rx="8" fill="#e8f4dc" stroke="#b6c99c" strokeWidth="2" />
          <rect x="80" y="60" width="160" height="100" rx="4" fill="#ffffff" stroke="#b6c99c" strokeWidth="1" />
          
          {/* Internal Wireframe Elements */}
          <rect x="90" y="70" width="140" height="20" rx="2" fill="#f4f7f0" />
          <circle cx="105" cy="80" r="5" fill="#b6c99c" />
          <rect x="120" y="78" width="40" height="4" rx="2" fill="#b6c99c" />
          
          <rect x="90" y="100" width="80" height="50" rx="4" fill="#f4f7f0" stroke="#b6c99c" strokeDasharray="2 2" />
          <rect x="180" y="100" width="50" height="8" rx="2" fill="#b6c99c" />
          <rect x="180" y="115" width="40" height="4" rx="2" fill="#cfe1bb" />
          <rect x="180" y="125" width="45" height="4" rx="2" fill="#cfe1bb" />
          
          {/* Animated SVG Path "Drawing" itself inside the tablet */}
          <path 
            d="M 100 130 C 120 100, 140 150, 160 110" 
            fill="none" 
            stroke="#728156" 
            strokeWidth="2.5" 
            strokeLinecap="round"
            className="max-lg:animate-[dash_3s_linear_infinite] lg:group-hover:animate-[dash_3s_linear_infinite]"
          />
        </g>

        {/* --- FLOATING MOBILE UI WIREFRAME (Left) --- */}
        <g className="max-lg:animate-float lg:group-hover:animate-float" style={{ animationDelay: '0.5s' }}>
          <rect x="20" y="30" width="40" height="80" rx="6" fill="#ffffff" stroke="#b6c99c" strokeWidth="1.5" />
          <rect x="25" y="35" width="30" height="70" rx="3" fill="#e8f4dc" opacity="0.5" />
          <circle cx="40" cy="50" r="8" fill="#b6c99c" />
          <rect x="25" y="65" width="30" height="4" rx="2" fill="#b6c99c" />
          <rect x="25" y="75" width="20" height="3" rx="1.5" fill="#cfe1bb" />
        </g>

        {/* --- FLOATING PANTONE SWATCHES (Bottom Left) --- */}
        <g className="max-lg:animate-float lg:group-hover:animate-float" style={{ animationDelay: '1s' }}>
          <rect x="30" y="140" width="30" height="40" rx="2" fill="#ffffff" stroke="#b6c99c" strokeWidth="1.5" transform="rotate(-15 30 140)" />
          <rect x="40" y="140" width="30" height="40" rx="2" fill="#ffffff" stroke="#b6c99c" strokeWidth="1.5" />
          <rect x="42" y="142" width="26" height="20" fill="#88976c" />
          <rect x="42" y="166" width="15" height="3" fill="#b6c99c" />
        </g>

        {/* --- FLOATING WEB WIREFRAME (Top Right) --- */}
        <g className="max-lg:animate-float lg:group-hover:animate-float" style={{ animationDelay: '0.7s' }}>
          <rect x="250" y="40" width="50" height="40" rx="4" fill="#ffffff" stroke="#b6c99c" strokeWidth="1.5" />
          <rect x="255" y="45" width="40" height="15" rx="2" fill="#e8f4dc" />
          <circle cx="265" cy="52.5" r="4" fill="#88976c" />
          <rect x="255" y="65" width="20" height="4" rx="2" fill="#b6c99c" />
        </g>

        {/* --- FLOATING DIGITAL STYLUS (Bottom Right) --- */}
        <g className="max-lg:animate-float lg:group-hover:animate-float" style={{ animationDelay: '1.2s' }}>
          <path d="M 240 170 L 280 130 L 285 135 L 245 175 Z" fill="#ffffff" stroke="#88976c" strokeWidth="1.5" />
          <path d="M 240 170 L 235 178 L 245 175 Z" fill="#728156" />
          <line x1="270" y1="140" x2="275" y2="145" stroke="#b6c99c" strokeWidth="1.5" />
        </g>

        {/* --- DOTTED CONNECTION LINES (Active on Hover/Mobile) --- */}
        <path
          d="M 60 70 C 65 70, 65 80, 70 80"
          fill="none"
          stroke="#728156"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="max-lg:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 max-lg:animate-[pulse_2s_infinite] lg:group-hover:animate-[pulse_2s_infinite]"
        />
        <path
          d="M 250 60 C 240 60, 240 70, 230 70"
          fill="none"
          stroke="#728156"
          strokeWidth="2"
          strokeDasharray="4 4"
          className="max-lg:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 max-lg:animate-[pulse_2s_infinite] lg:group-hover:animate-[pulse_2s_infinite]"
        />
      </svg>
    </div>
  );
};

export const DevelopmentServicesIllustration = () => {
  return (
    // Change the wrapper div to this:
<div className="relative lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 w-[320px] h-[220px] z-0 pointer-events-none mx-auto flex items-center justify-center">
  <svg viewBox="0 0 320 220" className="w-full h-full overflow-visible">
    {/* ... rest of your SVG code ... */}
        {/* --- CENTRAL DESKTOP MONITOR --- */}
        <g className="max-lg:animate-float lg:group-hover:animate-float" style={{ animationDelay: '0.2s' }}>
          <path d="M 145 150 L 150 180 L 170 180 L 175 150 Z" fill="#f4f7f0" stroke="#b6c99c" strokeWidth="1.5" strokeLinejoin="round" />
          <rect x="130" y="180" width="60" height="6" rx="3" fill="#b6c99c" />
          <rect x="80" y="40" width="160" height="110" rx="6" fill="#ffffff" stroke="#728156" strokeWidth="2" />
          <rect x="82" y="42" width="156" height="14" fill="#e8f4dc" />
          <circle cx="92" cy="49" r="2.5" fill="#b6c99c" />
          <circle cx="102" cy="49" r="2.5" fill="#b6c99c" />
          <circle cx="112" cy="49" r="2.5" fill="#b6c99c" />
          <rect x="125" y="46" width="70" height="6" rx="3" fill="#ffffff" />
          <rect x="95" y="70" width="90" height="6" rx="3" fill="#cfe1bb" className="max-lg:animate-pulse lg:group-hover:animate-pulse" />
          <rect x="95" y="85" width="130" height="6" rx="3" fill="#e8f4dc" />
          <rect x="105" y="100" width="110" height="6" rx="3" fill="#e8f4dc" />
          <rect x="105" y="115" width="70" height="6" rx="3" fill="#cfe1bb" />
          <rect x="95" y="130" width="120" height="6" rx="3" fill="#e8f4dc" />
        </g>

        {/* --- FLOATING CODE GEAR (Top Left) --- */}
        <g className="max-lg:animate-float lg:group-hover:animate-float" style={{ animationDelay: '0.8s' }}>
          <circle 
            cx="45" cy="55" r="18" fill="none" stroke="#b6c99c" strokeWidth="3" strokeDasharray="6 4" 
            className="max-lg:animate-[spin_8s_linear_infinite] lg:group-hover:animate-[spin_8s_linear_infinite]" 
            style={{ transformOrigin: '45px 55px' }} 
          />
          <circle cx="45" cy="55" r="14" fill="#ffffff" stroke="#728156" strokeWidth="1.5" />
          <text x="45" y="59" textAnchor="middle" fontSize="12" fill="#2A311F" fontWeight="bold" fontFamily="monospace" letterSpacing="-1">&lt;/&gt;</text>
        </g>

        {/* --- FLOATING SERVER STACK (Top Right) --- */}
        <g className="max-lg:animate-float lg:group-hover:animate-float" style={{ animationDelay: '0.4s' }}>
          <rect x="230" y="35" width="60" height="18" rx="4" fill="#ffffff" stroke="#b6c99c" strokeWidth="1.5" />
          <line x1="238" y1="44" x2="265" y2="44" stroke="#cfe1bb" strokeWidth="3" strokeLinecap="round" />
          <circle cx="278" cy="44" r="3" fill="#728156" className="max-lg:animate-ping lg:group-hover:animate-ping" style={{ animationDuration: '2s' }} />
          
          <rect x="230" y="60" width="60" height="18" rx="4" fill="#ffffff" stroke="#b6c99c" strokeWidth="1.5" />
          <line x1="238" y1="69" x2="265" y2="69" stroke="#cfe1bb" strokeWidth="3" strokeLinecap="round" />
          <circle cx="278" cy="69" r="3" fill="#728156" className="max-lg:animate-ping lg:group-hover:animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
          
          <rect x="230" y="85" width="60" height="18" rx="4" fill="#ffffff" stroke="#b6c99c" strokeWidth="1.5" />
          <line x1="238" y1="94" x2="265" y2="94" stroke="#cfe1bb" strokeWidth="3" strokeLinecap="round" />
          <circle cx="278" cy="94" r="3" fill="#728156" className="max-lg:animate-ping lg:group-hover:animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
        </g>

        {/* --- FLOATING MOBILE RESPONSIVE LAYOUT (Bottom Left) --- */}
        <g className="max-lg:animate-float lg:group-hover:animate-float" style={{ animationDelay: '1.2s' }}>
          <rect x="30" y="110" width="46" height="85" rx="6" fill="#ffffff" stroke="#b6c99c" strokeWidth="1.5" />
          <rect x="36" y="118" width="34" height="28" rx="3" fill="#e8f4dc" />
          <line x1="36" y1="124" x2="64" y2="140" stroke="#cfe1bb" strokeWidth="1" />
          <line x1="64" y1="124" x2="36" y2="140" stroke="#cfe1bb" strokeWidth="1" />
          <rect x="36" y="154" width="34" height="6" rx="2" fill="#b6c99c" />
          <rect x="36" y="164" width="24" height="4" rx="2" fill="#cfe1bb" />
          <rect x="36" y="172" width="28" height="4" rx="2" fill="#cfe1bb" />
          <circle cx="53" cy="186" r="4" fill="none" stroke="#b6c99c" strokeWidth="1" />
        </g>

        {/* --- FLOATING E-COMMERCE CART (Bottom Right) --- */}
        <g className="max-lg:animate-float lg:group-hover:animate-float" style={{ animationDelay: '0.6s' }}>
          <rect x="235" y="130" width="60" height="60" rx="8" fill="#ffffff" stroke="#b6c99c" strokeWidth="1.5" />
          <path 
            d="M 245 145 L 250 145 L 255 165 L 278 165 L 282 150 L 252 150" 
            fill="none" stroke="#728156" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
          />
          <circle cx="258" cy="172" r="3" fill="#88976c" />
          <circle cx="275" cy="172" r="3" fill="#88976c" />
          <circle cx="267" cy="155" r="7" fill="#e8f4dc" />
          <text x="267" y="158.5" textAnchor="middle" fontSize="10" fill="#2A311F" fontWeight="bold">e</text>
        </g>

        {/* --- DATA CONNECTION LINES --- */}
        <path d="M 68 60 C 75 60, 75 70, 80 80" fill="none" stroke="#728156" strokeWidth="1.5" strokeDasharray="4 4" className="max-lg:opacity-80 lg:opacity-0 lg:group-hover:opacity-80 transition-opacity duration-500 max-lg:animate-[pulse_2s_infinite] lg:group-hover:animate-[pulse_2s_infinite]" />
        <path d="M 230 60 C 220 60, 220 70, 240 80" fill="none" stroke="#728156" strokeWidth="1.5" strokeDasharray="4 4" className="max-lg:opacity-80 lg:opacity-0 lg:group-hover:opacity-80 transition-opacity duration-500 max-lg:animate-[pulse_2s_infinite] lg:group-hover:animate-[pulse_2s_infinite]" />
        <path d="M 76 150 C 85 150, 90 140, 80 130" fill="none" stroke="#728156" strokeWidth="1.5" strokeDasharray="4 4" className="max-lg:opacity-80 lg:opacity-0 lg:group-hover:opacity-80 transition-opacity duration-500 max-lg:animate-[pulse_2s_infinite] lg:group-hover:animate-[pulse_2s_infinite]" />
        <path d="M 235 160 C 220 160, 210 150, 240 140" fill="none" stroke="#728156" strokeWidth="1.5" strokeDasharray="4 4" className="max-lg:opacity-80 lg:opacity-0 lg:group-hover:opacity-80 transition-opacity duration-500 max-lg:animate-[pulse_2s_infinite] lg:group-hover:animate-[pulse_2s_infinite]" />
      </svg>
    </div>
  );
};



export const FiberOpticNetwork = () => {
  // Centered starting point for the logo
  const start = { x: 180, y: 100 };
  
  // Custom SVG paths for all requested platforms
  const icons = {
    fb: (
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    ),
    whatsapp: (
      
  <path d="M17.472 14.382c-0.297 -0.149 -1.758 -0.867 -2.03 -0.967 -0.273 -0.099 -0.471 -0.148 -0.67 0.15 -0.197 0.297 -0.767 0.966 -0.94 1.164 -0.173 0.199 -0.347 0.223 -0.644 0.075 -0.297 -0.15 -1.255 -0.463 -2.39 -1.475 -0.883 -0.788 -1.48 -1.761 -1.653 -2.059 -0.173 -0.297 -0.018 -0.458 0.13 -0.606 0.134 -0.133 0.298 -0.347 0.446 -0.52 0.149 -0.174 0.198 -0.298 0.298 -0.497 0.099 -0.198 0.05 -0.371 -0.025 -0.52 -0.075 -0.149 -0.669 -1.612 -0.916 -2.207 -0.242 -0.579 -0.487 -0.5 -0.669 -0.51 -0.173 -0.008 -0.371 -0.01 -0.57 -0.01 -0.198 0 -0.52 0.074 -0.792 0.372 -0.272 0.297 -1.04 1.016 -1.04 2.479 0 1.462 1.065 2.875 1.213 3.074 0.149 0.198 2.096 3.2 5.077 4.487 0.709 0.306 1.262 0.489 1.694 0.625 0.712 0.227 1.36 0.195 1.871 0.118 0.571 -0.085 1.758 -0.719 2.006 -1.413 0.248 -0.694 0.248 -1.289 0.173 -1.413 -0.074 -0.124 -0.272 -0.198 -0.57 -0.347m-5.421 7.403h-0.004a9.87 9.87 0 0 1 -5.031 -1.378l-0.361 -0.214 -3.741 0.982 0.998 -3.648 -0.235 -0.374a9.86 9.86 0 0 1 -1.51 -5.26c0.001 -5.45 4.436 -9.884 9.888 -9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-0.003 5.45 -4.437 9.884 -9.885 9.884m8.413 -18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 0.16 5.335 0.157 11.892c0 2.096 0.547 4.142 1.588 5.945L0.057 24l6.305 -1.654a11.882 11.882 0 0 0 5.683 1.448h0.005c6.554 0 11.89 -5.335 11.893 -11.893a11.821 11.821 0 0 0 -3.48 -8.413Z" fill="#000000" stroke-width="1"/>

    ),
    google: (
  <path d="M12.48 10.92v3.28h7.84c-0.24 1.84 -0.853 3.187 -1.787 4.133 -1.147 1.147 -2.933 2.4 -6.053 2.4 -4.827 0 -8.6 -3.893 -8.6 -8.72s3.773 -8.72 8.6 -8.72c2.6 0 4.507 1.027 5.907 2.347l2.307 -2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 0.307 5.387 0.307 12s5.56 12 12.173 12c3.573 0 6.267 -1.173 8.373 -3.36 2.16 -2.16 2.84 -5.213 2.84 -7.667 0 -0.76 -0.053 -1.467 -0.173 -2.053H12.48z" fill="#000000" stroke-width="1"/>
),
    meta: (
      
  <path d="M6.915 4.03c-1.968 0 -3.683 1.28 -4.871 3.113C0.704 9.208 0 11.883 0 14.449c0 0.706 0.07 1.369 0.21 1.973a6.624 6.624 0 0 0 0.265 0.86 5.297 5.297 0 0 0 0.371 0.761c0.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633 -0.671 3.965 -2.444 0.76 -1.012 1.144 -1.626 2.663 -4.32l0.756 -1.339 0.186 -0.325c0.061 0.1 0.121 0.196 0.183 0.3l2.152 3.595c0.724 1.21 1.665 2.556 2.47 3.314 1.046 0.987 1.992 1.22 3.06 1.22 1.075 0 1.876 -0.355 2.455 -0.843a3.743 3.743 0 0 0 0.81 -0.973c0.542 -0.939 0.861 -2.127 0.861 -3.745 0 -2.72 -0.681 -5.357 -2.084 -7.45 -1.282 -1.912 -2.957 -2.93 -4.716 -2.93 -1.047 0 -2.088 0.467 -3.053 1.308 -0.652 0.57 -1.257 1.29 -1.82 2.05 -0.69 -0.875 -1.335 -1.547 -1.958 -2.056 -1.182 -0.966 -2.315 -1.303 -3.454 -1.303zm10.16 2.053c1.147 0 2.188 0.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548 -0.368 2.9 -1.839 2.9 -0.58 0 -1.027 -0.23 -1.664 -1.004 -0.496 -0.601 -1.343 -1.878 -2.832 -4.358l-0.617 -1.028a44.908 44.908 0 0 0 -1.255 -1.98c0.07 -0.109 0.141 -0.224 0.211 -0.327 1.12 -1.667 2.118 -2.602 3.358 -2.602zm-10.201 0.553c1.265 0 2.058 0.791 2.675 1.446 0.307 0.327 0.737 0.871 1.234 1.579l-1.02 1.566c-0.757 1.163 -1.882 3.017 -2.837 4.338 -1.191 1.649 -1.81 1.817 -2.486 1.817 -0.524 0 -1.038 -0.237 -1.383 -0.794 -0.263 -0.426 -0.464 -1.13 -0.464 -2.046 0 -2.221 0.63 -4.535 1.66 -6.088 0.454 -0.687 0.964 -1.226 1.533 -1.533a2.264 2.264 0 0 1 1.088 -0.285z" fill="#000000" stroke-width="1"/>

    ),
    ig: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
    email: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
    youtube: (
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </>
    )
  };

  // Distributed nodes: 3 on the left, 4 on the right
  const nodes = [
    // Left side nodes
    { id: 'fb', x: 50, y: 35, icon: icons.fb },
    { id: 'whatsapp', x: 30, y: 100, icon: icons.whatsapp },
    { id: 'google', x: 50, y: 165, icon: icons.google },
    
    // Right side nodes
    { id: 'meta', x: 310, y: 30, icon: icons.meta },
    { id: 'ig', x: 330, y: 80, icon: icons.ig },
    { id: 'email', x: 330, y: 130, icon: icons.email },
    { id: 'youtube', x: 310, y: 180, icon: icons.youtube }
  ];

  return (
    // Expanded the width class from 260px to 360px to accommodate left/right nodes
    // Change the wrapper div to this:
<div className="relative lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 w-[360px] h-[200px] z-0 pointer-events-none transition-opacity duration-1000 mx-auto flex items-center justify-center">
  <svg viewBox="0 0 360 200" className="w-full h-full overflow-visible">
    {/* ... rest of your SVG code ... */}
        
        {/* Center Logo Rings */}
        <circle cx={start.x} cy={start.y} r="55" fill="none" stroke="#728156" strokeWidth="1.5" className="opacity-0 max-lg:animate-[ping_2s_infinite] lg:group-hover:animate-[ping_2s_infinite]" />
        
        {/* Center Logo */}
        <image href="/logo.png" x={start.x - 40} y={start.y - 40} width="80" height="80" className="max-lg:animate-pulse lg:group-hover:animate-pulse z-30" style={{ filter: "drop-shadow(0px 4px 12px rgba(114,129,86,0.3))" }} />

        {nodes.map((node, i) => {
          // Dynamic path calculation to bend strings correctly whether they are on the left or right
          const isLeft = node.x < start.x;
          const cp1x = isLeft ? start.x - 70 : start.x + 70;
          const cp2x = isLeft ? node.x + 40 : node.x - 40;
          const path = `M ${start.x},${start.y} C ${cp1x},${start.y} ${cp2x},${node.y} ${node.x},${node.y}`;
          
          return (
            <g key={node.id}>
              {/* Static Background Line */}
              <path d={path} fill="none" stroke="#b6c99c" strokeWidth="1" opacity="0.6" />
              
              {/* Animated Light Beam */}
              <motion.path
                d={path} fill="none" stroke="#728156" strokeWidth="2.5" strokeLinecap="round"
                initial={{ pathLength: 0.1, pathOffset: 0 }}
                animate={{ pathOffset: [0, 1] }}
                transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
                style={{ filter: "drop-shadow(0px 0px 6px rgba(114,129,86,0.6))" }}
                className="max-lg:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 -z-10"
              />
              
              {/* Floating End Node */}
              <g className="max-lg:animate-float lg:group-hover:animate-float" style={{ animationDelay: `${i * 0.3}s` }}>
                <circle cx={node.x} cy={node.y} r="16" fill="#e8f4dc" stroke="#b6c99c" strokeWidth="1" />
                <circle cx={node.x} cy={node.y} r="20" fill="none" stroke="#b6c99c" strokeWidth="0.5" strokeDasharray="2 2" className="max-lg:animate-[spin_10s_linear_infinite] lg:group-hover:animate-[spin_10s_linear_infinite]" style={{ transformOrigin: `${node.x}px ${node.y}px` }} />
                
                {/* Embedded SVG Icon */}
                <g transform={`translate(${node.x - 10}, ${node.y - 10}) scale(0.83)`} fill="none" stroke="#2A311F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {node.icon}
                </g>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};



export const PerformanceChartIllustration = () => {
  // Added ': Variants' to explicitly lock in Framer Motion's strict types
  const lineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 } 
    }
  };

  const areaVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: "easeOut", delay: 0.8 } 
    }
  };

  const nodeVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring", stiffness: 300, damping: 20, delay: 1 + (i * 0.2) 
      }
    })
  };

  return (
    <div className="relative w-full h-[220px] lg:h-[280px] flex items-center justify-center pointer-events-none z-0">
      <svg viewBox="0 0 400 240" className="w-full h-full overflow-visible">
        
        <defs>
          {/* Smooth Gradient for the Area under the line */}
          <linearGradient id="perfGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#728156" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e8f4dc" stopOpacity="0" />
          </linearGradient>
          
          {/* Subtle Glow Filter for the top node */}
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- BACKGROUND GRID --- */}
        <g stroke="#b6c99c" strokeWidth="1" strokeDasharray="4 4" opacity="0.4">
          <line x1="40" y1="40" x2="360" y2="40" />
          <line x1="40" y1="90" x2="360" y2="90" />
          <line x1="40" y1="140" x2="360" y2="140" />
          <line x1="40" y1="190" x2="360" y2="190" />
        </g>

        {/* Y-Axis Labels (Optional, adds a technical feel) */}
        <g className="font-lato text-[9px] fill-[#88976c] font-bold tracking-widest" opacity="0.7">
          <text x="30" y="43" textAnchor="end">100</text>
          <text x="30" y="93" textAnchor="end">75</text>
          <text x="30" y="143" textAnchor="end">50</text>
          <text x="30" y="193" textAnchor="end">25</text>
        </g>

        {/* --- ANIMATED AREA FILL --- */}
        <motion.path
          variants={areaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          /* The path matches the line but closes at the bottom corners */
          d="M 40 190 L 40 160 C 100 160, 120 110, 180 120 C 240 130, 280 60, 340 50 L 340 190 Z"
          fill="url(#perfGradient)"
        />

        {/* --- ANIMATED TREND LINE --- */}
        <motion.path
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          d="M 40 160 C 100 160, 120 110, 180 120 C 240 130, 280 60, 340 50"
          fill="none"
          stroke="#728156"
          strokeWidth="3.5"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0px 8px 12px rgba(114,129,86,0.2))" }}
        />

        {/* --- DATA POINTS (Nodes) --- */}
        <motion.circle custom={0} variants={nodeVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} cx="40" cy="160" r="4" fill="#ffffff" stroke="#88976c" strokeWidth="2" />
        <motion.circle custom={1} variants={nodeVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} cx="180" cy="120" r="5" fill="#ffffff" stroke="#88976c" strokeWidth="2" />
        
        {/* Peak Performance Node with Pulse Effect */}
        <g>
          <motion.circle 
            custom={2} variants={nodeVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            cx="340" cy="50" r="12" fill="#e8f4dc" opacity="0.5" className="animate-[ping_2s_infinite]" 
          />
          <motion.circle 
            custom={2} variants={nodeVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} 
            cx="340" cy="50" r="6" fill="#ffffff" stroke="#728156" strokeWidth="3" filter="url(#glow)" 
          />
        </g>

        {/* --- FLOATING METRIC UI (Pops up at the peak) --- */}
        <motion.g
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.6, type: "spring" }}
          className="group-hover:-translate-y-1 transition-transform duration-500"
        >
          {/* Tooltip Box */}
          <rect x="260" y="10" width="80" height="26" rx="6" fill="#ffffff" stroke="#b6c99c" strokeWidth="1" style={{ filter: "drop-shadow(0px 4px 10px rgba(114,129,86,0.15))" }} />
          {/* Little triangle pointing to node */}
          <polygon points="335,36 345,36 340,42" fill="#ffffff" />
          <path d="M 335 36 L 340 42 L 345 36" fill="none" stroke="#b6c99c" strokeWidth="1" />
          
          {/* Tooltip Text */}
          <circle cx="272" cy="23" r="3" fill="#88976c" className="animate-pulse" />
          <text x="280" y="26" className="font-lato text-[10px] font-black fill-[#2A311F] tracking-wider">
            99.9%
          </text>
        </motion.g>

      </svg>
    </div>
  );
};

export const BackgroundCircuit = ({ path, endX, endY, duration, delay }: { path: string; endX: number; endY: number; duration: number; delay: number }) => (
  <g>
    <path d={path} fill="none" stroke="#b6c99c" strokeWidth="1.5" opacity="0.4" />
    <circle cx={endX} cy={endY} r="5" fill="none" stroke="#b6c99c" strokeWidth="1.5" opacity="0.5" />
    <circle cx={endX} cy={endY} r="2" fill="#88976c" opacity="0.6" />
    <motion.path
      d={path} fill="none" stroke="#88976c" strokeWidth="3.5" strokeLinecap="round"
      initial={{ pathLength: 0.05, pathOffset: 0, opacity: 0 }}
      animate={{ pathOffset: [0, 1], opacity: [0, 0.8, 0.8, 0] }}
      transition={{ duration: duration, delay: delay, repeat: Infinity, ease: "linear", times: [0, 0.1, 0.9, 1] }}
      style={{ filter: "drop-shadow(0px 0px 6px rgba(136,151,108,0.5))" }}
    />
  </g>
);