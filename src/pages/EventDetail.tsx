import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Video, ArrowLeft, Play, Share2, Linkedin, Twitter, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";
import { Helmet } from "react-helmet-async";

const EventDetail = () => {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  const shareUrl = `https://datahat.ai/events/${event.slug}`;

  const getEventTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      webinar: "Webinar",
      workshop: "Workshop",
      conference: "Conference",
      meetup: "Meetup"
    };
    return labels[type] || type;
  };

  return (
    <>
      <Helmet>
        <title>{event.title} | DataHat AI Events</title>
        <meta name="description" content={event.description} />
        <meta name="keywords" content={event.tags.join(", ")} />
        <link rel="canonical" href={`https://datahat.ai/events/${event.slug}`} />
        
        <meta property="og:title" content={event.title} />
        <meta property="og:description" content={event.description} />
        <meta property="og:type" content="event" />
        <meta property="og:url" content={`https://datahat.ai/events/${event.slug}`} />
        <meta property="og:image" content={event.featuredImage} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": event.title,
            "description": event.description,
            "startDate": event.date,
            "duration": event.duration,
            "eventAttendanceMode": event.isVirtual 
              ? "https://schema.org/OnlineEventAttendanceMode"
              : "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": event.isPast 
              ? "https://schema.org/EventCompleted"
              : "https://schema.org/EventScheduled",
            "location": event.isVirtual 
              ? { "@type": "VirtualLocation", "url": "https://datahat.ai" }
              : { "@type": "Place", "name": event.location, "address": event.location },
            "image": event.featuredImage,
            "performer": event.speakers.map(speaker => ({
              "@type": "Person",
              "name": speaker.name,
              "jobTitle": speaker.role,
              "worksFor": {
                "@type": "Organization",
                "name": speaker.company
              }
            })),
            "organizer": {
              "@type": "Organization",
              "name": "DataHat AI",
              "url": "https://datahat.ai"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="relative pt-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <Link 
                to="/events" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Events
              </Link>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full font-medium capitalize">
                  {getEventTypeLabel(event.type)}
                </span>
                {event.isPast ? (
                  <span className="px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full font-medium">
                    Past Event
                  </span>
                ) : (
                  <span className="px-4 py-1.5 bg-green-500/10 text-green-600 rounded-full font-medium">
                    Upcoming
                  </span>
                )}
                {event.isVirtual ? (
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Video className="w-4 h-4" />
                    Virtual Event
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">
                {event.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long',
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {event.time} ({event.duration})
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                {event.isPast && event.recordingUrl ? (
                  <Button size="lg" variant="glow" className="gap-2">
                    <Play className="w-5 h-5" />
                    Watch Recording
                  </Button>
                ) : !event.isPast ? (
                  <Button size="lg" variant="glow">
                    Register Now
                  </Button>
                ) : null}
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(event.title)}`, '_blank')}
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(event.title)}`, '_blank')}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => navigator.share?.({ title: event.title, url: shareUrl })}
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Featured Image */}
          <div className="container mx-auto px-6 mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <img
                src={event.featuredImage}
                alt={event.title}
                className="w-full aspect-video object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="md:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h2 className="text-2xl font-display text-foreground mb-6">About This Event</h2>
                    <div 
                      className="prose prose-lg max-w-none
                        prose-headings:font-display prose-headings:text-foreground
                        prose-p:text-muted-foreground prose-p:leading-relaxed
                        prose-ul:text-muted-foreground prose-li:marker:text-primary"
                      dangerouslySetInnerHTML={{ __html: event.longDescription }}
                    />

                    {/* Agenda */}
                    <h2 className="text-2xl font-display text-foreground mt-12 mb-6">Agenda</h2>
                    <div className="space-y-4">
                      {event.agenda.map((item, index) => (
                        <div key={index} className="soft-glass p-4 flex gap-4">
                          <div className="text-sm font-mono text-primary whitespace-nowrap">
                            {item.time}
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Sidebar */}
                <div className="md:col-span-1">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="sticky top-24"
                  >
                    {/* Speakers */}
                    <div className="soft-glass p-6 mb-6">
                      <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        Speakers
                      </h3>
                      <div className="space-y-4">
                        {event.speakers.map((speaker, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <img
                              src={speaker.avatar}
                              alt={speaker.name}
                              className="w-12 h-12 rounded-full"
                            />
                            <div>
                              <p className="font-medium text-foreground">{speaker.name}</p>
                              <p className="text-sm text-muted-foreground">{speaker.role}</p>
                              <p className="text-sm text-primary">{speaker.company}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="soft-glass p-6">
                      <h3 className="font-semibold text-foreground mb-4">Topics</h3>
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
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
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        {!event.isPast && (
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-display text-foreground mb-4">
                Ready to Join?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Reserve your spot for this {getEventTypeLabel(event.type).toLowerCase()} and learn from industry experts.
              </p>
              <Button size="lg" variant="glow">
                Register Now - It&apos;s Free
              </Button>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
};

export default EventDetail;
