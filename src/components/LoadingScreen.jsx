import { useState, useEffect } from "react";

export default function LoadingScreen({ isLoading = true }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setProgress(100);
      return;
    }

    // Start progress immediately
    setProgress(10);

    // Increment progress gradually
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 20;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [isLoading]);

  if (!isLoading && progress === 100) {
    return null;
  }

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center z-[9999] transition-opacity duration-500 ${progress === 100 ? "opacity-0" : "opacity-100"}`}>
      {/* Logo atau Branding */}
      <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
        Portofolio
      </h1>

      {/* Progress Container */}
      <div className="w-64 mb-8">
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden shadow-lg">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Progress Text */}
      <p className="text-gray-300 text-lg font-semibold">
        {Math.round(progress)}%
      </p>

      {/* Loading Animation */}
      <div className="mt-8 flex gap-2">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></div>
        <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
      </div>
    </div>
  );
}
