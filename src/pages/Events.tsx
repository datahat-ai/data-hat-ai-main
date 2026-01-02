import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Video, ArrowRight, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { events, eventTypes } from "@/data/events";
import { Helmet } from "react-helmet-async";

const Events = () => {
  const [selectedType, setSelectedType] = useState("All");

  const upcomingEvents = events.filter((event) => !event.isPast);
  const pastEvents = events.filter((event) => event.isPast);

  const filterEvents = (eventList: typeof events) => {
    return eventList.filter((event) => {
      return selectedType === "All" || event.type === selectedType;
    });
  };

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
        <title>Events | DataHat AI - Webinars, Workshops & Conferences</title>
        <meta name="description" content="Join DataHat AI events to learn about enterprise AI, automation best practices, and connect with industry leaders. Webinars, workshops, and conferences." />
        <meta name="keywords" content="AI events, enterprise webinars, automation workshops, AI conferences" />
        <link rel="canonical" href="https://datahat.ai/events" />
        
        <meta property="og:title" content="Events | DataHat AI" />
        <meta property="og:description" content="Webinars, workshops, and conferences on enterprise AI" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://datahat.ai/events" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "DataHat AI Events",
            "description": "Webinars, workshops, and conferences",
            "url": "https://datahat.ai/events",
            "itemListElement": events.map((event, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Event",
                "name": event.title,
                "description": event.description,
                "startDate": event.date,
                "eventAttendanceMode": event.isVirtual 
                  ? "https://schema.org/OnlineEventAttendanceMode"
                  : "https://schema.org/OfflineEventAttendanceMode",
                "location": event.isVirtual 
                  ? { "@type": "VirtualLocation", "url": "https://datahat.ai" }
                  : { "@type": "Place", "name": event.location }
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <PageHero
          badge="Learn & Connect"
          title="Events & Webinars"
          description="Join our webinars, workshops, and conferences to learn from industry experts and connect with the AI community."
        />

        <section className="py-12">
          <div className="container mx-auto px-6">
            {/* Type Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {eventTypes.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className="rounded-full capitalize"
                >
                  {type === "All" ? "All Events" : getEventTypeLabel(type)}
                </Button>
              ))}
            </div>

            <Tabs defaultValue="upcoming" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
              </TabsList>

              <TabsContent value="upcoming">
                {filterEvents(upcomingEvents).length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg">No upcoming events at the moment. Check back soon!</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filterEvents(upcomingEvents).map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link to={`/events/${event.slug}`} className="block group">
                          <div className="soft-glass-hover overflow-hidden">
                            <div className="flex flex-col md:flex-row">
                              <div className="md:w-80 flex-shrink-0">
                                <img
                                  src={event.featuredImage}
                                  alt={event.title}
                                  className="w-full h-48 md:h-full object-contain bg-black/5"
                                  loading="lazy"
                                />
                              </div>
                              <div className="p-6 flex-grow">
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium capitalize">
                                    {getEventTypeLabel(event.type)}
                                  </span>
                                  {event.isVirtual ? (
                                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                      <Video className="w-4 h-4" />
                                      Virtual
                                    </span>
                                  ) : (
                                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                      <MapPin className="w-4 h-4" />
                                      {event.location}
                                    </span>
                                  )}
                                </div>
                                
                                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                  {event.title}
                                </h3>
                                
                                <p className="text-muted-foreground mb-4 line-clamp-2">
                                  {event.description}
                                </p>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(event.date).toLocaleDateString('en-US', { 
                                      month: 'long', 
                                      day: 'numeric', 
                                      year: 'numeric' 
                                    })}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {event.time} ({event.duration})
                                  </span>
                                </div>

                                <div className="flex items-center justify-between">
                                  <div className="flex -space-x-2">
                                    {event.speakers.slice(0, 3).map((speaker, i) => (
                                      <img
                                        key={i}
                                        src={speaker.avatar}
                                        alt={speaker.name}
                                        className="w-8 h-8 rounded-full border-2 border-background"
                                      />
                                    ))}
                                    {event.speakers.length > 3 && (
                                      <span className="w-8 h-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center text-xs text-primary font-medium">
                                        +{event.speakers.length - 3}
                                      </span>
                                    )}
                                  </div>
                                  <a 
                                    href={event.registrationUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center text-primary font-medium hover:underline"
                                  >
                                    Register Now
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="past">
                {filterEvents(pastEvents).length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg">No past events found.</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {filterEvents(pastEvents).map((event, index) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link to={`/events/${event.slug}`} className="block group">
                          <div className="soft-glass-hover overflow-hidden">
                            <div className="relative">
                              <img
                                src={event.featuredImage}
                                alt={event.title}
                                className="w-full aspect-video object-cover"
                                loading="lazy"
                              />
                              {event.recordingUrl && (
                                <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                                    <Play className="w-6 h-6 text-primary-foreground fill-current" />
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="p-5">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded text-xs font-medium capitalize">
                                  {getEventTypeLabel(event.type)}
                                </span>
                                {event.recordingUrl && (
                                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">
                                    Recording Available
                                  </span>
                                )}
                              </div>
                              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                {event.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mt-2">
                                {new Date(event.date).toLocaleDateString('en-US', { 
                                  month: 'long', 
                                  day: 'numeric', 
                                  year: 'numeric' 
                                })}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Never Miss an Event
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to get notified about upcoming webinars, workshops, and conferences.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="glow">
                Subscribe to Updates
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Events;
