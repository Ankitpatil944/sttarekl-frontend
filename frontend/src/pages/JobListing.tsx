import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  Clock, 
  DollarSign,
  Star,
  ArrowRight,
  Sparkles,
  Filter,
  Bookmark,
  Share2,
  Users,
  Upload,
  FileText,
  CheckCircle
} from "lucide-react";
import { useState } from "react";
import { motion } from 'framer-motion';
import Footer from "@/components/Footer";
import { Navbar } from "@/components/ui/navbar-menu";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import './OutlinedText.css';

const JobListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedJobType, setSelectedJobType] = useState("All");
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All");
  const [selectedWorkArrangement, setSelectedWorkArrangement] = useState("All");
  const [selectedCompanySize, setSelectedCompanySize] = useState("All");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setIsUploading(true);
      // Simulate upload process
      setTimeout(() => {
        setIsUploading(false);
        console.log('Resume uploaded:', file.name);
        // Here you would typically send the file to your backend for analysis
      }, 2000);
    }
  };

  const categories = [
    "All", 
    "Technology", 
    "Marketing", 
    "Design", 
    "Sales", 
    "Finance", 
    "Product", 
    "Business", 
    "Human Resources", 
    "Operations", 
    "Customer Success", 
    "Writing",
    "Data Science",
    "Engineering",
    "Healthcare",
    "Education",
    "Consulting",
    "Media & Communications"
  ];
  
  const jobTypes = [
    "All", 
    "Full-time", 
    "Part-time", 
    "Contract", 
    "Internship", 
    "Remote", 
    "Hybrid",
    "Freelance",
    "Temporary"
  ];
  
  const salaryRanges = [
    "All", 
    "Under ₹5L", 
    "₹5L - ₹8L", 
    "₹8L - ₹12L", 
    "₹12L - ₹18L", 
    "₹18L - ₹25L", 
    "₹25L - ₹35L", 
    "₹35L+"
  ];
  
  const locations = [
    "All", 
    "Remote", 
    "Mumbai, Maharashtra", 
    "Bangalore, Karnataka", 
    "Delhi, NCR", 
    "Hyderabad, Telangana", 
    "Chennai, Tamil Nadu", 
    "Pune, Maharashtra",
    "Kolkata, West Bengal",
    "Ahmedabad, Gujarat",
    "Gurgaon, Haryana",
    "Noida, Uttar Pradesh",
    "Kochi, Kerala",
    "Chandigarh, Punjab",
    "Indore, Madhya Pradesh",
    "Jaipur, Rajasthan"
  ];
  
  const experienceLevels = [
    "All", 
    "Entry Level (0-2 years)", 
    "Mid Level (3-5 years)", 
    "Senior Level (6-10 years)", 
    "Lead/Principal (10+ years)", 
    "Executive/C-Level"
  ];
  
  const workArrangements = [
    "All",
    "Remote Only",
    "Hybrid",
    "On-site",
    "Flexible"
  ];
  
  const companySizes = [
    "All",
    "Startup (1-50)",
    "Small (51-200)",
    "Medium (201-1000)",
    "Large (1000+)",
    "Enterprise (5000+)"
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Google",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      salary: "₹15L - ₹25L",
      posted: "2 days ago",
      category: "Technology",
      experience: "Senior Level (6-10 years)",
      workArrangement: "Hybrid",
      companySize: "Enterprise (5000+)",
      description: "Join our team to build scalable systems and innovative products that impact millions of users worldwide.",
      skills: ["React", "Node.js", "Python", "AWS"],
      featured: true
    },
    {
      id: 2,
      title: "Product Marketing Manager",
      company: "Microsoft",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      salary: "₹12L - ₹18L",
      posted: "1 day ago",
      category: "Marketing",
      experience: "Mid Level (3-5 years)",
      workArrangement: "Hybrid",
      companySize: "Enterprise (5000+)",
      description: "Lead product marketing initiatives and drive growth for our enterprise solutions.",
      skills: ["Marketing", "Analytics", "Strategy", "Leadership"],
      featured: false
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Apple",
      location: "Cupertino, CA",
      type: "Full-time",
      salary: "$90k - $130k",
      posted: "3 days ago",
      category: "Design",
      description: "Create intuitive and beautiful user experiences for our next-generation products.",
      skills: ["Figma", "Sketch", "Prototyping", "User Research"],
      featured: true
    },
    {
      id: 4,
      title: "Sales Director",
      company: "Salesforce",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$110k - $160k",
      posted: "4 days ago",
      category: "Sales",
      description: "Drive sales growth and build relationships with enterprise clients.",
      skills: ["Sales", "CRM", "Negotiation", "Leadership"],
      featured: false
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Netflix",
      location: "Los Gatos, CA",
      type: "Full-time",
      salary: "$130k - $180k",
      posted: "5 days ago",
      category: "Technology",
      description: "Analyze user behavior and build machine learning models to improve our recommendation system.",
      skills: ["Python", "Machine Learning", "Statistics", "SQL"],
      featured: true
    },
    {
      id: 6,
      title: "Financial Analyst",
      company: "Goldman Sachs",
      location: "New York, NY",
      type: "Full-time",
      salary: "$80k - $120k",
      posted: "4 days ago",
      category: "Finance",
      description: "Analyze financial data and provide insights for investment decisions.",
      skills: ["Financial Modeling", "Excel", "VBA", "Accounting"],
      featured: false
    },
    {
      id: 7,
      title: "Frontend Developer",
      company: "Meta",
      location: "Menlo Park, CA",
      type: "Full-time",
      salary: "$95k - $150k",
      posted: "1 day ago",
      category: "Technology",
      description: "Build responsive and interactive user interfaces for our social media platforms.",
      skills: ["React", "TypeScript", "CSS", "GraphQL"],
      featured: true
    },
    {
      id: 8,
      title: "DevOps Engineer",
      company: "Amazon",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$110k - $170k",
      posted: "3 days ago",
      category: "Technology",
      description: "Manage cloud infrastructure and deployment pipelines for scalable applications.",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      featured: false
    },
    {
      id: 9,
      title: "Product Manager",
      company: "Uber",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "2 days ago",
      category: "Product",
      description: "Lead product strategy and roadmap for our mobility platform.",
      skills: ["Product Strategy", "Analytics", "User Research", "Agile"],
      featured: true
    },
    {
      id: 10,
      title: "Cybersecurity Analyst",
      company: "IBM",
      location: "Armonk, NY",
      type: "Full-time",
      salary: "$85k - $125k",
      posted: "5 days ago",
      category: "Technology",
      description: "Protect our systems and data from cyber threats and vulnerabilities.",
      skills: ["Security", "Network Analysis", "Incident Response", "SIEM"],
      featured: false
    },
    {
      id: 11,
      title: "Content Marketing Specialist",
      company: "HubSpot",
      location: "Cambridge, MA",
      type: "Full-time",
      salary: "$65k - $90k",
      posted: "4 days ago",
      category: "Marketing",
      description: "Create engaging content to drive brand awareness and lead generation.",
      skills: ["Content Writing", "SEO", "Social Media", "Analytics"],
      featured: false
    },
    {
      id: 12,
      title: "Business Analyst",
      company: "Deloitte",
      location: "New York, NY",
      type: "Full-time",
      salary: "$70k - $100k",
      posted: "3 days ago",
      category: "Business",
      description: "Analyze business processes and recommend improvements for client organizations.",
      skills: ["Business Analysis", "Process Improvement", "Data Analysis", "Consulting"],
      featured: false
    },
    {
      id: 13,
      title: "Mobile App Developer",
      company: "Spotify",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90k - $140k",
      posted: "2 days ago",
      category: "Technology",
      description: "Develop mobile applications for iOS and Android platforms.",
      skills: ["React Native", "Swift", "Kotlin", "Mobile Development"],
      featured: true
    },
    {
      id: 14,
      title: "HR Business Partner",
      company: "LinkedIn",
      location: "Sunnyvale, CA",
      type: "Full-time",
      salary: "$85k - $120k",
      posted: "1 day ago",
      category: "Human Resources",
      description: "Partner with business leaders to drive people strategy and organizational development.",
      skills: ["HR Strategy", "Employee Relations", "Talent Management", "Leadership"],
      featured: false
    },
    {
      id: 15,
      title: "Machine Learning Engineer",
      company: "Flipkart",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      salary: "₹20L - ₹35L",
      posted: "4 days ago",
      category: "Technology",
      experience: "Senior Level (6-10 years)",
      workArrangement: "Hybrid",
      companySize: "Large (1000+)",
      description: "Build and deploy machine learning models for e-commerce recommendation systems.",
      skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
      featured: true
    },
    {
      id: 16,
      title: "Digital Marketing Manager",
      company: "Zomato",
      location: "Gurgaon, Haryana",
      type: "Full-time",
      salary: "₹10L - ₹16L",
      posted: "3 days ago",
      category: "Marketing",
      experience: "Mid Level (3-5 years)",
      workArrangement: "Hybrid",
      companySize: "Large (1000+)",
      description: "Lead digital marketing campaigns to drive customer acquisition and retention.",
      skills: ["Digital Marketing", "PPC", "Email Marketing", "Analytics"],
      featured: false
    },
    {
      id: 17,
      title: "Cloud Solutions Architect",
      company: "Oracle",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$130k - $180k",
      posted: "5 days ago",
      category: "Technology",
      description: "Design and implement cloud-based solutions for enterprise clients.",
      skills: ["Cloud Architecture", "AWS", "Azure", "Microservices"],
      featured: true
    },
    {
      id: 18,
      title: "Operations Manager",
      company: "Airbnb",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$95k - $130k",
      posted: "2 days ago",
      category: "Operations",
      description: "Optimize operational processes and ensure smooth business operations.",
      skills: ["Operations", "Process Improvement", "Project Management", "Analytics"],
      featured: false
    },
    {
      id: 19,
      title: "UI/UX Designer",
      company: "Figma",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$85k - $125k",
      posted: "1 day ago",
      category: "Design",
      description: "Design intuitive user interfaces and experiences for our design platform.",
      skills: ["UI Design", "UX Research", "Prototyping", "Design Systems"],
      featured: true
    },
    {
      id: 20,
      title: "Software Engineer Intern",
      company: "Stripe",
      location: "Mumbai, Maharashtra",
      type: "Internship",
      salary: "₹25k - ₹35k/month",
      posted: "3 days ago",
      category: "Technology",
      experience: "Entry Level (0-2 years)",
      workArrangement: "Hybrid",
      companySize: "Large (1000+)",
      description: "Gain hands-on experience building payment infrastructure and developer tools.",
      skills: ["Programming", "Problem Solving", "Teamwork", "Learning"],
      featured: false
    },
    {
      id: 21,
      title: "Customer Success Manager",
      company: "Slack",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$80k - $115k",
      posted: "4 days ago",
      category: "Customer Success",
      description: "Help customers achieve success with our collaboration platform.",
      skills: ["Customer Success", "Account Management", "Communication", "Analytics"],
      featured: false
    },
    {
      id: 22,
      title: "Backend Developer",
      company: "Twitter",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$100k - $150k",
      posted: "2 days ago",
      category: "Technology",
      description: "Build scalable backend services to support millions of users.",
      skills: ["Java", "Scala", "Microservices", "Distributed Systems"],
      featured: true
    },
    {
      id: 23,
      title: "Marketing Analyst",
      company: "Adobe",
      location: "San Jose, CA",
      type: "Full-time",
      salary: "$70k - $95k",
      posted: "5 days ago",
      category: "Marketing",
      description: "Analyze marketing performance and provide data-driven insights.",
      skills: ["Data Analysis", "Marketing Analytics", "SQL", "Tableau"],
      featured: false
    },
    {
      id: 24,
      title: "Technical Writer",
      company: "GitHub",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$75k - $105k",
      posted: "3 days ago",
      category: "Writing",
      description: "Create clear and comprehensive documentation for developers.",
      skills: ["Technical Writing", "Documentation", "Git", "API Documentation"],
      featured: false
    },
    {
      id: 25,
      title: "Quality Assurance Engineer",
      company: "Zoom",
      location: "San Jose, CA",
      type: "Full-time",
      salary: "$85k - $120k",
      posted: "1 day ago",
      category: "Technology",
      description: "Ensure the quality and reliability of our video conferencing platform.",
      skills: ["QA Testing", "Automation", "Selenium", "Test Planning"],
      featured: false
    }
  ];


  return (
    <div className="min-h-screen bg-[#031527]">
      <Navbar />
      <div className="relative w-full animate-fade-in">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-40 lg:min-h-screen max-w-screen-2xl mx-auto pt-8 bg-gradient-to-b from-cyan-100 to-white overflow-hidden"
        >
          <div className="relative max-w-7xl mx-auto pt-8 lg:pt-12">
        
        {/* Hero Section */}
            <section className="relative pt-8 mt-4 pb-12">
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                  className="text-center max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-primary/20 animate-fade-in">
                    <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium">Curated Job Opportunities</span>
            </div>
                  
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight animate-fade-in text-[#2D3253]">
              Job <span className="bg-gradient-primary bg-clip-text text-transparent">Listing</span>
            </h1>
                  
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                      Know what jobs your current skills can get you.
                    </p>
                </motion.div>
              </div>
            </section>

            {/* Upload Resume Section */}
            <motion.div 
              className="max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 hover:border-primary/30 transition-all duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-[#2D3253]">
                    Get Personalized Job Recommendations
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Upload your resume and our AI will analyze your skills and experience to find the perfect job matches for you.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <div className="relative">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
                      >
                        {isUploading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Upload className="w-4 h-4" />
                            Upload Resume
                          </>
                        )}
                      </label>
                    </div>
                    
                    {uploadedFile && !isUploading && (
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm font-medium">{uploadedFile.name}</span>
                      </div>
                    )}
          </div>
                  
                  <div className="mt-4 text-xs text-muted-foreground">
                    Supported formats: PDF, DOC, DOCX (Max 10MB)
                  </div>
                </div>
              </Card>
            </motion.div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg border-2 border-primary/20 focus:border-primary/50 rounded-xl"
              />
              </div>
            </div>

            {/* Advanced Filters */}
            <div className="max-w-7xl mx-auto mb-12">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Filter className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-[#2D3253]">Advanced Job Filters</h3>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedJobType("All");
                      setSelectedSalaryRange("All");
                      setSelectedLocation("All");
                      setSelectedExperience("All");
                      setSelectedWorkArrangement("All");
                      setSelectedCompanySize("All");
                    }}
                    className="text-sm hover:bg-red-50 hover:border-red-200 hover:text-red-600"
                  >
                    Clear All Filters
                  </Button>
          </div>

                {/* First Row - Primary Filters */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2D3253] mb-3">Job Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white shadow-sm hover:border-gray-300 transition-colors"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Job Type Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2D3253] mb-3">Employment Type</label>
                    <select
                      value={selectedJobType}
                      onChange={(e) => setSelectedJobType(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white shadow-sm hover:border-gray-300 transition-colors"
                    >
                      {jobTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Location Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2D3253] mb-3">Location</label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white shadow-sm hover:border-gray-300 transition-colors"
                    >
                      {locations.map((location) => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>

                  {/* Experience Level Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2D3253] mb-3">Experience Level</label>
                    <select
                      value={selectedExperience}
                      onChange={(e) => setSelectedExperience(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white shadow-sm hover:border-gray-300 transition-colors"
                    >
                      {experienceLevels.map((level) => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Second Row - Secondary Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Salary Range Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2D3253] mb-3">Salary Range</label>
                    <select
                      value={selectedSalaryRange}
                      onChange={(e) => setSelectedSalaryRange(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white shadow-sm hover:border-gray-300 transition-colors"
                    >
                      {salaryRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
          </div>

                  {/* Work Arrangement Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2D3253] mb-3">Work Arrangement</label>
                    <select
                      value={selectedWorkArrangement}
                      onChange={(e) => setSelectedWorkArrangement(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white shadow-sm hover:border-gray-300 transition-colors"
                    >
                      {workArrangements.map((arrangement) => (
                        <option key={arrangement} value={arrangement}>{arrangement}</option>
                      ))}
                    </select>
            </div>

                  {/* Company Size Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-[#2D3253] mb-3">Company Size</label>
                    <select
                      value={selectedCompanySize}
                      onChange={(e) => setSelectedCompanySize(e.target.value)}
                      className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary bg-white shadow-sm hover:border-gray-300 transition-colors"
                    >
                      {companySizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
            </div>
          </div>

                {/* Active Filters Summary */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory !== "All" && (
                      <Badge variant="secondary" className="px-3 py-1">
                        Category: {selectedCategory}
                      </Badge>
                    )}
                    {selectedJobType !== "All" && (
                      <Badge variant="secondary" className="px-3 py-1">
                        Type: {selectedJobType}
                      </Badge>
                    )}
                    {selectedLocation !== "All" && (
                      <Badge variant="secondary" className="px-3 py-1">
                        Location: {selectedLocation}
                      </Badge>
                    )}
                    {selectedExperience !== "All" && (
                      <Badge variant="secondary" className="px-3 py-1">
                        Experience: {selectedExperience}
                      </Badge>
                    )}
                    {selectedSalaryRange !== "All" && (
                      <Badge variant="secondary" className="px-3 py-1">
                        Salary: {selectedSalaryRange}
                      </Badge>
                    )}
                    {selectedWorkArrangement !== "All" && (
                      <Badge variant="secondary" className="px-3 py-1">
                        Work: {selectedWorkArrangement}
                      </Badge>
                    )}
                    {selectedCompanySize !== "All" && (
                      <Badge variant="secondary" className="px-3 py-1">
                        Company: {selectedCompanySize}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>


          {/* Job Listings */}
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-6">
            {jobs
              .filter(job => selectedCategory === "All" || job.category === selectedCategory)
                  .filter(job => selectedJobType === "All" || job.type === selectedJobType)
                  .filter(job => selectedLocation === "All" || job.location === selectedLocation)
                  .filter(job => selectedExperience === "All" || job.experience === selectedExperience)
                  .filter(job => selectedWorkArrangement === "All" || job.workArrangement === selectedWorkArrangement)
                  .filter(job => selectedCompanySize === "All" || job.companySize === selectedCompanySize)
                  .filter(job => {
                    if (selectedSalaryRange === "All") return true;
                    const jobSalary = job.salary;
                    switch (selectedSalaryRange) {
                      case "Under ₹5L":
                        return jobSalary.includes("₹3L") || jobSalary.includes("₹4L") || jobSalary.includes("₹5L");
                      case "₹5L - ₹8L":
                        return jobSalary.includes("₹5L") || jobSalary.includes("₹6L") || jobSalary.includes("₹7L") || jobSalary.includes("₹8L");
                      case "₹8L - ₹12L":
                        return jobSalary.includes("₹8L") || jobSalary.includes("₹9L") || jobSalary.includes("₹10L") || jobSalary.includes("₹11L") || jobSalary.includes("₹12L");
                      case "₹12L - ₹18L":
                        return jobSalary.includes("₹12L") || jobSalary.includes("₹13L") || jobSalary.includes("₹14L") || jobSalary.includes("₹15L") || jobSalary.includes("₹16L") || jobSalary.includes("₹17L") || jobSalary.includes("₹18L");
                      case "₹18L - ₹25L":
                        return jobSalary.includes("₹18L") || jobSalary.includes("₹20L") || jobSalary.includes("₹22L") || jobSalary.includes("₹24L") || jobSalary.includes("₹25L");
                      case "₹25L - ₹35L":
                        return jobSalary.includes("₹25L") || jobSalary.includes("₹28L") || jobSalary.includes("₹30L") || jobSalary.includes("₹32L") || jobSalary.includes("₹35L");
                      case "₹35L+":
                        return jobSalary.includes("₹35L") || jobSalary.includes("₹40L") || jobSalary.includes("₹45L") || jobSalary.includes("₹50L");
                      default:
                        return true;
                    }
                  })
                  .filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                 job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())))
              .map((job) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                        <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-xl">{job.title}</h3>
                            {job.featured && (
                              <Badge variant="secondary" className="text-xs">Featured</Badge>
                            )}
                          </div>
                          <p className="text-primary font-medium mb-1">{job.company}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {job.type}
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4" />
                              {job.salary}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {job.posted}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                    </div>
                    
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                              <Share2 className="w-4 h-4" />
                      </Button>
                            <Button size="sm">
                              Apply Now
                              <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
                    </motion.div>
              ))}
              </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          </div>
        </motion.section>
              </div>

      {/* Footer Section */}
      <div
        className="-mt-16 relative z-10 min-h-screen max-w-screen-2xl mx-auto px-2 sm:px-6 lg:px-8 border border-blue-300 rounded-tl-[70px] rounded-tr-[70px] overflow-hidden bg-[#FFFFFF] animate-fade-in"
      >
        <Footer />
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-[16rem] flex items-center justify-center tracking-widest">
            <TextHoverEffect text=" AInode " />
          </div>
        </div>
    </div>
  </div>
  );
};

export default JobListing; 