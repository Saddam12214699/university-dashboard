import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users } from "lucide-react";

interface UniversityHeroProps {
  name: string;
  tagline: string;
  established: string;
  ranking: string;
  onApplyClick: () => void;
}

export const UniversityHero = ({ name, tagline, established, ranking, onApplyClick }: UniversityHeroProps) => {
  return (
    <div className="relative bg-gradient-to-br from-primary via-university-dark-blue to-primary text-white py-20 px-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm font-medium">Established {established}</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            {name}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {tagline}
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Award className="h-5 w-5 text-gold" />
              <span className="text-sm">{ranking}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Users className="h-5 w-5 text-gold" />
              <span className="text-sm">10,000+ Students</span>
            </div>
          </div>
          
          <Button 
            onClick={onApplyClick}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          >
            Apply Now - Start Your Journey
          </Button>
        </div>
      </div>
    </div>
  );
};
