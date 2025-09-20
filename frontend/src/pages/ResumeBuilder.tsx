import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check, Star, Download, Eye, FileText, Shield, Zap, Users, Award, Clock, DollarSign } from "lucide-react";
import { Navbar } from "@/components/ui/navbar-menu";
import Footer from "@/components/Footer";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const ResumeBuilder = () => {
  const [activeStep, setActiveStep] = useState(1);

  const templates = [
    {
      id: 1,
      name: "Professional",
      category: "Corporate",
      image: "/Images/resume-template-1.jpg",
      popular: true
    },
    {
      id: 2,
      name: "Creative",
      category: "Design",
      image: "/Images/resume-template-2.jpg",
      popular: false
    },
    {
      id: 3,
      name: "Modern",
      category: "Tech",
      image: "/Images/resume-template-3.jpg",
      popular: true
    },
    {
      id: 4,
      name: "Minimalist",
      category: "General",
      image: "/Images/resume-template-4.jpg",
      popular: true
    }
  ];

  const features = [
    {
      icon: FileText,
      title: "AI-Powered Writing",
      description: "Get intelligent suggestions for your resume content"
    },
    {
      icon: Shield,
      title: "ATS Optimized",
      description: "Pass through Applicant Tracking Systems"
    },
    {
      icon: Zap,
      title: "Quick Build",
      description: "Create a professional resume in minutes"
    },
    {
      icon: Users,
      title: "Expert Templates",
      description: "Choose from industry-specific designs"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Higher Success Rate",
      description: "3x more likely to get interviews"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Build your resume in 10 minutes"
    },
    {
      icon: DollarSign,
      title: "Better Salary",
      description: "Negotiate higher compensation"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Google",
      quote: "The AI suggestions helped me highlight my best achievements. Got 5 interview calls in a week!",
      improvement: "+300%"
    },
    {
      name: "Michael Chen",
      role: "Marketing Manager",
      company: "Amazon",
      quote: "Professional templates and easy customization. My resume now stands out from the crowd.",
      improvement: "+200%"
    }
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
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              >
                Build Your Perfect Resume with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  AI Power
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                Create professional, ATS-optimized resumes that get you noticed by top employers. 
                Our AI-powered builder makes it easy and fast.
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
                    console.log('Start Building clicked');
                    setActiveStep(1);
                  }}
                >
                  Start Building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    console.log('View Templates clicked');
                    // Scroll to templates section
                  }}
                >
                  View Templates
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Features Section */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Our Resume Builder?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Powerful features designed to help you create the perfect resume
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
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

          {/* Templates Section */}
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Professional Templates
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Choose from our collection of ATS-optimized, industry-specific templates
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {templates.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="relative">
                        <div className="aspect-[3/4] bg-gray-200 rounded-t-lg flex items-center justify-center">
                          <FileText className="w-16 h-16 text-gray-400" />
                        </div>
                        {template.popular && (
                          <Badge className="absolute top-2 right-2 bg-blue-600">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <CardDescription>{template.category}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button className="w-full" variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
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
                transition={{ duration: 0.8, delay: 1.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Proven Results
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Join thousands of professionals who've landed their dream jobs
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}
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
                transition={{ duration: 0.8, delay: 2.0 }}
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
                    transition={{ duration: 0.8, delay: 2.2 + index * 0.1 }}
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
                transition={{ duration: 0.8, delay: 2.4 }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Build Your Perfect Resume?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join thousands of professionals who've already transformed their careers
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    onClick={() => {
                      console.log('Start Building Free clicked');
                      setActiveStep(1);
                    }}
                  >
                    Start Building Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      console.log('View All Templates clicked');
                      // Scroll to templates section
                    }}
                  >
                    View All Templates
                  </Button>
                </div>
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

export default ResumeBuilder;
