import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Github, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * SMILE X - PREMIUM LUXURY AESTHETIC
 * Subtle animations, carbon weave patterns, refined details
 * Understated elegance that whispers rather than shouts
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="animated-bg-element animated-bg-element-1" />
        <div className="animated-bg-element animated-bg-element-2" />
        <div className="animated-bg-element animated-bg-element-3" />
      </div>

      {/* Carbon Weave Overlay */}
      <div className="fixed inset-0 pointer-events-none carbon-weave opacity-30" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-depth-md carbon-overlay">
        <div className="container flex items-center justify-between h-16 relative z-10">
          <div className="font-display text-2xl font-bold text-primary glow-text-gold animate-pulse-subtle">SMILE X</div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#projects" className="text-sm hover:text-primary transition-smooth font-medium text-foreground/80">Projects</a>
            <a href="#content" className="text-sm hover:text-primary transition-smooth font-medium text-foreground/80">Content</a>
            <a href="#music" className="text-sm hover:text-primary transition-smooth font-medium text-foreground/80">Music</a>
            <a href="#roadmap" className="text-sm hover:text-primary transition-smooth font-medium text-foreground/80">Roadmap</a>
            <Button size="sm" className="bg-primary hover:bg-primary text-white font-display glow-gold hover-glow-gold border border-primary/20 button-premium">
              Join Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden section-reveal section-depth">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663551542742/ZpuWmBQWe8rgLV4hpbhgMq/luxury-hero-gold-SZ3d3toufoFQVhXpFbqoTS.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="absolute inset-0 carbon-overlay opacity-40" />

        <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Ornamental Badge */}
          <div className="mb-8 inline-block px-6 py-3 border-2 border-primary rounded-full text-sm text-primary font-medium glass-depth shadow-gold-sm animate-float-subtle">
            ✨ Early Phase Launch
          </div>

          <h1 className="font-display text-6xl md:text-7xl font-bold mb-6 leading-tight text-foreground stagger-item text-depth-lg">
            Building the Future of
            <span className="block text-primary glow-text-gold mt-3 animate-pulse-subtle">Entertainment & Intelligence</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed font-light stagger-item">
            Smile X is a multi-domain creative powerhouse. We craft immersive games, compelling content, innovative music, and next-generation AI tools. This is just the beginning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 stagger-item">
            <Button size="lg" className="bg-primary hover:bg-primary text-white font-display glow-gold hover-glow-gold border border-primary/20 button-premium premium-hover-lift">
              Explore Projects <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 font-medium premium-hover-lift">
              Join the Journey
            </Button>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-3 gap-4 mt-16 max-w-md mx-auto stagger-item">
            <div className="p-6 glass-depth border border-border/40 rounded-lg shadow-depth-md hover:shadow-depth-lg transition-smooth hover-lift">
              <div className="text-3xl font-bold text-primary animate-pulse-subtle">∞</div>
              <div className="text-xs text-foreground/70 mt-2 font-medium">Possibilities</div>
            </div>
            <div className="p-6 glass-depth border border-border/40 rounded-lg shadow-depth-md hover:shadow-depth-lg transition-smooth hover-lift">
              <div className="text-3xl font-bold text-primary animate-pulse-subtle">1</div>
              <div className="text-xs text-foreground/70 mt-2 font-medium">Vision</div>
            </div>
            <div className="p-6 glass-depth border border-border/40 rounded-lg shadow-depth-md hover:shadow-depth-lg transition-smooth hover-lift">
              <div className="text-3xl font-bold text-primary animate-pulse-subtle">∞</div>
              <div className="text-xs text-foreground/70 mt-2 font-medium">Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ornamental Divider */}
      <div className="relative py-12 bg-gradient-to-r from-background via-primary/5 to-background carbon-overlay">
        <div className="text-center text-primary/40 text-2xl">◆ ◆ ◆</div>
      </div>

      {/* About Section */}
      <section className="py-24 bg-background section-reveal section-depth carbon-overlay">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="stagger-item">
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 text-foreground">
                Who We Are
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed font-light">
                Smile X isn't just a brand—it's a movement. We're a collective of creators, developers, and visionaries building the entertainment and intelligence ecosystem of tomorrow.
              </p>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed font-light">
                From browser-based games that captivate millions to content that resonates with creators, from music that moves souls to AI tools that empower businesses—we're expanding the boundaries of what's possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 stagger-item">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse-subtle" />
                  <span className="text-foreground/80 font-light">Multi-domain expertise in entertainment, content, and technology</span>
                </div>
                <div className="flex items-start gap-4 stagger-item">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse-subtle" />
                  <span className="text-foreground/80 font-light">Committed to innovation and creative excellence</span>
                </div>
                <div className="flex items-start gap-4 stagger-item">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse-subtle" />
                  <span className="text-foreground/80 font-light">Building for creators, gamers, and forward-thinking businesses</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden border border-border/40 shadow-depth-lg hover:shadow-depth-xl hover-lift stagger-item image-depth">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663551542742/ZpuWmBQWe8rgLV4hpbhgMq/luxury-content-bg-VqpYR5xdCQuJ9PSC4Yr5Bw.webp"
                alt="Smile X Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-0 carbon-weave opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white/50 section-reveal section-depth carbon-overlay">
        <div className="container">
          <div className="text-center mb-16 stagger-item">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Our Projects
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-light">
              A showcase of our creative domains—each representing a pillar of the Smile X empire
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Games */}
            <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-white p-8 shadow-depth-md hover:shadow-depth-lg hover-lift stagger-item carbon-overlay depth-card card-stack">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-primary to-secondary transition-smooth" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 border border-primary/30 animate-pulse-subtle">
                  <Play className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground text-depth-md">Game Development</h3>
                <p className="text-foreground/80 mb-6 font-light">
                  Immersive HTML5 browser-based games designed for engagement and fun. From casual experiences to competitive challenges.
                </p>
                <ul className="space-y-3 text-sm text-foreground/70">
                  <li className="flex items-center gap-3 stagger-item">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
                    Interactive gameplay mechanics
                  </li>
                  <li className="flex items-center gap-3 stagger-item">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
                    Cross-platform compatibility
                  </li>
                  <li className="flex items-center gap-3 stagger-item">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
                    Engaging user experiences
                  </li>
                </ul>
              </div>
            </div>

            {/* Content Creation */}
            <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-white p-8 shadow-depth-md hover:shadow-depth-lg hover-lift stagger-item carbon-overlay depth-card card-stack">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-secondary to-primary transition-smooth" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 border border-primary/30 animate-pulse-subtle">
                  <Youtube className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground text-depth-md">Content Creation</h3>
                <p className="text-foreground/80 mb-6 font-light">
                  Diverse content across gaming, automotive, and knowledge domains. High-quality reels, videos, and educational material.
                </p>
                <ul className="space-y-3 text-sm text-foreground/70">
                  <li className="flex items-center gap-3 stagger-item">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
                    Gaming content & tutorials
                  </li>
                  <li className="flex items-center gap-3 stagger-item">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
                    Automotive & lifestyle
                  </li>
                  <li className="flex items-center gap-3 stagger-item">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
                    Educational reels
                  </li>
                </ul>
              </div>
            </div>

            {/* Music Production */}
            <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-white p-8 shadow-depth-md hover:shadow-depth-lg hover-lift stagger-item carbon-overlay depth-card card-stack">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-primary to-secondary transition-smooth" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 border border-primary/30 animate-pulse-subtle">
                  <span className="text-2xl">♪</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground text-depth-md">Music Production</h3>
                <p className="text-foreground/80 mb-6 font-light">
                  Original music compositions and production. From cinematic scores to energetic beats, we craft audio experiences.
                </p>
                <ul className="space-y-3 text-sm text-foreground/70">
                  <li className="flex items-center gap-3 stagger-item">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
                    Original compositions
                  </li>
                  <li className="flex items-center gap-3 stagger-item">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
                    Professional production
                  </li>
                  <li className="flex items-center gap-3 stagger-item">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
                    Diverse genres
                  </li>
                </ul>
              </div>
            </div>

            {/* Future Vision */}
            <div className="group relative overflow-hidden rounded-lg border border-border/40 bg-white p-8 shadow-depth-md hover:shadow-depth-lg hover-lift stagger-item carbon-overlay depth-card card-stack">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-secondary to-primary transition-smooth" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 border border-primary/30 animate-pulse-subtle">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground text-depth-md">Future Expansion</h3>
                <p className="text-foreground/80 mb-6 font-light">
                  Coming soon: AI tools, mobile apps, and business solutions. The Smile X empire is just getting started.
                </p>
                <ul className="space-y-3 text-sm text-foreground/70">
                  <li className="flex items-center gap-3 stagger-item">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
                    AI-powered tools
                  </li>
                  <li className="flex items-center gap-3 stagger-item">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
                    Mobile applications
                  </li>
                  <li className="flex items-center gap-3 stagger-item">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse-subtle" />
                    Enterprise solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Hub Section */}
      <section id="content" className="py-24 bg-background section-reveal carbon-overlay">
        <div className="container">
          <div className="text-center mb-16 stagger-item">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Content Hub
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-light">
              Explore our diverse content across multiple platforms and formats
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Gaming Content */}
            <div className="relative group overflow-hidden rounded-lg border-2 border-border bg-white shadow-premium-md hover:shadow-premium-lg premium-hover-lift stagger-item carbon-overlay">
              <div
                className="h-48 bg-cover bg-center group-hover:scale-105 transition-smooth"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663551542742/ZpuWmBQWe8rgLV4hpbhgMq/luxury-content-bg-VqpYR5xdCQuJ9PSC4Yr5Bw.webp')`,
                }}
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 text-foreground">Gaming Content</h3>
                <p className="text-sm text-foreground/70 font-light">
                  Gameplay highlights, tutorials, and entertainment for the gaming community
                </p>
                <div className="mt-4 text-xs text-primary font-medium">YouTube • Instagram • TikTok</div>
              </div>
            </div>

            {/* Automotive */}
            <div className="relative group overflow-hidden rounded-lg border-2 border-border bg-white shadow-premium-md hover:shadow-premium-lg premium-hover-lift stagger-item carbon-overlay">
              <div
                className="h-48 bg-cover bg-center group-hover:scale-105 transition-smooth"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663551542742/ZpuWmBQWe8rgLV4hpbhgMq/luxury-content-bg-VqpYR5xdCQuJ9PSC4Yr5Bw.webp')`,
                }}
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 text-foreground">Automotive</h3>
                <p className="text-sm text-foreground/70 font-light">
                  Car reviews, driving experiences, and automotive lifestyle content
                </p>
                <div className="mt-4 text-xs text-primary font-medium">YouTube • Instagram</div>
              </div>
            </div>

            {/* Knowledge */}
            <div className="relative group overflow-hidden rounded-lg border-2 border-border bg-white shadow-premium-md hover:shadow-premium-lg premium-hover-lift stagger-item carbon-overlay">
              <div
                className="h-48 bg-cover bg-center group-hover:scale-105 transition-smooth"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663551542742/ZpuWmBQWe8rgLV4hpbhgMq/luxury-content-bg-VqpYR5xdCQuJ9PSC4Yr5Bw.webp')`,
                }}
              />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 text-foreground">Knowledge Reels</h3>
                <p className="text-sm text-foreground/70 font-light">
                  Educational content, insights, and valuable information in bite-sized format
                </p>
                <div className="mt-4 text-xs text-primary font-medium">Instagram • TikTok</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-24 bg-white/50 section-reveal carbon-overlay">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden border-2 border-primary shadow-premium-lg premium-hover-lift stagger-item">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663551542742/ZpuWmBQWe8rgLV4hpbhgMq/luxury-music-bg-XvPXCLw3yhyPb3ypQd3mKG.webp"
                alt="Music Production"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-0 carbon-weave opacity-20" />
            </div>
            <div className="stagger-item">
              <h2 className="font-display text-5xl md:text-6xl font-bold mb-8 text-foreground">
                Music Production
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed font-light">
                We're crafting original music that resonates with audiences worldwide. From cinematic compositions to energetic beats, our music production arm is creating the soundtrack to the Smile X experience.
              </p>
              <div className="space-y-4 mb-8">
                <div className="p-6 bg-white border-2 border-border rounded-lg shadow-premium-sm hover:shadow-premium-md hover-glow-gold transition-smooth premium-hover-lift stagger-item">
                  <div className="font-display font-bold text-primary mb-2">Cinematic Scores</div>
                  <p className="text-sm text-foreground/70 font-light">Epic compositions for trailers and media</p>
                </div>
                <div className="p-6 bg-white border-2 border-border rounded-lg shadow-premium-sm hover:shadow-premium-md hover-glow-gold transition-smooth premium-hover-lift stagger-item">
                  <div className="font-display font-bold text-primary mb-2">Electronic Beats</div>
                  <p className="text-sm text-foreground/70 font-light">High-energy tracks for gaming and content</p>
                </div>
                <div className="p-6 bg-white border-2 border-border rounded-lg shadow-premium-sm hover:shadow-premium-md hover-glow-gold transition-smooth premium-hover-lift stagger-item">
                  <div className="font-display font-bold text-primary mb-2">Original Compositions</div>
                  <p className="text-sm text-foreground/70 font-light">Unique pieces across multiple genres</p>
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary text-white font-display glow-gold hover-glow-gold border border-primary/20 button-premium premium-hover-lift">
                Listen to Our Music
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 bg-background section-reveal carbon-overlay">
        <div className="container">
          <div className="text-center mb-16 stagger-item">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Our Journey
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto font-light">
              From launch to empire: Watch how Smile X evolves
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { phase: "Month 1: Launch", desc: "Establish brand presence, showcase initial projects, build community", color: "primary" },
                { phase: "Months 2-3: Growth", desc: "Scale content, expand game portfolio, launch music platform", color: "secondary" },
                { phase: "Months 4-6: Expansion", desc: "AI tools beta, mobile app launch, business partnerships", color: "primary" },
                { phase: "Future: Empire", desc: "Full ecosystem, global reach, industry leadership", color: "secondary" },
              ].map((item, idx) => (
                <div key={idx} className="relative stagger-item">
                  <div className={`absolute -left-4 top-0 w-8 h-8 ${item.color === "primary" ? "bg-primary glow-gold" : "bg-secondary glow-bronze"} rounded-full border-4 border-background shadow-lg animate-pulse-subtle`} />
                  <div className="ml-4 pt-2 bg-white p-6 rounded-lg border-2 border-border shadow-premium-sm hover:shadow-premium-md transition-smooth premium-hover-lift carbon-overlay">
                    <h3 className={`font-display text-lg font-bold ${item.color === "primary" ? "text-primary" : "text-secondary"} mb-2`}>{item.phase}</h3>
                    <p className="text-sm text-foreground/70 font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Background */}
          <div className="mt-16 relative h-64 rounded-lg overflow-hidden border-2 border-border shadow-premium-lg premium-hover-lift stagger-item">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663551542742/ZpuWmBQWe8rgLV4hpbhgMq/luxury-roadmap-bg-HknG3KxVfoeByvSwSdZUE9.webp"
              alt="Roadmap"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute inset-0 carbon-weave opacity-20" />
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="py-24 bg-white/50 section-reveal carbon-overlay">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground stagger-item">
            Be Part of the
            <span className="block text-primary glow-text-gold mt-3 animate-pulse-subtle">Smile X Movement</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-8 font-light stagger-item">
            Join early believers and creators who are shaping the future. Subscribe to stay updated on launches, exclusive content, and special opportunities.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-8 stagger-item">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-white border-2 border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-smooth shadow-premium-sm carbon-overlay"
              required
            />
            <Button type="submit" className="bg-primary hover:bg-primary text-white font-display glow-gold hover-glow-gold border border-primary/20 button-premium premium-hover-lift">
              Subscribe
            </Button>
          </form>

          {submitted && (
            <div className="text-primary text-sm mb-8 font-medium stagger-item">
              ✓ Thanks for subscribing! Check your email for updates.
            </div>
          )}

          <div className="flex justify-center gap-6 stagger-item">
            <a href="#" className="text-foreground/60 hover:text-primary transition-smooth hover:animate-float-subtle">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-smooth hover:animate-float-subtle">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-smooth hover:animate-float-subtle">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-smooth hover:animate-float-subtle">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background section-reveal carbon-overlay">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="stagger-item">
              <h2 className="font-display text-5xl font-bold mb-8 text-foreground">
                Let's Collaborate
              </h2>
              <p className="text-lg text-foreground/80 mb-8 font-light">
                Have a project in mind? Want to partner with Smile X? We're always open to exciting collaborations and business opportunities.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1 animate-pulse-subtle" />
                  <div>
                    <div className="font-display font-bold text-foreground">Email</div>
                    <a href="mailto:hello@smilex.com" className="text-primary hover:text-primary/80 transition-smooth font-light">
                      hello@smilex.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4 stagger-item">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white border-2 border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-smooth shadow-premium-sm carbon-overlay"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white border-2 border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-smooth shadow-premium-sm carbon-overlay"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 bg-white border-2 border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-primary transition-smooth resize-none shadow-premium-sm carbon-overlay"
              />
              <Button className="w-full bg-primary hover:bg-primary text-white font-display glow-gold hover-glow-gold border border-primary/20 button-premium premium-hover-lift">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-border py-16 bg-white/50 carbon-overlay">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="stagger-item">
              <div className="font-display text-2xl font-bold text-primary glow-text-gold mb-4 animate-pulse-subtle">SMILE X</div>
              <p className="text-sm text-foreground/70 font-light">
                Building the future of entertainment and intelligence.
              </p>
            </div>
            <div className="stagger-item">
              <div className="font-display font-bold mb-4 text-foreground">Products</div>
              <ul className="space-y-2 text-sm text-foreground/70 font-light">
                <li><a href="#" className="hover:text-primary transition-smooth">Games</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Content</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Music</a></li>
              </ul>
            </div>
            <div className="stagger-item">
              <div className="font-display font-bold mb-4 text-foreground">Company</div>
              <ul className="space-y-2 text-sm text-foreground/70 font-light">
                <li><a href="#" className="hover:text-primary transition-smooth">About</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
              </ul>
            </div>
            <div className="stagger-item">
              <div className="font-display font-bold mb-4 text-foreground">Legal</div>
              <ul className="space-y-2 text-sm text-foreground/70 font-light">
                <li><a href="#" className="hover:text-primary transition-smooth">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-border pt-8 text-center text-sm text-foreground/70 font-light">
            <p>© 2026 Smile X. All rights reserved. Building the future, one creation at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
