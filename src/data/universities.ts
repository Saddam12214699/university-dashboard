export interface Course {
  name: string;
  duration: string;
  fees: string;
  eligibility: string;
}

export interface University {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  established: string;
  accreditation: string[];
  ranking: string;
  courses: Course[];
  facilities: string[];
  placements: {
    averagePackage: string;
    highestPackage: string;
    topRecruiters: string[];
    placementRate: string;
  };
  location: string;
  campusSize: string;
}

export const universities: Record<string, University> = {
  apex: {
    id: "apex",
    name: "Apex University",
    tagline: "Excellence in Education, Leadership in Innovation",
    overview: "Apex University is a leading private institution committed to academic excellence and innovation. With state-of-the-art infrastructure and world-class faculty, we prepare students for global careers through industry-aligned programs and hands-on learning experiences.",
    established: "2005",
    accreditation: ["NAAC A+ Grade", "NBA Accredited", "UGC Approved"],
    ranking: "Ranked #15 among Private Universities in India",
    courses: [
      {
        name: "B.Tech Computer Science",
        duration: "4 Years",
        fees: "₹2,50,000 - ₹3,00,000 per year",
        eligibility: "10+2 with 60% in PCM"
      },
      {
        name: "MBA",
        duration: "2 Years",
        fees: "₹3,50,000 - ₹4,00,000 per year",
        eligibility: "Graduation with 50% marks"
      },
      {
        name: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        fees: "₹2,00,000 - ₹2,50,000 per year",
        eligibility: "10+2 with 60% in PCM"
      },
      {
        name: "BBA",
        duration: "3 Years",
        fees: "₹1,50,000 - ₹2,00,000 per year",
        eligibility: "10+2 with 50% marks"
      }
    ],
    facilities: [
      "Smart Classrooms with AI Integration",
      "Research & Innovation Labs",
      "24/7 Library with Digital Resources",
      "Sports Complex & Gymnasium",
      "Medical Facilities",
      "International Hostel Accommodations",
      "Entrepreneurship Cell & Incubation Center",
      "Industry Collaboration Centers"
    ],
    placements: {
      averagePackage: "₹8.5 LPA",
      highestPackage: "₹45 LPA",
      topRecruiters: ["Google", "Microsoft", "Amazon", "Deloitte", "TCS", "Infosys", "Wipro", "Accenture"],
      placementRate: "95%"
    },
    location: "Bangalore, Karnataka",
    campusSize: "50 Acres"
  },
  summit: {
    id: "summit",
    name: "Summit Institute of Technology",
    tagline: "Scaling New Heights in Technical Education",
    overview: "Summit Institute of Technology stands as a beacon of technical excellence, fostering innovation and entrepreneurship. Our curriculum blends theoretical knowledge with practical applications, supported by cutting-edge laboratories and industry partnerships that ensure our graduates are industry-ready.",
    established: "2010",
    accreditation: ["NAAC A Grade", "AICTE Approved", "UGC Recognized"],
    ranking: "Ranked #22 among Engineering Colleges in India",
    courses: [
      {
        name: "B.Tech Artificial Intelligence",
        duration: "4 Years",
        fees: "₹2,75,000 - ₹3,25,000 per year",
        eligibility: "10+2 with 60% in PCM"
      },
      {
        name: "M.Tech Data Science",
        duration: "2 Years",
        fees: "₹2,50,000 - ₹3,00,000 per year",
        eligibility: "B.Tech with 55% marks"
      },
      {
        name: "B.Tech Electronics & Communication",
        duration: "4 Years",
        fees: "₹2,25,000 - ₹2,75,000 per year",
        eligibility: "10+2 with 60% in PCM"
      },
      {
        name: "MCA",
        duration: "2 Years",
        fees: "₹1,75,000 - ₹2,25,000 per year",
        eligibility: "BCA/B.Sc with 50% marks"
      }
    ],
    facilities: [
      "Advanced AI & ML Labs",
      "IoT & Robotics Center",
      "Digital Library with 50,000+ Resources",
      "Olympic-size Swimming Pool",
      "Health & Wellness Center",
      "Wi-Fi Enabled Smart Campus",
      "Startup Incubation Hub",
      "International Exchange Programs"
    ],
    placements: {
      averagePackage: "₹7.8 LPA",
      highestPackage: "₹38 LPA",
      topRecruiters: ["IBM", "Cognizant", "Tech Mahindra", "Oracle", "Samsung", "Intel", "Adobe", "PayPal"],
      placementRate: "92%"
    },
    location: "Pune, Maharashtra",
    campusSize: "40 Acres"
  }
};

export const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi"
];

export const intakeYears = ["2024", "2025", "2026"];
