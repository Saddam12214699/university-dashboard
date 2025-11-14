import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { universities } from "@/data/universities";
import { GraduationCap } from "lucide-react";

interface FeesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  universityId: string;
}

export const FeesModal = ({ open, onOpenChange, universityId }: FeesModalProps) => {
  const university = universities[universityId];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Course-wise Fee Structure</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {university.courses.map((course) => (
            <div key={course.name} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{course.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Duration: {course.duration}</p>
                  <p className="text-sm text-muted-foreground">Eligibility: {course.eligibility}</p>
                  <div className="mt-2 pt-2 border-t">
                    <p className="text-primary font-semibold text-lg">{course.fees}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-muted p-4 rounded-lg mt-4">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> Fees mentioned are indicative and subject to change. Scholarships available for eligible students. 
              Additional charges may apply for hostel, transport, and other facilities.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
