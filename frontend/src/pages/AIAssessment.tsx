import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, Check, Star, Brain, Target, Zap, Users, Award, Clock, TrendingUp, BookOpen, Lightbulb } from "lucide-react";
import { Navbar } from "@/components/ui/navbar-menu";
import Footer from "@/components/Footer";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const AIAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is your primary career goal?",
      options: [
        "Land a new job in my field",
        "Get promoted in my current role",
        "Switch to a different industry",
        "Start my own business"
      ]
    },
    {
      id: 2,
      question: "How would you rate your current technical skills?",
      options: [
        "Beginner - Just starting out",
        "Intermediate - Some experience",
        "Advanced - Very experienced",
        "Expert - Industry leader"
      ]
    },
    {
      id: 3,
      question: "What's your biggest career challenge?",
      options: [
        "Lack of relevant experience",
        "Limited networking opportunities",
        "Outdated skills",
        "Confidence in interviews"
      ]
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Get personalized insights based on your responses"
    },
    {
      icon: Target,
      title: "Career Roadmap",
      description: "Receive a customized path to your goals"
    },
    {
      icon: Zap,
      title: "Quick Assessment",
      description: "Complete in just 5 minutes"
    },
    {
      icon: Users,
      title: "Expert Recommendations",
      description: "Get advice from industry professionals"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Higher Success Rate",
      description: "3x more likely to achieve career goals"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Skip trial and error with guided path"
    },
    {
      icon: TrendingUp,
      title: "Better Opportunities",
      description: "Access to exclusive job opportunities"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Google",
      quote: "The AI assessment helped me identify exactly what skills I needed to develop. I got my dream job in 3 months!",
      improvement: "+300%"
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "Amazon",
      quote: "The personalized roadmap was a game-changer. I followed it step by step and got promoted twice in one year.",
      improvement: "+200%"
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

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
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Discover Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Career Potential
                </span>{" "}
                with AI
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                Take our AI-powered assessment to get personalized insights, career recommendations, 
                and a roadmap to achieve your professional goals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  size="lg"
                  onClick={() => {
                    console.log('Start Assessment clicked');
                    setCurrentQuestion(0);
                    setShowResults(false);
                  }}
                >
                  Start Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    console.log('Learn More clicked');
                    // Scroll to features section
                  }}
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Assessment Section */}
          {!showResults && (
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
              <div className="max-w-2xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-center mb-8"
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Career Assessment
                  </h2>
                  <p className="text-xl text-gray-600 mb-6">
                    Question {currentQuestion + 1} of {questions.length}
                  </p>
                  <Progress value={progress} className="w-full max-w-md mx-auto" />
                </motion.div>

                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="text-2xl text-center">
                        {questions[currentQuestion].question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {questions[currentQuestion].options.map((option, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="w-full justify-start h-auto p-4 text-left"
                          onClick={() => handleAnswer(option)}
                        >
                          <span className="font-medium">{option}</span>
                      </Button>
                      ))}
                    </CardContent>
                    </Card>
                </motion.div>
              </div>
            </div>
          )}

          {/* Results Section */}
          {showResults && (
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                    Your Career Assessment Results
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Based on your responses, here's your personalized career roadmap
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-center">
                          <Target className="w-6 h-6 mr-2 text-blue-600" />
                          Current Level
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-blue-600">Intermediate</p>
                        <p className="text-gray-600">You have solid foundations</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 mr-2 text-green-600" />
                          Growth Potential
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-green-600">High</p>
                        <p className="text-gray-600">Great opportunities ahead</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-center">
                          <Clock className="w-6 h-6 mr-2 text-purple-600" />
                          Timeline
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-purple-600">6-12 months</p>
                        <p className="text-gray-600">To reach next level</p>
                      </CardContent>
                    </Card>
                </div>

                  <Button
                    size="lg"
                    onClick={() => {
                      console.log('Get Detailed Report clicked');
                      // Navigate to detailed report
                    }}
                  >
                    Get Detailed Report
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </div>
          )}

          {/* Features Section */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Why Take Our Assessment?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Get personalized insights and recommendations powered by AI
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  >
                    <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                          <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
              </Card>
                  </motion.div>
                ))}
                </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Proven Results
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Join thousands of professionals who've transformed their careers
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
                    </div>
                  </div>

          {/* Testimonials Section */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Success Stories
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  See how our users have transformed their careers
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.0 + index * 0.1 }}
                  >
                    <Card className="h-full">
                      <CardHeader>
                  <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                            <CardDescription>
                              {testimonial.role} at {testimonial.company}
                            </CardDescription>
                    </div>
                          <Badge className="bg-green-600">
                            {testimonial.improvement}
                          </Badge>
                    </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                      </CardContent>
                </Card>
                  </motion.div>
              ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Discover Your Career Potential?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Take our AI-powered assessment and get your personalized career roadmap
                </p>
                <Button
                  size="lg"
                  onClick={() => {
                    console.log('Start Assessment clicked');
                    setCurrentQuestion(0);
                    setShowResults(false);
                  }}
                >
                  Start Assessment Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
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

export default AIAssessment; 
