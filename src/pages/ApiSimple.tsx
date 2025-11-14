import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ApiSimple() {
  const [data] = useState({
    status: "success",
    message: "Simple API Response",
    data: {
      universities: ["Apex University", "Summit Institute of Technology"],
      totalCourses: 8,
      totalStudents: 20000,
      establishedYears: [2005, 2010],
      accreditations: ["NAAC", "NBA", "UGC", "AICTE"]
    },
    timestamp: new Date().toISOString()
  });

  useEffect(() => {
    document.title = "Simple API Response";
  }, []);

  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Simple JSON API Response</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
