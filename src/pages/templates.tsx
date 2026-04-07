import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { templatesList } from "@/components/templates";
import { defaultResumeData } from "@/lib/types";

export default function Templates() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Professional", "Modern", "Creative", "Minimal", "Executive", "With Photo"];

  const filteredTemplates = filter === "All" 
    ? templatesList 
    : templatesList.filter(t => t.category === filter);

  return (
    <div className="min-h-[100dvh] bg-slate-50 font-sans pb-24">
      <div className="bg-white border-b pt-16 pb-8 px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Template Gallery</h1>
          <p className="text-slate-600 text-lg max-w-2xl">Choose a foundation for your resume. You can always change it later without losing your content.</p>
          
          <div className="flex flex-wrap gap-2 mt-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                data-testid={`button-filter-${cat.toLowerCase()}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? "bg-slate-900 text-white shadow-md" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredTemplates.map(template => {
              const Component = template.component;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  key={template.id}
                >
                  <Link href={`/builder/${template.id}`} className="block group" data-testid={`link-template-${template.id}`}>
                    <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                      <div className="aspect-[1/1.414] relative bg-slate-100 overflow-hidden">
                        {/* Mini preview scale trick */}
                        <div className="absolute top-0 left-0 w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none">
                          <Component data={defaultResumeData} />
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                      </div>
                      <div className="p-4 border-t border-slate-100 bg-white">
                        <div className="flex justify-between items-center gap-2">
                          <h3 className="font-bold text-slate-900">{template.name}</h3>
                          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded shrink-0">
                            {template.category}
                          </span>
                        </div>
                        <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:translate-x-0.5 transition-transform duration-200">
                          Use Template
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
