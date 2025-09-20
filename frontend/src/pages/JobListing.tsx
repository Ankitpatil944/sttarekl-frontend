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
  TrendingUp
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
      salary: "$90k - $130k",
      posted: "1 day ago",
      category: "Marketing",
      description: "Drive product marketing strategies and campaigns for our cloud services division.",
      skills: ["Digital Marketing", "Analytics", "Product Strategy"],
      featured: false
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "Apple",
      location: "Cupertino, CA",
      type: "Full-time",
      salary: "$100k - $150k",
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
      salary: "$130k - $200k",
      posted: "5 days ago",
      category: "Sales",
      description: "Lead enterprise sales team and drive revenue growth for our CRM solutions.",
      skills: ["Enterprise Sales", "CRM", "Team Leadership"],
      featured: false
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Amazon",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$110k - $170k",
      posted: "1 week ago",
      category: "Technology",
      description: "Develop machine learning models and data-driven insights for e-commerce optimization.",
      skills: ["Python", "Machine Learning", "SQL", "Statistics"],
      featured: false
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
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-40 lg:min-h-screen max-w-screen-2xl mx-auto pt-16 bg-gradient-to-b from-cyan-100 to-white overflow-hidden"
        >
        {/* Hero Section */}
        <div className="pt-20 mt-10 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Curated Job Opportunities</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight animate-fade-in text-[#2D3253]">
              Job <span className="bg-gradient-primary bg-clip-text text-transparent">Listing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Discover curated job opportunities from top companies. Find your next career move with AI-powered job matching.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-card/60 border-primary/20"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                Search Jobs
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center border-primary/10">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Filters */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">Filter by Category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {jobs
              .filter(job => selectedCategory === "All" || job.category === selectedCategory)
              .map((job) => (
                <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow border-primary/10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Building className="h-6 w-6 text-primary" />
                        </div>
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
                      
                      <div className="flex items-center gap-2 mb-4">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 ml-4">
                      <Button 
                        size="sm"
                        onClick={() => {
                          console.log('Apply Now clicked for job:', job.title);
                          // In a real app, this would open application form
                        }}
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          console.log('Bookmark clicked for job:', job.title);
                          // In a real app, this would save job to bookmarks
                        }}
                      >
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          console.log('Share clicked for job:', job.title);
                          // In a real app, this would open share dialog
                        }}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                console.log('Load More Jobs clicked');
                // In a real app, this would load more jobs
              }}
            >
              Load More Jobs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gradient-card border-primary/10">
              <h3 className="text-2xl font-bold mb-3">Can't Find the Right Job?</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Upload your resume and let our AI match you with the perfect opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => {
                    console.log('Upload Resume clicked');
                    // In a real app, this would open file upload dialog
                  }}
                >
                  Upload Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => {
                    console.log('Set Job Alerts clicked');
                    // In a real app, this would open job alerts settings
                  }}
                >
                  Set Job Alerts
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </motion.section>
    </div>

    {/* Footer Section */}
    <div
      className="-mt-16 relative z-10 min-h-screen max-w-screen-2xl mx-auto px-2 sm:px-6 lg:px-8 border border-blue-300 rounded-tl-[70px] rounded-tr-[70px] overflow-hidden bg-[#FFFFFF] animate-fade-in"
    >
      {/* Footer */}
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