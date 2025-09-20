import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  MessageSquare, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Star,
  Target,
  Zap,
  Shield,
  Lightbulb,
  Upload,
  FileText
} from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import Footer from "@/components/Footer";
import { Navbar } from "@/components/ui/navbar-menu";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import './OutlinedText.css';
import { useSearchParams } from 'react-router-dom';

const AIAssessment = () => {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  
  // Set initial tab based on URL parameter
  const getInitialTab = (): 'personalized' | 'assessment' | 'interview' => {
    if (tabParam === 'personalized') return 'personalized';
    if (tabParam === 'assessment') return 'assessment';
    if (tabParam === 'interview') return 'interview';
    return 'personalized'; // Default to personalized
  };

  const [activeTab, setActiveTab] = useState<'personalized' | 'assessment' | 'interview'>(getInitialTab());
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [showSampleQuestions, setShowSampleQuestions] = useState(false);
  const [resumeWorkflowStep, setResumeWorkflowStep] = useState<'upload' | 'analysis' | 'jobs' | 'test' | 'interview'>('upload');
  const [extractedSkills, setExtractedSkills] = useState<string[]>([]);
  const [jobDescription, setJobDescription] = useState<string>('');
  const [recommendedJobs, setRecommendedJobs] = useState<any[]>([]);
  const [testCompleted, setTestCompleted] = useState(false);
  const navigate = useNavigate();

  // Scroll to top when component mounts or tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, tabParam]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setIsUploading(true);
      // Simulate upload and analysis process
      setTimeout(() => {
        setIsUploading(false);
        console.log('Resume uploaded for assessment:', file.name);
        
        // Simulate extracted skills and job description
        setExtractedSkills([
          'JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'AWS', 'Docker',
          'Problem Solving', 'Team Leadership', 'Project Management', 'Communication'
        ]);
        
        setJobDescription(`
          Based on your resume analysis, we've identified you as a Full-Stack Developer with strong technical skills in modern web technologies. 
          Your experience shows expertise in JavaScript frameworks, backend development, and cloud technologies. 
          You demonstrate leadership qualities and excellent problem-solving abilities.
        `);
        
        // Simulate recommended jobs
        setRecommendedJobs([
    {
      id: 1,
            title: 'Senior Full-Stack Developer',
            company: 'TechCorp Inc.',
            location: 'San Francisco, CA',
            salary: '$120k - $150k',
            match: '95%',
            skills: ['JavaScript', 'React', 'Node.js', 'AWS'],
            description: 'Lead development of scalable web applications using modern technologies.'
          },
          {
            id: 2,
            title: 'Frontend Developer',
            company: 'StartupXYZ',
            location: 'Remote',
            salary: '$90k - $110k',
            match: '88%',
            skills: ['React', 'JavaScript', 'Git', 'Problem Solving'],
            description: 'Build user-friendly interfaces and collaborate with design teams.'
          },
          {
            id: 3,
            title: 'Software Engineer',
            company: 'BigTech Solutions',
            location: 'New York, NY',
            salary: '$100k - $130k',
            match: '92%',
            skills: ['Python', 'SQL', 'Docker', 'Team Leadership'],
            description: 'Develop backend systems and mentor junior developers.'
          }
        ]);
        
        // Move to analysis step
        setResumeWorkflowStep('analysis');
      }, 3000);
    }
  };

  const toggleSampleQuestions = () => {
    setShowSampleQuestions(!showSampleQuestions);
  };

  const proceedToJobs = () => {
    setResumeWorkflowStep('jobs');
  };

  const startAssessment = () => {
    setResumeWorkflowStep('test');
  };

  const completeAssessment = () => {
    setTestCompleted(true);
    setResumeWorkflowStep('interview');
  };

  const startInterview = () => {
    navigate('/interview');
  };

  const sampleQuestions = [
    {
      category: "Technical Questions",
      questions: [
        "Explain a challenging technical problem you solved recently.",
        "How do you approach debugging a complex issue?",
        "Describe your experience with version control systems.",
        "What's your preferred programming language and why?"
      ]
    },
    {
      category: "Behavioral Questions", 
      questions: [
        "Tell me about a time you had to work under pressure.",
        "Describe a situation where you had to learn something new quickly.",
        "How do you handle disagreements with team members?",
        "Give me an example of a project you're particularly proud of."
      ]
    },
    {
      category: "Problem-Solving Questions",
      questions: [
        "How would you design a system to handle millions of users?",
        "What steps would you take to optimize a slow-performing application?",
        "How do you prioritize tasks when everything seems urgent?",
        "Describe your process for testing new features."
      ]
    }
  ];

  const assessmentTypes = [
    {
      id: 1,
      title: "Technical Skills",
      description: "Programming, algorithms, system design, and technical problem-solving",
      duration: "45-60 min",
      questions: "15-20",
      focus: "Technical Competency"
    },
    {
      id: 2,
      title: "Soft Skills",
      description: "Communication, leadership, teamwork, and problem-solving abilities",
      duration: "30-45 min",
      questions: "10-15",
      focus: "Interpersonal Skills"
    },
    {
      id: 3,
      title: "Domain Knowledge",
      description: "Industry-specific knowledge and expertise in your field",
      duration: "25-40 min",
      questions: "8-12",
      focus: "Industry Expertise"
    },
    {
      id: 4,
      title: "Cultural Fit",
      description: "Values, work style, and team collaboration",
      duration: "15-25 min",
      questions: "4-6",
      focus: "Personality & Values"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Google",
      quote: "The AI assessment accurately identified my weak areas in system design. The targeted practice helped me improve significantly.",
      score: "92%",
      improvement: "+18%"
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "Microsoft",
      quote: "The interview simulation was incredibly realistic. I felt confident going into my actual interviews after practicing here.",
      score: "88%",
      improvement: "+25%"
    },
    {
      name: "Priya Sharma",
      role: "Data Scientist",
      company: "Amazon",
      quote: "The detailed feedback helped me understand exactly what I needed to work on. My technical skills improved dramatically.",
      score: "95%",
      improvement: "+22%"
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
                    <span className="text-sm font-medium">AI-Powered Evaluation</span>
          </div>

                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight animate-fade-in text-[#2D3253]">
                    AI <span className="bg-gradient-primary bg-clip-text text-transparent">Assessment</span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                    Evaluate your skills with AI-powered assessments and practice interviews. Get detailed feedback and personalized improvement plans.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-1 border border-primary/20">
                <button
                  onClick={() => setActiveTab('personalized')}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    activeTab === 'personalized'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <FileText className="h-4 w-4 inline mr-2" />
                  Personalized Assessment
                </button>
                <button
                  onClick={() => setActiveTab('assessment')}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    activeTab === 'assessment'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Brain className="h-4 w-4 inline mr-2" />
                  AI Assessment
                </button>
                <button
                  onClick={() => setActiveTab('interview')}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    activeTab === 'interview'
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <MessageSquare className="h-4 w-4 inline mr-2" />
                  Mock Interview
                </button>
              </div>
            </div>

            {/* Assessment Types */}
            {activeTab === 'assessment' && (
              <div className="max-w-6xl mx-auto mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-[#2D3253]">
                    Choose Your <span className="bg-gradient-primary bg-clip-text text-transparent">Assessment</span>
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Select from our comprehensive assessment types to evaluate your skills and get personalized feedback.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {assessmentTypes.map((type) => (
                  <motion.div
                      key={type.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {type.focus}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="text-center">
                            <Clock className="h-5 w-5 mx-auto mb-1 text-primary" />
                            <div className="text-xs text-muted-foreground">Duration</div>
                            <div className="text-sm font-medium">{type.duration}</div>
                          </div>
                          <div className="text-center">
                            <Users className="h-5 w-5 mx-auto mb-1 text-primary" />
                            <div className="text-xs text-muted-foreground">Questions</div>
                            <div className="text-sm font-medium">{type.questions}</div>
                          </div>
                          <div className="text-center">
                            <Target className="h-5 w-5 mx-auto mb-1 text-primary" />
                            <div className="text-xs text-muted-foreground">Focus</div>
                            <div className="text-sm font-medium">{type.focus}</div>
                          </div>
                        </div>
                        
                        <Button className="w-full" onClick={() => navigate('/assessment')}>
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Card>
                  </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Mock Interview */}
            {activeTab === 'interview' && (
              <div className="max-w-4xl mx-auto mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-[#2D3253]">
                    Practice <span className="bg-gradient-primary bg-clip-text text-transparent">Mock Interviews</span>
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Simulate real interview scenarios with our AI-powered mock interview system.
                  </p>
                </div>
                
                <Card className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">AI-Powered Mock Interview</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Experience realistic interview scenarios with AI that adapts to your responses and provides detailed feedback.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" onClick={() => navigate('/interview')}>
                      Start Mock Interview
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" onClick={toggleSampleQuestions}>
                      View Sample Questions
                    </Button>
                  </div>
                </Card>
              </div>
            )}

            {/* Sample Questions Section */}
            {activeTab === 'interview' && showSampleQuestions && (
              <div className="max-w-4xl mx-auto mb-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-4 border-b border-gray-100">
                    <h3 className="text-xl font-semibold text-[#2D3253] flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Sample Interview Questions
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Practice with these common interview questions to prepare for your mock interview
                    </p>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid md:grid-cols-1 gap-6">
                      {sampleQuestions.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-3">
                          <h4 className="font-semibold text-lg text-[#2D3253] flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            {category.category}
                          </h4>
                          <div className="space-y-2">
                            {category.questions.map((question, questionIndex) => (
                              <div key={questionIndex} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs font-medium text-primary">{questionIndex + 1}</span>
                                </div>
                                <p className="text-sm text-gray-700 leading-relaxed">{question}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button 
                          size="lg" 
                          onClick={() => navigate('/interview')}
                          className="bg-primary hover:bg-primary/90"
                        >
                          Start Mock Interview
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="lg" 
                          onClick={toggleSampleQuestions}
                        >
                          Close Sample Questions
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {/* Personalized Assessment Workflow */}
            {activeTab === 'personalized' && (
              <div className="max-w-6xl mx-auto mb-16">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-4 text-[#2D3253]">
                    <span className="bg-gradient-primary bg-clip-text text-transparent">Personalized Assessment</span>
                  </h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Upload your resume and get a comprehensive AI-powered assessment tailored to your experience and skills.
                  </p>
                </div>

                {/* Workflow Progress Indicator */}
                <div className="flex justify-center mb-8">
                  <div className="flex items-center space-x-4">
                    {['upload', 'analysis', 'jobs', 'test', 'interview'].map((step, index) => (
                      <div key={step} className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                          resumeWorkflowStep === step 
                            ? 'bg-primary text-white' 
                            : ['upload', 'analysis', 'jobs', 'test', 'interview'].indexOf(resumeWorkflowStep) > index
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {index + 1}
                        </div>
                        <span className={`ml-2 text-sm font-medium ${
                          resumeWorkflowStep === step ? 'text-primary' : 'text-gray-600'
                        }`}>
                          {step.charAt(0).toUpperCase() + step.slice(1)}
                        </span>
                        {index < 4 && <div className="w-8 h-0.5 bg-gray-200 mx-2" />}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Step 1: Resume Upload */}
                {resumeWorkflowStep === 'upload' && (
                  <Card className="p-8">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <FileText className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Upload Your Resume</h3>
                      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Upload your resume to get started with our AI-powered analysis and personalized job recommendations.
                      </p>
                    </div>

                    <div className="border-2 border-dashed border-primary/20 rounded-lg p-8 text-center hover:border-primary/40 transition-colors">
                      <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            id="resume-assessment-upload"
                          />
                          <label
                            htmlFor="resume-assessment-upload"
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
                          >
                            {isUploading ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Analyzing Resume...
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
                )}

                {/* Step 2: Skills & Job Description Analysis */}
                {resumeWorkflowStep === 'analysis' && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-primary" />
                        Extracted Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {extractedSkills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="px-3 py-1">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-primary" />
                        Job Profile Analysis
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {jobDescription}
                      </p>
                    </Card>
                  </div>
                )}

                {/* Step 3: Recommended Jobs */}
                {resumeWorkflowStep === 'jobs' && (
                  <div className="space-y-6">
                          <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">Recommended Jobs for You</h3>
                      <p className="text-muted-foreground">Based on your skills and experience</p>
                    </div>
                    
                    <div className="grid gap-6">
                      {recommendedJobs.map((job) => (
                        <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-[#2D3253]">{job.title}</h4>
                              <p className="text-muted-foreground">{job.company} • {job.location}</p>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-green-100 text-green-800 mb-2">
                                {job.match} Match
                              </Badge>
                              <p className="text-sm font-medium text-[#2D3253]">{job.salary}</p>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-4">{job.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {job.skills.map((skill: string, index: number) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          
                          <Button 
                            onClick={startAssessment}
                            className="w-full"
                          >
                            Give Test for This Role
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Assessment Test */}
                {resumeWorkflowStep === 'test' && (
                  <Card className="p-8">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Brain className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Skills Assessment</h3>
                      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Complete this assessment to validate your skills and get personalized feedback.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg mb-3">Assessment Details:</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-primary" />
                            <span className="text-sm">30-45 minutes total</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-primary" />
                            <span className="text-sm">15-20 tailored questions</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Target className="h-5 w-5 text-primary" />
                            <span className="text-sm">Based on your resume skills</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Zap className="h-5 w-5 text-primary" />
                            <span className="text-sm">AI-optimized difficulty</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg mb-3">What You'll Get:</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Detailed skill evaluation</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Personalized feedback</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Improvement suggestions</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Interview preparation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <Button
                        size="lg" 
                        onClick={completeAssessment}
                        className="px-8 py-3"
                      >
                        Start Assessment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                )}

                {/* Step 5: Interview */}
                {resumeWorkflowStep === 'interview' && (
                  <Card className="p-8">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <MessageSquare className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">Ready for Interview?</h3>
                      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        {testCompleted 
                          ? "Great! You've completed the assessment. Now let's practice with a mock interview."
                          : "Complete the assessment first to proceed to the interview stage."
                        }
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg mb-3">Mock Interview Features:</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">AI-powered interview simulation</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Real-time feedback</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Performance analytics</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Improvement recommendations</span>
                          </div>
              </div>
            </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg mb-3">Interview Duration:</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-primary" />
                            <span className="text-sm">20-30 minutes</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-primary" />
                            <span className="text-sm">8-12 questions</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Target className="h-5 w-5 text-primary" />
                            <span className="text-sm">Role-specific questions</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Zap className="h-5 w-5 text-primary" />
                            <span className="text-sm">Adaptive difficulty</span>
                          </div>
                        </div>
                      </div>
                </div>

                    <div className="text-center">
                  <Button
                    size="lg"
                        onClick={startInterview}
                        disabled={!testCompleted}
                        className="px-8 py-3"
                      >
                        Start Mock Interview
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      {!testCompleted && (
                        <p className="text-sm text-muted-foreground mt-2">
                          Complete the assessment first to unlock the interview
                        </p>
                      )}
                    </div>
                  </Card>
                )}

                {/* Navigation Buttons */}
                {resumeWorkflowStep === 'analysis' && (
                  <div className="text-center mt-8">
                    <Button onClick={proceedToJobs} size="lg">
                      View Recommended Jobs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
              </div>
                )}
            </div>
          )}

            {/* How It Works Section */}
            <section className="relative w-full py-20 bg-gradient-to-b from-white to-cyan-100 overflow-hidden">
              <div className="text-center pt-14 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl mb-6 sm:text-4xl md:text-6xl lg:text-4xl font-normal leading-tight text-[#2D3253] z-50">
                  How Personalized Assessment <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
                </h2>
                <div className="relative">
                  {/* Desktop Flow */}
                  <div className="hidden lg:block">
                    <div className="flex items-center justify-between">
                      {[
                        { icon: Upload, title: "1. Upload Resume", desc: "Upload your resume and our AI will analyze your skills, experience, and qualifications." },
                        { icon: Brain, title: "2. AI Analysis", desc: "Our AI extracts your skills, creates a job profile, and identifies your strengths." },
                        { icon: Target, title: "3. Job Matching", desc: "Get personalized job recommendations that match your skills and career goals." },
                        { icon: CheckCircle, title: "4. Skill Assessment", desc: "Take targeted assessments to validate your skills and identify areas for improvement." },
                        { icon: MessageSquare, title: "5. Mock Interview", desc: "Practice with AI-powered mock interviews and get detailed feedback on your performance." }
                      ].map((step, index) => (
                        <div key={index} className="flex items-center">
                          <Card className="p-6 text-center border-primary/10 hover:shadow-lg transition-shadow w-48">
                            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                              <step.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                            <p className="text-muted-foreground text-sm">
                              {step.desc}
                            </p>
                          </Card>
                          {index < 4 && (
                            <div className="flex items-center mx-4">
                              <ArrowRight className="h-6 w-6 text-primary/60" />
                            </div>
                          )}
                </div>
                ))}
                </div>
            </div>

                  {/* Mobile/Tablet Grid */}
                  <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { icon: Upload, title: "1. Upload Resume", desc: "Upload your resume and our AI will analyze your skills, experience, and qualifications." },
                      { icon: Brain, title: "2. AI Analysis", desc: "Our AI extracts your skills, creates a job profile, and identifies your strengths." },
                      { icon: Target, title: "3. Job Matching", desc: "Get personalized job recommendations that match your skills and career goals." },
                      { icon: CheckCircle, title: "4. Skill Assessment", desc: "Take targeted assessments to validate your skills and identify areas for improvement." },
                      { icon: MessageSquare, title: "5. Mock Interview", desc: "Practice with AI-powered mock interviews and get detailed feedback on your performance." }
                    ].map((step, index) => (
                      <Card key={index} className="p-6 text-center border-primary/10 hover:shadow-lg transition-shadow">
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <step.icon className="h-6 w-6 text-primary" />
          </div>
                        <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">
                          {step.desc}
                        </p>
                      </Card>
                ))}
              </div>
                    </div>
                  </div>
            </section>

          {/* Testimonials Section */}
            <section className="relative w-full py-20 bg-gradient-to-b from-cyan-100 to-white overflow-hidden">
              <div className="text-center pt-14 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl mb-6 sm:text-4xl md:text-6xl lg:text-4xl font-normal leading-tight text-[#2D3253] z-50">
                  Success <span className="bg-gradient-primary bg-clip-text text-transparent">Stories</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                      key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="p-6 text-center border-primary/10">
                        <div className="flex items-center justify-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                        <div className="border-t pt-4">
                          <div className="font-bold text-sm">{testimonial.name}</div>
                          <div className="text-xs text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Score:</span>
                            <span className="font-bold text-primary">{testimonial.score}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-green-500 font-medium">{testimonial.improvement}</span>
                    </div>
                    </div>
                </Card>
                  </motion.div>
              ))}
              </div>
            </div>
            </section>

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

export default AIAssessment; 