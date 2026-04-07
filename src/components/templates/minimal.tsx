import { TemplateProps } from "./index";

function SectionHeading({ children }: { children: string }) {
  return <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">{children}</h2>;
}

export function PureTemplate({ data }: TemplateProps) {
  const technicalSkills = data.skillCategories?.technical?.length ? data.skillCategories.technical : data.skills;
  const tools = data.skillCategories?.tools || [];
  const softSkills = data.skillCategories?.soft || [];

  return (
    <div className="bg-white w-full h-full text-zinc-900 font-sans p-12">
      <header className="mb-12">
        <h1 className="text-3xl font-light tracking-tight mb-1">{data.personalInfo.name}</h1>
        <p className="text-zinc-500 font-medium text-sm tracking-wide">{data.personalInfo.title}</p>
        <div className="mt-4 flex gap-4 text-xs text-zinc-400">
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">Profile</h2>
        </div>
        <div className="col-span-9">
          <p className="text-sm text-zinc-600 leading-relaxed mb-12">
            {data.personalInfo.summary}
          </p>
        </div>

        <div className="col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">Experience</h2>
        </div>
        <div className="col-span-9 space-y-8 mb-12">
          {data.experience.map(exp => (
            <div key={exp.id}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-sm font-semibold">{exp.company}</h3>
                <span className="text-xs text-zinc-400">{exp.startDate} — {exp.current ? 'Present' : exp.endDate}</span>
              </div>
              <p className="text-sm text-zinc-500 mb-3">{exp.role}</p>
              <ul className="text-sm text-zinc-600 space-y-1.5 list-none">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="relative pl-3 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1 before:h-1 before:bg-zinc-300 before:rounded-full">
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="col-span-3">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">Education</h2>
        </div>
        <div className="col-span-9 space-y-4 mb-12">
          {data.education.map(edu => (
            <div key={edu.id} className="flex justify-between items-baseline">
              <div>
                <h3 className="text-sm font-semibold">{edu.institution}</h3>
                <p className="text-sm text-zinc-500">{edu.degree} in {edu.field}</p>
              </div>
              <span className="text-xs text-zinc-400">{edu.startDate} — {edu.endDate}</span>
            </div>
          ))}
        </div>

        <div className="col-span-3">
          <SectionHeading>Projects</SectionHeading>
        </div>
        <div className="col-span-9 space-y-4 mb-12">
          {data.projects.map((project) => (
            <div key={project.id} className="space-y-1">
              <div className="flex justify-between items-baseline gap-3">
                <h3 className="text-sm font-semibold text-zinc-800">{project.title}</h3>
                <span className="text-xs text-zinc-400">{project.tools.join(", ")}</span>
              </div>
              <p className="text-sm text-zinc-500">{project.description}</p>
              <p className="text-sm text-zinc-600"><span className="font-semibold text-zinc-800">Impact:</span> {project.impact}</p>
            </div>
          ))}
        </div>

        <div className="col-span-3">
          <SectionHeading>Skills</SectionHeading>
        </div>
        <div className="col-span-9 space-y-4 mb-12 text-sm text-zinc-600">
          <p><span className="font-semibold text-zinc-800">Technical:</span> {technicalSkills.join(", ")}</p>
          <p><span className="font-semibold text-zinc-800">Tools:</span> {tools.join(", ")}</p>
          {softSkills.length > 0 && <p><span className="font-semibold text-zinc-800">Soft:</span> {softSkills.join(", ")}</p>}
        </div>
      </div>
    </div>
  );
}

export function WhisperTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-[#fafafa] w-full h-full text-zinc-800 font-sans p-12">
      <div className="max-w-2xl mx-auto space-y-10">
        <header className="text-center space-y-2">
          <h1 className="text-2xl font-medium text-zinc-900">{data.personalInfo.name}</h1>
          <p className="text-sm text-zinc-500">{data.personalInfo.title}</p>
          <div className="flex justify-center gap-3 text-xs text-zinc-400 mt-2">
            <span>{data.personalInfo.email}</span>
            <span>·</span>
            <span>{data.personalInfo.phone}</span>
            <span>·</span>
            <span>{data.personalInfo.location}</span>
          </div>
        </header>

        <p className="text-sm text-zinc-600 leading-loose text-center italic">
          "{data.personalInfo.summary}"
        </p>

        <section>
          <div className="flex justify-center mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">Experience</span>
          </div>
          <div className="space-y-8">
            {data.experience.map(exp => (
              <div key={exp.id} className="group">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm font-medium text-zinc-800">{exp.role}</h3>
                  <span className="text-xs text-zinc-400">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <p className="text-xs text-zinc-500 mb-2">{exp.company}</p>
                <ul className="text-sm text-zinc-600 space-y-1">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-zinc-300">-</span> <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-center mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">Education</span>
          </div>
          <div className="space-y-4">
            {data.education.map(edu => (
              <div key={edu.id} className="flex justify-between items-baseline text-sm">
                <div>
                  <span className="font-medium text-zinc-800">{edu.degree} in {edu.field}</span>
                  <span className="text-zinc-500">, {edu.institution}</span>
                </div>
                <span className="text-xs text-zinc-400">{edu.startDate} - {edu.endDate}</span>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <div className="flex justify-center mb-6">
            <span className="text-xs font-semibold tracking-[0.2em] text-zinc-400 uppercase">Skills</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-zinc-500">
            {data.skills.map((skill, i) => (
              <span key={i}>{skill}</span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export function LineTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-white w-full h-full text-black font-sans p-10">
      <div className="border-b border-black pb-8 mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold mb-1">{data.personalInfo.name}</h1>
          <p className="text-lg">{data.personalInfo.title}</p>
        </div>
        <div className="text-right text-sm space-y-1">
          <p>{data.personalInfo.email}</p>
          <p>{data.personalInfo.phone}</p>
          <p>{data.personalInfo.location}</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-1 border-r border-black pr-8 space-y-8 text-right">
          <section>
            <h2 className="text-sm font-bold uppercase mb-4">Skills</h2>
            <div className="space-y-1 text-sm">
              {data.skills.map((skill, i) => <p key={i}>{skill}</p>)}
            </div>
          </section>
          
          <section>
            <h2 className="text-sm font-bold uppercase mb-4">Education</h2>
            <div className="space-y-4 text-sm">
              {data.education.map(edu => (
                <div key={edu.id}>
                  <p className="font-bold">{edu.degree}</p>
                  <p>{edu.field}</p>
                  <p className="text-gray-600 mt-1">{edu.institution}</p>
                  <p className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="col-span-3 space-y-8">
          <section className="border-b border-black pb-8">
            <h2 className="text-sm font-bold uppercase mb-4">Profile</h2>
            <p className="text-sm leading-relaxed">
              {data.personalInfo.summary}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-bold uppercase mb-4">Experience</h2>
            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div key={exp.id} className={index !== data.experience.length - 1 ? "border-b border-gray-200 pb-6" : ""}>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <span className="text-sm">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  <p className="text-md mb-3">{exp.company}</p>
                  <ul className="text-sm space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-4">
                        <span className="text-gray-400">/</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export function DotTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-white w-full h-full text-slate-800 font-sans p-12">
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-full bg-slate-900" />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{data.personalInfo.name}</h1>
          <p className="text-slate-500 font-medium">{data.personalInfo.title}</p>
        </div>
      </div>

      <div className="flex gap-4 text-xs text-slate-500 mb-10 font-medium">
        <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"/> {data.personalInfo.email}</span>
        <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"/> {data.personalInfo.phone}</span>
        <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-slate-300"/> {data.personalInfo.location}</span>
      </div>

      <p className="text-sm text-slate-700 leading-relaxed mb-10 pl-6 border-l border-slate-200">
        {data.personalInfo.summary}
      </p>

      <div className="space-y-10">
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-slate-900" />
            <h2 className="text-lg font-bold text-slate-900">Experience</h2>
          </div>
          <div className="space-y-8 pl-5">
            {data.experience.map(exp => (
              <div key={exp.id} className="relative">
                <div className="absolute -left-[23px] top-1.5 w-2 h-2 rounded-full border-2 border-slate-400 bg-white" />
                <h3 className="text-md font-bold text-slate-800">{exp.role} <span className="font-normal text-slate-500 ml-2">at {exp.company}</span></h3>
                <p className="text-xs text-slate-400 mb-3">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
                <ul className="text-sm text-slate-600 space-y-2 list-none">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-slate-300">•</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-slate-900" />
            <h2 className="text-lg font-bold text-slate-900">Education & Skills</h2>
          </div>
          <div className="grid grid-cols-2 gap-8 pl-5">
            <div className="space-y-4">
              {data.education.map(edu => (
                <div key={edu.id} className="relative">
                  <div className="absolute -left-[23px] top-1.5 w-2 h-2 rounded-full border-2 border-slate-400 bg-white" />
                  <p className="text-sm font-bold text-slate-800">{edu.degree}</p>
                  <p className="text-sm text-slate-600">{edu.institution}</p>
                  <p className="text-xs text-slate-400 mt-1">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-100 rounded text-xs font-medium text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export function GhostTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-white w-full h-full text-slate-800 font-sans p-12 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-40 -left-20 w-40 h-40 bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative z-10 space-y-12">
        <header className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-extralight tracking-widest text-slate-900 mb-2">{data.personalInfo.name}</h1>
          <p className="text-sm font-medium tracking-widest text-slate-400 uppercase">{data.personalInfo.title}</p>
        </header>

        <div className="flex justify-center gap-8 text-xs text-slate-400 border-y border-slate-100 py-4">
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed text-center max-w-2xl mx-auto">
          {data.personalInfo.summary}
        </p>

        <div className="grid grid-cols-2 gap-12">
          <section className="space-y-8">
            <h2 className="text-xs font-medium text-slate-400 uppercase tracking-widest">Experience</h2>
            <div className="space-y-6">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <p className="text-xs text-slate-400 mb-1">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
                  <h3 className="text-sm font-medium text-slate-900">{exp.role}</h3>
                  <p className="text-sm text-slate-500 mb-2">{exp.company}</p>
                  <ul className="text-xs text-slate-500 space-y-1 list-disc list-inside opacity-80 hover:opacity-100 transition-opacity">
                    {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-12">
            <section className="space-y-6">
              <h2 className="text-xs font-medium text-slate-400 uppercase tracking-widest">Education</h2>
              <div className="space-y-4">
                {data.education.map(edu => (
                  <div key={edu.id}>
                    <p className="text-xs text-slate-400 mb-1">{edu.startDate} - {edu.endDate}</p>
                    <p className="text-sm font-medium text-slate-900">{edu.degree}</p>
                    <p className="text-sm text-slate-500">{edu.field}</p>
                    <p className="text-xs text-slate-400 mt-1">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xs font-medium text-slate-400 uppercase tracking-widest">Skills</h2>
              <p className="text-xs text-slate-500 leading-loose">
                {data.skills.join("  ·  ")}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
