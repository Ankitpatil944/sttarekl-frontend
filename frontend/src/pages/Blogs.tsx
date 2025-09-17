import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from 'framer-motion';
import './OutlinedText.css';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Briefcase,
  Users,
  Sparkles,
  RefreshCw,
  AlertCircle,
  Filter
} from "lucide-react";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/ui/navbar-menu";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import NewsCard from "@/components/NewsCard";
import NewsCardSkeleton from "@/components/NewsCardSkeleton";
import { 
  useLatestNews, 
  useTrendingNews, 
  useSearchNews, 
  useNewsSummary,
  useRefreshNewsCache,
  useHealthCheck
} from "@/hooks/useNews";
import { NewsItem } from "@/lib/api";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  // API hooks
  const { data: latestNews, isLoading: latestLoading, error: latestError } = useLatestNews({ limit: 9 });
  const { data: trendingNews, isLoading: trendingLoading, error: trendingError } = useTrendingNews(6);
  const { data: searchResults, isLoading: searchLoading } = useSearchNews(
    searchQuery, 
    { limit: 20, category: selectedCategory as any }
  );
  const { data: newsSummary } = useNewsSummary();
  const { mutate: refreshCache, isPending: isRefreshing } = useRefreshNewsCache();
  const { data: healthStatus } = useHealthCheck();

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
    }
  };

  // Handle category filter
  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    setIsSearching(false);
  };

  // Clear search
  const handleClearSearch = () => {
    setSearchQuery("");
    setIsSearching(false);
  };

  // Get display data
  const getDisplayData = () => {
    if (isSearching && searchQuery.trim()) {
      return searchResults?.data || [];
    }
    return latestNews?.data || [];
  };

  const displayData = getDisplayData();
  const isLoading = latestLoading || trendingLoading || searchLoading;
  const hasError = latestError || trendingError;

  // Categories with counts from summary
  const categories = [
    { 
      name: "Tech", 
      icon: TrendingUp, 
      count: newsSummary?.data?.sources?.techcrunch?.count || 0,
      value: "tech"
    },
    { 
      name: "Programming", 
      icon: BookOpen, 
      count: newsSummary?.data?.sources?.dev_to?.count || 0,
      value: "programming"
    },
    { 
      name: "Interview", 
      icon: Users, 
      count: newsSummary?.data?.sources?.leetcode_blog?.count || 0,
      value: "interview"
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
          className="relative z-40 lg:min-h-screen max-w-screen-2xl mx-auto pt-16 bg-gradient-to-b from-cyan-100 to-white overflow-hidden"
        >
          <div className="relative max-w-7xl mx-auto pt-16 lg:pt-20">
            {/* Header */}
            <div className="pt-20 mt-10 pb-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-primary/20">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Latest Insights & Updates</span>
                    {healthStatus && (
                      <div className={`w-2 h-2 rounded-full ${healthStatus.status === 'healthy' ? 'bg-green-500' : 'bg-red-500'}`} />
                    )}
                  </div>
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight animate-fade-in text-[#2D3253]">
                    Blogs & <span className="bg-gradient-primary bg-clip-text text-transparent">News</span>
                  </h1>
                  <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in">
                    Stay updated with the latest career insights, interview tips, and industry trends to accelerate your professional growth.
                  </p>
                  
                  {/* Search Bar */}
                  <form onSubmit={handleSearch} className="max-w-md mx-auto relative animate-fade-in">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Search articles..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-card/60 border-primary/20 hover:border-primary/30 transition-colors"
                    />
                    <Button 
                      type="submit" 
                      size="sm" 
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 hover-scale"
                      disabled={!searchQuery.trim()}
                    >
                      Search
                    </Button>
                  </form>

                  {/* Clear Search Button */}
                  {isSearching && (
                    <div className="mt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={handleClearSearch}
                        className="hover-scale"
                      >
                        Clear Search
                      </Button>
                    </div>
                  )}
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                  {categories.map((category) => (
                    <Button
                      key={category.value}
                      variant={selectedCategory === category.value ? "default" : "outline"}
                      onClick={() => handleCategoryFilter(category.value)}
                      className="flex items-center gap-2 hover-scale"
                    >
                      <category.icon className="h-4 w-4" />
                      {category.name}
                      <Badge variant="secondary" className="ml-1">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </div>

                {/* Refresh Button */}
                <div className="text-center mb-8">
                  <Button 
                    variant="outline" 
                    onClick={() => refreshCache()} 
                    disabled={isRefreshing}
                    className="hover-scale"
                  >
                    <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                    {isRefreshing ? 'Refreshing...' : 'Refresh News'}
                  </Button>
                </div>
              </div>
            </div>

            {/* News Grid */}
            <div className="px-4 sm:px-6 lg:px-8 pb-20">
              {hasError && (
                <div className="text-center py-12">
                  <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-red-600 mb-2">Failed to load news</h3>
                  <p className="text-muted-foreground mb-4">Please try refreshing the page or check your connection.</p>
                  <Button onClick={() => window.location.reload()} className="hover-scale">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Retry
                  </Button>
                </div>
              )}

              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <NewsCardSkeleton key={i} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayData.map((article: NewsItem) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              )}

              {!isLoading && !hasError && displayData.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground">
                    {isSearching ? 'Try adjusting your search terms or filters.' : 'Check back later for new articles.'}
                  </p>
                </div>
              )}
            </div>

            {/* Newsletter Signup */}
            <div className="px-4 sm:px-6 lg:px-8 pb-20">
              <div className="max-w-2xl mx-auto">
                <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-primary/20">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-muted-foreground mb-6">
                    Get the latest career insights and interview tips delivered to your inbox.
                  </p>
                  <div className="flex gap-2 max-w-md mx-auto">
                    <Input type="email" placeholder="Enter your email" className="bg-card/60 border-primary/20 hover:border-primary/30 transition-colors" />
                    <Button className="hover-scale">Subscribe</Button>
                  </div>
                </Card>
              </div>
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

export default Blogs;