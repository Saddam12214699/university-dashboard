import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { universities } from "@/data/universities";

export default function ApiNested() {
  const [data] = useState({
    status: "success",
    message: "Nested JSON API Response",
    data: {
      universities: Object.values(universities).map(uni => ({
        id: uni.id,
        name: uni.name,
        basicInfo: {
          established: uni.established,
          location: uni.location,
          campusSize: uni.campusSize,
          ranking: uni.ranking
        },
        academics: {
          courses: uni.courses.map(course => ({
            name: course.name,
            duration: course.duration,
            fees: course.fees
          })),
          accreditation: uni.accreditation
        },
        placements: {
          statistics: {
            placementRate: uni.placements.placementRate,
            averagePackage: uni.placements.averagePackage,
            highestPackage: uni.placements.highestPackage
          },
          topRecruiters: uni.placements.topRecruiters
        },
        infrastructure: {
          facilities: uni.facilities,
          totalCount: uni.facilities.length
        }
      })),
      metadata: {
        totalUniversities: Object.keys(universities).length,
        totalCourses: Object.values(universities).reduce((acc, uni) => acc + uni.courses.length, 0),
        apiVersion: "1.0.0",
        generatedAt: new Date().toISOString()
      }
    }
  });

  useEffect(() => {
    document.title = "Nested API Response";
  }, []);

  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Nested JSON API Response</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-muted p-4 rounded-lg overflow-auto max-h-[600px]">
            {JSON.stringify(data, null, 2)}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
