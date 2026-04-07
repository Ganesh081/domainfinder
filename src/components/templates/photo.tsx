import { TemplateProps } from "./index";
import { User } from "lucide-react";

type AccentTone = "slate" | "indigo" | "emerald" | "amber" | "rose";

const toneStyles: Record<
  AccentTone,
  { heading: string; cardBg: string; cardBorder: string; chip: string }
> = {
  slate: {
    heading: "text-slate-700",
    cardBg: "bg-slate-50",
    cardBorder: "border-slate-200",
    chip: "text-slate-500",
  },
  indigo: {
    heading: "text-indigo-600",
    cardBg: "bg-indigo-50",
    cardBorder: "border-indigo-100",
    chip: "text-indigo-500",
  },
  emerald: {
    heading: "text-emerald-700",
    cardBg: "bg-emerald-50",
    cardBorder: "border-emerald-100",
    chip: "text-emerald-600",
  },
  amber: {
    heading: "text-amber-700",
    cardBg: "bg-amber-50",
    cardBorder: "border-amber-100",
    chip: "text-amber-600",
  },
  rose: {
    heading: "text-rose-600",
    cardBg: "bg-rose-50",
    cardBorder: "border-rose-100",
    chip: "text-rose-500",
  },
};

function SectionHeading({ children, className }: { children: string; className: string }) {
  return <h2 className={`text-xs font-bold uppercase tracking-widest mb-3 ${className}`}>{children}</h2>;
}

function AdditionalSections({ data, tone = "slate" }: TemplateProps & { tone?: AccentTone }) {
  const styles = toneStyles[tone];
  const technicalSkills = data.skillCategories?.technical?.length ? data.skillCategories.technical : data.skills;
  const tools = data.skillCategories?.tools || [];
  const softSkills = data.skillCategories?.soft || [];

  return (
    <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-slate-600">
      <section>
        <SectionHeading className={styles.heading}>Projects</SectionHeading>
        <div className="space-y-3">
          {data.projects.map((project) => (
            <div key={project.id} className={`${styles.cardBg} rounded-xl p-3 border ${styles.cardBorder}`}>
              <p className="font-bold text-slate-900 text-xs">{project.title}</p>
              <p className="mt-1 leading-relaxed">{project.description}</p>
              <p className="mt-1"><span className="font-semibold text-slate-800">Impact:</span> {project.impact}</p>
              <p className={`text-[10px] uppercase tracking-widest mt-1 ${styles.chip}`}>{project.tools.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading className={styles.heading}>Skills</SectionHeading>
        <div className="space-y-2">
          <p><span className="font-semibold text-slate-800">Technical:</span> {technicalSkills.join(", ")}</p>
          <p><span className="font-semibold text-slate-800">Tools:</span> {tools.join(", ")}</p>
          {softSkills.length > 0 && <p><span className="font-semibold text-slate-800">Soft:</span> {softSkills.join(", ")}</p>}
        </div>
      </section>
    </div>
  );
}

function PhotoPlaceholder({ size = 96, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`bg-slate-200 flex items-center justify-center overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <User size={size * 0.5} className="text-slate-400" />
    </div>
  );
}

function PhotoCircle({ photo, size = 96, className = "" }: { photo?: string; size?: number; className?: string }) {
  return (
    <div
      className={`rounded-full overflow-hidden shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {photo ? (
        <img src={photo} alt="Profile" className="w-full h-full object-cover" />
      ) : (
        <PhotoPlaceholder size={size} />
      )}
    </div>
  );
}

function PhotoRect({ photo, width = 96, height = 120, className = "" }: { photo?: string; width?: number; height?: number; className?: string }) {
  return (
    <div
      className={`overflow-hidden shrink-0 ${className}`}
      style={{ width, height }}
    >
      {photo ? (
        <img src={photo} alt="Profile" className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full bg-slate-200 flex items-center justify-center">
          <User size={Math.min(width, height) * 0.5} className="text-slate-400" />
        </div>
      )}
    </div>
  );
}

export function VisageTemplate({ data }: TemplateProps) {
  const { personalInfo: p, experience, education, skills } = data;
  return (
    <div className="bg-white w-full h-full text-slate-800 font-sans text-sm">
      <div className="flex flex-row">
        {/* Dark sidebar */}
        <div className="w-[38%] bg-slate-900 text-white p-7 flex flex-col gap-6">
        <div className="flex flex-col items-center text-center gap-4 pb-6 border-b border-slate-700">
          <PhotoCircle photo={p.photo} size={110} className="border-4 border-slate-600 shadow-xl" />
          <div>
            <h1 className="text-2xl font-bold leading-tight">{p.name}</h1>
            <p className="text-indigo-400 font-medium mt-1 text-sm">{p.title}</p>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Contact</h2>
          <div className="flex flex-col gap-2 text-slate-300 text-xs leading-relaxed">
            {p.email && <span>{p.email}</span>}
            {p.phone && <span>{p.phone}</span>}
            {p.location && <span>{p.location}</span>}
            {p.website && <span>{p.website}</span>}
          </div>
        </div>

        {skills.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Skills</h2>
            <div className="flex flex-col gap-1.5">
              {skills.map((skill, i) => (
                <span key={i} className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded">{skill}</span>
              ))}
            </div>
          </div>
        )}

        {education.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Education</h2>
            <div className="flex flex-col gap-4">
              {education.map(edu => (
                <div key={edu.id}>
                  <p className="text-white font-semibold text-xs">{edu.degree} in {edu.field}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{edu.institution}</p>
                  <p className="text-slate-500 text-xs">{edu.startDate} – {edu.endDate}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        </div>

        {/* Main content */}
        <div className="flex-1 p-7 flex flex-col gap-6 overflow-hidden">
        {p.summary && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">About Me</h2>
            <p className="text-slate-600 leading-relaxed">{p.summary}</p>
          </div>
        )}

        {experience.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Experience</h2>
            <div className="flex flex-col gap-5">
              {experience.map(exp => (
                <div key={exp.id} className="relative pl-4 border-l-2 border-indigo-100">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-indigo-400" />
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h3 className="font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-slate-400 text-xs shrink-0 ml-2">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  <p className="text-indigo-600 text-xs font-medium mb-1.5">{exp.company}</p>
                  <ul className="flex flex-col gap-0.5 text-slate-600 text-xs">
                    {exp.bullets.filter(Boolean).map((b, i) => (
                      <li key={i} className="flex gap-1.5"><span className="text-indigo-300 mt-0.5">•</span>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        </div>
      </div>

      <div className="px-7 pb-7">
        <AdditionalSections data={data} tone="indigo" />
      </div>
    </div>
  );
}

export function PortraitTemplate({ data }: TemplateProps) {
  const { personalInfo: p, experience, education, skills } = data;
  return (
    <div className="bg-white w-full h-full text-slate-800 font-sans text-sm p-10">
      {/* Header with photo top-right */}
      <div className="flex items-start justify-between pb-6 border-b-2 border-slate-900 mb-6">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-slate-900 leading-tight">{p.name}</h1>
          <p className="text-lg text-slate-500 font-medium mt-1">{p.title}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-xs text-slate-500">
            {p.email && <span>{p.email}</span>}
            {p.phone && <span>{p.phone}</span>}
            {p.location && <span>{p.location}</span>}
            {p.website && <span>{p.website}</span>}
          </div>
        </div>
        <PhotoRect photo={p.photo} width={100} height={120} className="rounded-lg ml-6 border border-slate-200 shadow-md" />
      </div>

      {p.summary && (
        <div className="mb-6">
          <p className="text-slate-600 leading-relaxed">{p.summary}</p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 flex flex-col gap-6">
          {experience.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-4">Professional Experience</h2>
              <div className="flex flex-col gap-5">
                {experience.map(exp => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-slate-900">{exp.role}</h3>
                      <span className="text-slate-400 text-xs">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                    </div>
                    <p className="text-slate-600 text-xs font-semibold mb-2">{exp.company}</p>
                    <ul className="flex flex-col gap-1 text-slate-600 text-xs list-disc list-inside">
                      {exp.bullets.filter(Boolean).map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-6">
          {education.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-3">Education</h2>
              {education.map(edu => (
                <div key={edu.id} className="mb-3">
                  <p className="font-semibold text-slate-900 text-xs">{edu.degree}</p>
                  <p className="text-slate-600 text-xs">{edu.field}</p>
                  <p className="text-slate-500 text-xs">{edu.institution}</p>
                  <p className="text-slate-400 text-xs">{edu.startDate} – {edu.endDate}</p>
                </div>
              ))}
            </div>
          )}
          {skills.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-1 mb-3">Skills</h2>
              <div className="flex flex-col gap-1">
                {skills.map((skill, i) => (
                  <span key={i} className="text-xs text-slate-600">— {skill}</span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      <AdditionalSections data={data} tone="slate" />
    </div>
  );
}

export function HorizonTemplate({ data }: TemplateProps) {
  const { personalInfo: p, experience, education, skills } = data;
  return (
    <div className="bg-white w-full h-full text-slate-800 font-sans text-sm">
      {/* Banner header */}
      <div className="bg-gradient-to-r from-emerald-700 to-teal-500 h-28 relative" />
      <div className="px-10 pb-8">
        {/* Photo overlapping the banner */}
        <div className="flex items-end gap-5 -mt-14 mb-5">
          <PhotoCircle
            photo={p.photo}
            size={112}
            className="border-4 border-white shadow-xl bg-white"
          />
          <div className="pb-2">
            <h1 className="text-3xl font-bold text-slate-900 leading-tight">{p.name}</h1>
            <p className="text-emerald-600 font-semibold mt-0.5">{p.title}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500 mb-6 pb-4 border-b border-slate-100">
          {p.email && <span>{p.email}</span>}
          {p.phone && <span>{p.phone}</span>}
          {p.location && <span>{p.location}</span>}
          {p.website && <span>{p.website}</span>}
        </div>

        {p.summary && (
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">Summary</h2>
            <p className="text-slate-600 leading-relaxed">{p.summary}</p>
          </div>
        )}

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-3 flex flex-col gap-6">
            {experience.length > 0 && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">Experience</h2>
                <div className="flex flex-col gap-5">
                  {experience.map(exp => (
                    <div key={exp.id}>
                      <div className="flex justify-between items-baseline mb-0.5">
                        <h3 className="font-bold text-slate-900">{exp.role}</h3>
                        <span className="text-slate-400 text-xs">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                      </div>
                      <p className="text-teal-600 text-xs font-semibold mb-1.5">{exp.company}</p>
                      <ul className="flex flex-col gap-1 text-slate-600 text-xs list-disc list-inside">
                        {exp.bullets.filter(Boolean).map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="col-span-2 flex flex-col gap-6">
            {education.length > 0 && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">Education</h2>
                {education.map(edu => (
                  <div key={edu.id} className="mb-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                    <p className="font-semibold text-slate-900 text-xs">{edu.degree}</p>
                    <p className="text-slate-600 text-xs">{edu.field}</p>
                    <p className="text-slate-500 text-xs">{edu.institution}</p>
                    <p className="text-slate-400 text-xs">{edu.startDate} – {edu.endDate}</p>
                  </div>
                ))}
              </div>
            )}
            {skills.length > 0 && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">Skills</h2>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill, i) => (
                    <span key={i} className="text-xs bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <AdditionalSections data={data} tone="emerald" />
      </div>
    </div>
  );
}

export function LumiereTemplate({ data }: TemplateProps) {
  const { personalInfo: p, experience, education, skills } = data;
  return (
    <div className="bg-white w-full h-full text-slate-800 font-sans text-sm">
      {/* Elegant header with gold accent */}
      <div className="bg-amber-50 border-b-2 border-amber-300 px-10 py-8">
        <div className="flex items-center gap-7">
          <PhotoRect
            photo={p.photo}
            width={90}
            height={110}
            className="rounded border-2 border-amber-300 shadow-md"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-900 font-serif tracking-tight leading-tight">{p.name}</h1>
            <p className="text-amber-700 font-semibold mt-1 text-base">{p.title}</p>
            <div className="h-px bg-amber-300 my-3 w-24" />
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500">
              {p.email && <span>{p.email}</span>}
              {p.phone && <span>{p.phone}</span>}
              {p.location && <span>{p.location}</span>}
              {p.website && <span>{p.website}</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 py-7 flex gap-8">
        <div className="flex-1 flex flex-col gap-6">
          {p.summary && (
            <div>
              <h2 className="font-serif text-base font-bold text-slate-900 pb-1 border-b border-amber-300 mb-3">Profile</h2>
              <p className="text-slate-600 leading-relaxed">{p.summary}</p>
            </div>
          )}
          {experience.length > 0 && (
            <div>
              <h2 className="font-serif text-base font-bold text-slate-900 pb-1 border-b border-amber-300 mb-4">Experience</h2>
              <div className="flex flex-col gap-5">
                {experience.map(exp => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h3 className="font-bold text-slate-900">{exp.role}</h3>
                      <span className="text-slate-400 text-xs">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                    </div>
                    <p className="text-amber-700 text-xs font-semibold mb-1.5 italic">{exp.company}</p>
                    <ul className="flex flex-col gap-1 text-slate-600 text-xs list-disc list-inside">
                      {exp.bullets.filter(Boolean).map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="w-44 flex flex-col gap-6 shrink-0">
          {education.length > 0 && (
            <div>
              <h2 className="font-serif text-base font-bold text-slate-900 pb-1 border-b border-amber-300 mb-3">Education</h2>
              {education.map(edu => (
                <div key={edu.id} className="mb-3">
                  <p className="font-semibold text-slate-900 text-xs">{edu.degree}</p>
                  <p className="text-slate-500 text-xs">{edu.field}</p>
                  <p className="text-slate-500 text-xs italic">{edu.institution}</p>
                  <p className="text-slate-400 text-xs">{edu.startDate} – {edu.endDate}</p>
                </div>
              ))}
            </div>
          )}
          {skills.length > 0 && (
            <div>
              <h2 className="font-serif text-base font-bold text-slate-900 pb-1 border-b border-amber-300 mb-3">Skills</h2>
              <div className="flex flex-col gap-1.5">
                {skills.map((skill, i) => (
                  <span key={i} className="text-xs text-slate-600 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-10 pb-7">
        <AdditionalSections data={data} tone="amber" />
      </div>
    </div>
  );
}

export function SpotlightTemplate({ data }: TemplateProps) {
  const { personalInfo: p, experience, education, skills } = data;
  return (
    <div className="bg-white w-full h-full font-sans text-sm">
      {/* Bold top header with large circular photo */}
      <div className="bg-rose-600 text-white px-10 pt-8 pb-6 flex items-center gap-7">
        <PhotoCircle
          photo={p.photo}
          size={100}
          className="border-4 border-rose-400 shadow-2xl shrink-0"
        />
        <div>
          <h1 className="text-3xl font-black leading-tight tracking-tight">{p.name}</h1>
          <p className="text-rose-200 font-medium text-base mt-1">{p.title}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-2 text-xs text-rose-100">
            {p.email && <span>{p.email}</span>}
            {p.phone && <span>{p.phone}</span>}
            {p.location && <span>{p.location}</span>}
            {p.website && <span>{p.website}</span>}
          </div>
        </div>
      </div>

      {/* Skills ribbon */}
      {skills.length > 0 && (
        <div className="bg-rose-50 border-b border-rose-100 px-10 py-3 flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span key={i} className="text-xs bg-white text-rose-700 border border-rose-200 px-2.5 py-1 rounded-full font-medium shadow-sm">{skill}</span>
          ))}
        </div>
      )}

      <div className="px-10 py-7 flex gap-8">
        <div className="flex-1 flex flex-col gap-6">
          {p.summary && (
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-rose-600 mb-2">About</h2>
              <p className="text-slate-600 leading-relaxed">{p.summary}</p>
            </div>
          )}
          {experience.length > 0 && (
            <div>
              <h2 className="text-xs font-black uppercase tracking-widest text-rose-600 mb-4">Experience</h2>
              <div className="flex flex-col gap-5">
                {experience.map(exp => (
                  <div key={exp.id} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h3 className="font-bold text-slate-900">{exp.role}</h3>
                      <span className="text-slate-400 text-xs">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                    </div>
                    <p className="text-rose-600 text-xs font-bold mb-2">{exp.company}</p>
                    <ul className="flex flex-col gap-1 text-slate-600 text-xs">
                      {exp.bullets.filter(Boolean).map((b, i) => (
                        <li key={i} className="flex gap-1.5"><span className="text-rose-300 mt-0.5 font-bold">›</span>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        {education.length > 0 && (
          <div className="w-44 shrink-0">
            <h2 className="text-xs font-black uppercase tracking-widest text-rose-600 mb-4">Education</h2>
            <div className="flex flex-col gap-3">
              {education.map(edu => (
                <div key={edu.id} className="p-3 bg-rose-50 rounded-xl border border-rose-100">
                  <p className="font-bold text-slate-900 text-xs">{edu.degree}</p>
                  <p className="text-slate-500 text-xs">{edu.field}</p>
                  <p className="text-slate-500 text-xs">{edu.institution}</p>
                  <p className="text-slate-400 text-xs">{edu.startDate} – {edu.endDate}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="px-10 pb-7">
        <AdditionalSections data={data} tone="rose" />
      </div>
    </div>
  );
}
