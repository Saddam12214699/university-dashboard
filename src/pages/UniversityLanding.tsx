import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { UniversityHero } from "@/components/UniversityHero";
import { LeadFormModal } from "@/components/LeadFormModal";
import { FeesModal } from "@/components/FeesModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { universities } from "@/data/universities";
import { Building2, BookOpen, TrendingUp, Award, Download, DollarSign, MapPin, Calendar } from "lucide-react";

export default function UniversityLanding() {
  const { id } = useParams<{ id: string }>();
  const [leadFormOpen, setLeadFormOpen] = useState(false);
  const [feesModalOpen, setFeesModalOpen] = useState(false);
  const [formTrigger, setFormTrigger] = useState<"apply" | "brochure" | "fees">("apply");

  if (!id || !universities[id]) {
    return <div>University not found</div>;
  }

  const university = universities[id];

  const openLeadForm = (trigger: "apply" | "brochure" | "fees") => {
    setFormTrigger(trigger);
    setLeadFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation universityName={university.name} />
      
      <UniversityHero
        name={university.name}
        tagline={university.tagline}
        established={university.established}
        ranking={university.ranking}
        onApplyClick={() => openLeadForm("apply")}
      />

      {/* Quick Actions */}
      <div className="bg-muted py-6 sticky top-16 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => setFeesModalOpen(true)}
              variant="outline"
              className="gap-2"
            >
              <DollarSign className="h-4 w-4" />
              Check Course-wise Fees
            </Button>
            <Button 
              onClick={() => openLeadForm("brochure")}
              variant="outline"
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              Download Brochure
            </Button>
            <Button 
              onClick={() => openLeadForm("apply")}
              className="gap-2"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">About {university.name}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">{university.overview}</p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Established: {university.established}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{university.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 className="h-4 w-4 text-primary" />
                    <span>Campus: {university.campusSize}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Accreditations & Rankings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {university.accreditation.map((acc, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>{acc}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>{university.ranking}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            Popular Courses
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {university.courses.map((course) => (
              <Card key={course.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{course.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    <strong>Duration:</strong> {course.duration}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Eligibility:</strong> {course.eligibility}
                  </p>
                  <p className="text-primary font-semibold text-lg pt-2">{course.fees}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button onClick={() => setFeesModalOpen(true)} size="lg">
              View Complete Fee Structure
            </Button>
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <section id="placements" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            Placements & Career Success
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold text-primary">{university.placements.placementRate}</p>
                <p className="text-sm text-muted-foreground mt-2">Placement Rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold text-primary">{university.placements.averagePackage}</p>
                <p className="text-sm text-muted-foreground mt-2">Average Package</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold text-primary">{university.placements.highestPackage}</p>
                <p className="text-sm text-muted-foreground mt-2">Highest Package</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground mt-2">Companies Visit</p>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Top Recruiters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {university.placements.topRecruiters.map((recruiter) => (
                  <span key={recruiter} className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                    {recruiter}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Building2 className="h-8 w-8 text-primary" />
            World-Class Facilities
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {university.facilities.map((facility) => (
              <Card key={facility} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6 flex items-start gap-3">
                  <span className="text-primary text-xl">✓</span>
                  <span className="text-sm">{facility}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary to-university-dark-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of successful students and transform your future with {university.name}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => openLeadForm("apply")}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white"
            >
              Apply Now
            </Button>
            <Button 
              onClick={() => openLeadForm("brochure")}
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024 {university.name}. All rights reserved.</p>
          <p className="text-xs mt-2 text-background/70">
            Admission Helpline: 1800-XXX-XXXX | Email: admissions@{university.id}.edu
          </p>
        </div>
      </footer>

      <LeadFormModal
        open={leadFormOpen}
        onOpenChange={setLeadFormOpen}
        universityId={id}
        trigger={formTrigger}
      />

      <FeesModal
        open={feesModalOpen}
        onOpenChange={setFeesModalOpen}
        universityId={id}
      />
    </div>
  );
}
