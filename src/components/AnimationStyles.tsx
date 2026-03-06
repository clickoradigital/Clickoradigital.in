

export const AnimationStyles = () => (
  <style>{`
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
    }
    @keyframes dash {
      0% { stroke-dasharray: 150; stroke-dashoffset: 150; }
      50% { stroke-dasharray: 150; stroke-dashoffset: 0; }
      100% { stroke-dasharray: 150; stroke-dashoffset: -150; }
    }
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }
  `}</style>
);