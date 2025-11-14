import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

interface NavigationProps {
  universityName?: string;
}

export const Navigation = ({ universityName }: NavigationProps) => {
  return (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <GraduationCap className="h-8 w-8" />
            <span className="font-bold text-xl">{universityName || "University Portal"}</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#courses" className="hover:text-gold transition-colors">Courses</a>
            <a href="#placements" className="hover:text-gold transition-colors">Placements</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
