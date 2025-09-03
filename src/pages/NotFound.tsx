import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FuzzyText from "@/components/ui/fuzzy-text";
import LetterGlitch from "@/components/ui/letter-glitch";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Glitch */}
      <div className="absolute inset-0 -z-10">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
          glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4">
          <FuzzyText baseIntensity={0.2}>404</FuzzyText>
        </h1>
        <p className="text-2xl text-gray-300 mb-6">
          <FuzzyText baseIntensity={0.2}>Oops! Page not found</FuzzyText>
        </p>
        <a href="/" className="text-blue-400 hover:text-blue-600 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
