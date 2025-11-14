import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, ArrowRight, Award, Users, Building2 } from "lucide-react";
import { universities } from "@/data/universities";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-university-dark-blue to-primary text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto relative z-10 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm font-medium">University Admission Portal</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Shape Your Future with <br />India's Leading Universities
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
            Discover world-class education, cutting-edge research facilities, and career opportunities at premier institutions
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <Award className="h-6 w-6 text-gold" />
              <div className="text-left">
                <div className="text-2xl font-bold">NAAC A+</div>
                <div className="text-xs text-white/70">Accredited</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <Users className="h-6 w-6 text-gold" />
              <div className="text-left">
                <div className="text-2xl font-bold">20,000+</div>
                <div className="text-xs text-white/70">Students</div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
              <Building2 className="h-6 w-6 text-gold" />
              <div className="text-left">
                <div className="text-2xl font-bold">90+ Acres</div>
                <div className="text-xs text-white/70">Campus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Explore Our Universities</h2>
            <p className="text-xl text-muted-foreground">
              Choose from our prestigious institutions and start your educational journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(universities).map((university) => (
              <Card key={university.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                      {university.accreditation[0]}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{university.name}</CardTitle>
                  <CardDescription className="text-base">{university.tagline}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {university.overview}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 py-3 border-y">
                    <div>
                      <p className="text-xs text-muted-foreground">Established</p>
                      <p className="font-semibold">{university.established}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-semibold">{university.location}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Highlights:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {university.placements.placementRate} Placement
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {university.placements.averagePackage} Avg Package
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {university.courses.length}+ Courses
                      </span>
                    </div>
                  </div>

                  <Link to={`/university/${university.id}`}>
                    <Button className="w-full group" size="lg">
                      Explore {university.name}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary to-university-dark-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Dream Career Starts Here
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Join thousands of students who have transformed their lives through quality education
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/university/apex">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Explore Apex University
              </Button>
            </Link>
            <Link to="/university/summit">
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                Explore Summit Institute
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <GraduationCap className="h-12 w-12 mx-auto mb-4" />
          <p className="text-sm mb-2">© 2024 University Admission Portal. All rights reserved.</p>
          <p className="text-xs text-background/70">
            Admissions Helpline: 1800-XXX-XXXX | Email: info@universityadmissions.edu
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
