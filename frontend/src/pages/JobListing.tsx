import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Clock, 
  DollarSign,
  Building,
  Star,
  ArrowRight,
  Sparkles,
  Filter,
  Bookmark,
  Share2,
  Users,
  TrendingUp,
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

  const categories = ["All", "Technology", "Marketing", "Design", "Sales", "Finance", "Healthcare"];

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      type: "Full-time",
      salary: "$120k - $180k",
      posted: "2 days ago",
      category: "Technology",
      description: "Join our team to build scalable systems and innovative products that impact millions of users worldwide.",
      skills: ["React", "Node.js", "Python", "AWS"],
      featured: true
    },
    {
      id: 2,
      title: "Product Marketing Manager",
      company: "Microsoft",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$100k - $140k",
      posted: "1 day ago",
      category: "Marketing",
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
    }
  ];

  const stats = [
    { label: "Active Jobs", value: "2,500+", icon: Briefcase },
    { label: "Companies", value: "500+", icon: Building },
    { label: "Success Rate", value: "85%", icon: TrendingUp },
    { label: "Avg. Salary", value: "$95k", icon: DollarSign }
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

            {/* Category Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="max-w-6xl mx-auto mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-[#2D3253] mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Job Listings */}
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-6">
                {jobs
                  .filter(job => selectedCategory === "All" || job.category === selectedCategory)
                  .filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                 job.company.toLowerCase().includes(searchTerm.toLowerCase()))
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