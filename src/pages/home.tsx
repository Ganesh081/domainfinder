import { useLocation, Link } from "wouter";
import { FileText, Sparkles, Layout, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans bg-slate-50 overflow-hidden">
      {/* Navbar */}
      <nav className="w-full bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-primary">
            <Layout className="w-6 h-6" />
            <span>ResumeCraft</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/templates" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" data-testid="link-nav-templates">
              Templates
            </Link>
            <Link href="/templates" className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-sm hover:bg-primary/90 transition-colors" data-testid="link-nav-build">
              Build Resume
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
              Create a resume that <span className="text-primary relative whitespace-nowrap">
                opens doors
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary/20 -z-10 rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              No more fighting with formatting. Choose a premium template, fill in your details, and download a beautiful PDF in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/templates" className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2" data-testid="link-hero-templates">
                <Sparkles className="w-5 h-5" />
                Choose a Template
              </Link>
              <Link href="/templates" className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all flex items-center gap-2" data-testid="link-hero-gallery">
                View Gallery
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-500 font-medium">Free to use • No login required • Instant PDF download</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need to land the interview</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our tools are designed by industry professionals to highlight your strengths.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Premium Templates</h3>
              <p className="text-slate-600 leading-relaxed">Choose from 25+ professionally designed templates tailored for different industries and experience levels.</p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Real-time Preview</h3>
              <p className="text-slate-600 leading-relaxed">See your resume come to life as you type. Our split-screen editor makes updating your information a breeze.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Instant PDF</h3>
              <p className="text-slate-600 leading-relaxed">No watermarks, no paywalls. Download your pixel-perfect PDF instantly and apply to jobs right away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Footer */}
      <footer className="bg-slate-900 py-12 px-6 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-white mb-4 md:mb-0">
            <Layout className="w-6 h-6 text-primary" />
            <span>ResumeCraft</span>
          </div>
          <p className="text-slate-400 text-sm">Build something great today.</p>
        </div>
      </footer>
    </div>
  );
}
