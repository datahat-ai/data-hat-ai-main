import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";
import { Helmet } from "react-helmet-async";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const shareUrl = `https://datahat.ai/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title} | DataHat AI Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <meta name="author" content={post.author.name} />
        <link rel="canonical" href={`https://datahat.ai/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://datahat.ai/blog/${post.slug}`} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.featuredImage} />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.featuredImage,
            "author": {
              "@type": "Person",
              "name": post.author.name,
              "jobTitle": post.author.role
            },
            "publisher": {
              "@type": "Organization",
              "name": "DataHat AI",
              "logo": {
                "@type": "ImageObject",
                "url": "https://datahat.ai/logo.png"
              }
            },
            "datePublished": post.publishedAt,
            "dateModified": post.publishedAt,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://datahat.ai/blog/${post.slug}`
            },
            "keywords": post.tags.join(", ")
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <article className="pt-24">
          {/* Hero */}
          <header className="relative py-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            
            <div className="container mx-auto px-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
              >
                <Link 
                  to="/blog" 
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-8">
                  {post.title}
                </h1>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{post.author.name}</p>
                      <p className="text-muted-foreground text-sm">{post.author.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground mr-2">Share:</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`, '_blank')}
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`, '_blank')}
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      onClick={() => navigator.share?.({ title: post.title, url: shareUrl })}
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full aspect-video object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div 
                className="max-w-none
                  [&_h2]:font-display [&_h2]:text-foreground [&_h2]:font-semibold [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:tracking-tight
                  [&_h3]:font-display [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:mt-10 [&_h3]:mb-4 [&_h3]:tracking-tight
                  [&_p]:text-muted-foreground [&_p]:text-base [&_p]:md:text-lg [&_p]:leading-relaxed [&_p]:mb-6
                  [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary/80
                  [&_strong]:text-foreground [&_strong]:font-semibold
                  [&_ul]:text-muted-foreground [&_ul]:text-base [&_ul]:md:text-lg [&_ul]:my-6 [&_ul]:pl-6 [&_ul]:space-y-3
                  [&_ul_li]:relative [&_ul_li]:pl-2
                  [&_ul_li]:before:content-['•'] [&_ul_li]:before:absolute [&_ul_li]:before:left-[-1rem] [&_ul_li]:before:text-primary [&_ul_li]:before:font-bold
                  [&_ol]:text-muted-foreground [&_ol]:text-base [&_ol]:md:text-lg [&_ol]:my-6 [&_ol]:pl-6 [&_ol]:space-y-3 [&_ol]:list-decimal
                  [&_ol_li]:pl-2
                  [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:bg-secondary/50 [&_blockquote]:py-4 [&_blockquote]:px-6 [&_blockquote]:my-8 [&_blockquote]:rounded-r-xl [&_blockquote]:italic [&_blockquote]:text-foreground
                  [&_.lead]:text-lg [&_.lead]:md:text-xl [&_.lead]:text-foreground [&_.lead]:leading-relaxed [&_.lead]:mb-8 [&_.lead]:font-medium"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="bg-secondary/30 py-16">
              <div className="container mx-auto px-6">
                <h2 className="text-2xl font-display text-foreground mb-8 text-center">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <div className="soft-glass-hover overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={relatedPost.featuredImage}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-2">{relatedPost.readTime}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </article>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
