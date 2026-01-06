import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { blogPosts, blogCategories } from "@/data/blogPosts";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return (
    <>
      <Helmet>
        <title>Blog | Data-Hat AI - Insights on AI Agents & Enterprise Automation</title>
        <meta name="description" content="Explore expert insights on AI agents, enterprise automation, and digital transformation. Stay updated with the latest trends in agentic AI." />
        <meta name="keywords" content="AI agents, enterprise automation, digital transformation, AI insights, machine learning" />
        <link rel="canonical" href="https://data-hat.com/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog | Data-Hat AI" />
        <meta property="og:description" content="Expert insights on AI agents and enterprise automation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://data-hat.com/blog" />
        <meta property="og:image" content="/og-blog.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/og-blog.png" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Data-Hat AI Blog",
            "description": "Insights on AI agents and enterprise automation",
            "url": "https://data-hat.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Data-Hat AI"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <PageHero
          badge="Knowledge Hub"
          title="Blog & Insights"
          description="Expert perspectives on AI agents, enterprise automation, and the future of intelligent operations."
        />

        <section className="py-12">
          <div className="container mx-auto px-6">
            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {blogCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="soft-glass-hover overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span className="text-primary font-medium">{post.category}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                        <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-8 h-8 rounded-full"
                            />
                            <div className="text-sm">
                              <p className="font-medium text-foreground">{post.author.name}</p>
                              <p className="text-muted-foreground flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric', 
                                  year: 'numeric' 
                                })}
                              </p>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
