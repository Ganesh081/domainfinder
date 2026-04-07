import { TemplateProps } from "./index";

function SectionLabel({ children }: { children: string }) {
  return <h2 className="text-3xl font-black mb-4 text-[#2a2723]">{children}</h2>;
}

function SectionBlock({ children, className = "" }: { children: any; className?: string }) {
  return <section className={`space-y-4 ${className}`}>{children}</section>;
}

export function CanvasTemplate({ data }: TemplateProps) {
  const technicalSkills = data.skillCategories?.technical?.length ? data.skillCategories.technical : data.skills;
  const tools = data.skillCategories?.tools || [];
  const softSkills = data.skillCategories?.soft || [];

  return (
    <div className="bg-[#f4f1eb] w-full h-full text-[#3e3a35] font-serif p-12 flex flex-col">
      <header className="flex flex-col items-center text-center mb-12">
        <h1 className="text-6xl font-black tracking-tighter text-[#2a2723] mb-4 relative inline-block">
          {data.personalInfo.name}
          <div className="absolute -bottom-2 left-0 w-full h-4 bg-[#e86a33] opacity-30 -rotate-1 mix-blend-multiply"></div>
        </h1>
        <p className="text-2xl font-bold italic text-[#e86a33] mb-6">{data.personalInfo.title}</p>
        <div className="flex gap-6 text-sm font-sans font-bold text-[#68635c] uppercase tracking-widest">
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-12 gap-12">
        <div className="col-span-5 space-y-10">
          <SectionBlock>
            <SectionLabel>Profile.</SectionLabel>
            <p className="text-sm font-sans font-medium text-[#68635c] leading-relaxed">
              {data.personalInfo.summary}
            </p>
          </SectionBlock>

          <SectionBlock>
            <SectionLabel>Skills.</SectionLabel>
            <div className="flex flex-wrap gap-3">
              {technicalSkills.map((skill, i) => (
                <span key={i} className="font-sans font-bold text-sm bg-[#3e3a35] text-[#f4f1eb] px-3 py-1 shadow-[4px_4px_0px_#e86a33]">
                  {skill}
                </span>
              ))}
            </div>
            {tools.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8f8980] mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, i) => (
                    <span key={i} className="text-xs font-semibold bg-[#eae6df] text-[#3e3a35] px-2.5 py-1 rounded-full">{tool}</span>
                  ))}
                </div>
              </div>
            )}
            {softSkills.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#8f8980] mb-2">Soft Skills</p>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((softSkill, i) => (
                    <span key={i} className="text-xs font-semibold bg-[#f3ede6] text-[#3e3a35] px-2.5 py-1 rounded-full">{softSkill}</span>
                  ))}
                </div>
              </div>
            )}
          </SectionBlock>

          <SectionBlock>
            <SectionLabel>Education.</SectionLabel>
            <div className="space-y-6">
              {data.education.map(edu => (
                <div key={edu.id} className="font-sans">
                  <p className="font-bold text-lg text-[#2a2723]">{edu.degree}</p>
                  <p className="font-bold text-[#e86a33] mb-1">{edu.field}</p>
                  <p className="text-sm font-medium text-[#68635c]">{edu.institution}</p>
                  <p className="text-xs font-bold text-[#8f8980] mt-1">{edu.startDate} — {edu.endDate}</p>
                </div>
              ))}
            </div>
          </SectionBlock>

          <SectionBlock>
            <SectionLabel>Projects.</SectionLabel>
            <div className="space-y-4">
              {data.projects.map((project) => (
                <div key={project.id} className="bg-white/60 border border-[#d9d4cb] p-4 shadow-[4px_4px_0px_#d9d4cb]">
                  <p className="font-bold text-lg text-[#2a2723]">{project.title}</p>
                  <p className="text-sm font-sans text-[#68635c] mt-1 leading-relaxed">{project.description}</p>
                  <p className="text-sm font-sans text-[#68635c] mt-2"><span className="font-bold text-[#e86a33]">Impact:</span> {project.impact}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8f8980] mt-2">{project.tools.join(", ")}</p>
                </div>
              ))}
            </div>
          </SectionBlock>

        </div>

        <div className="col-span-7 space-y-10">
          <section>
            <h2 className="text-3xl font-black mb-6 text-[#2a2723]">Experience.</h2>
            <div className="space-y-10">
              {data.experience.map(exp => (
                <div key={exp.id} className="relative">
                  <div className="absolute -left-6 top-2 text-[#e86a33] font-black text-2xl">›</div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-2xl font-bold text-[#2a2723]">{exp.role}</h3>
                  </div>
                  <p className="text-lg font-bold italic text-[#e86a33] mb-1">{exp.company}</p>
                  <p className="font-sans text-xs font-bold text-[#8f8980] uppercase tracking-widest mb-4">
                    {exp.startDate} — {exp.current ? 'Present' : exp.endDate}
                  </p>
                  <ul className="font-sans text-sm font-medium text-[#68635c] space-y-2 list-none">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="pl-4 border-l-2 border-[#d9d4cb]">{b}</li>
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

export function StudioTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-white w-full h-full text-zinc-900 font-sans grid grid-cols-12">
      <div className="col-span-4 bg-zinc-900 text-zinc-300 p-10 flex flex-col justify-between">
        <div>
          <h1 className="text-5xl font-black text-white leading-none tracking-tighter mb-4 break-words">
            {data.personalInfo.name.split(' ').map((n, i) => <div key={i}>{n}</div>)}
          </h1>
          <p className="text-xl font-medium text-pink-500 tracking-tight">{data.personalInfo.title}</p>
        </div>

        <div className="space-y-8 my-12">
          <section>
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Contact</h2>
            <div className="space-y-2 text-sm font-medium text-zinc-400">
              <p>{data.personalInfo.email}</p>
              <p>{data.personalInfo.phone}</p>
              <p>{data.personalInfo.location}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Education</h2>
            <div className="space-y-4">
              {data.education.map(edu => (
                <div key={edu.id} className="text-sm">
                  <p className="font-bold text-zinc-200">{edu.degree}</p>
                  <p className="text-zinc-500">{edu.institution}</p>
                  <p className="text-xs text-pink-500 font-bold mt-1">{edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="col-span-8 p-12 space-y-12">
        <section>
          <h2 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">Bio</h2>
          <p className="text-lg font-medium text-zinc-800 leading-snug">
            {data.personalInfo.summary}
          </p>
        </section>

        <section>
          <h2 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] mb-6">Experience</h2>
          <div className="space-y-10">
            {data.experience.map(exp => (
              <div key={exp.id} className="grid grid-cols-4 gap-6">
                <div className="col-span-1 text-xs font-bold text-zinc-400 uppercase tracking-wider pt-1">
                  {exp.startDate} - <br/>{exp.current ? 'Present' : exp.endDate}
                </div>
                <div className="col-span-3">
                  <h3 className="text-xl font-black text-zinc-900 mb-1">{exp.role}</h3>
                  <p className="text-sm font-bold text-pink-500 mb-3">{exp.company}</p>
                  <ul className="text-sm font-medium text-zinc-600 space-y-2">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xs font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span key={i} className="px-4 py-2 border-2 border-zinc-900 rounded-full text-sm font-bold text-zinc-900">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export function PaletteTemplate({ data }: TemplateProps) {
  const colors = ['bg-rose-500', 'bg-blue-500', 'bg-emerald-500', 'bg-amber-500', 'bg-purple-500'];

  return (
    <div className="bg-slate-50 w-full h-full text-slate-800 font-sans p-8 flex flex-col gap-8">
      <header className="bg-white rounded-3xl p-10 shadow-sm border border-slate-100 flex justify-between items-center relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-full bg-yellow-400 skew-x-12 translate-x-10" />
        <div className="absolute right-20 top-0 w-16 h-full bg-rose-400 skew-x-12 translate-x-10" />
        
        <div className="relative z-10">
          <h1 className="text-5xl font-black tracking-tight text-slate-900 mb-2">{data.personalInfo.name}</h1>
          <p className="text-xl font-bold text-slate-500">{data.personalInfo.title}</p>
        </div>
        <div className="relative z-10 text-right text-sm font-medium text-slate-700 bg-white/80 backdrop-blur p-4 rounded-xl shadow-sm border border-slate-100">
          <p>{data.personalInfo.email}</p>
          <p>{data.personalInfo.phone}</p>
          <p>{data.personalInfo.location}</p>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-8 flex-1">
        <div className="col-span-2 space-y-8">
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 h-full">
            <h2 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500" />
              Experience
            </h2>
            <div className="space-y-8">
              {data.experience.map((exp, i) => (
                <div key={exp.id} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-black text-slate-800">{exp.role}</h3>
                    <span className={`text-xs font-bold text-white px-3 py-1 rounded-full ${colors[i % colors.length]}`}>
                      {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <p className="text-sm font-bold text-slate-500 mb-3">{exp.company}</p>
                  <ul className="text-sm text-slate-600 font-medium space-y-2 list-none">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-slate-300">✦</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-rose-500" />
              About
            </h2>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              {data.personalInfo.summary}
            </p>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500" />
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-500" />
              Education
            </h2>
            <div className="space-y-4">
              {data.education.map(edu => (
                <div key={edu.id} className="text-sm">
                  <p className="font-bold text-slate-900">{edu.degree}</p>
                  <p className="font-medium text-slate-500">{edu.institution}</p>
                  <p className="text-xs font-bold text-slate-400 mt-1">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export function MosaicTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-zinc-900 w-full h-full text-zinc-100 font-sans p-6 grid grid-cols-3 grid-rows-[auto_1fr_auto] gap-4">
      <div className="col-span-3 bg-zinc-800 rounded-2xl p-8 flex justify-between items-center border border-zinc-700">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-1">{data.personalInfo.name}</h1>
          <p className="text-lg font-medium text-indigo-400">{data.personalInfo.title}</p>
        </div>
        <div className="flex gap-6 text-sm font-medium text-zinc-400">
          <span className="bg-zinc-900 px-4 py-2 rounded-lg">{data.personalInfo.email}</span>
          <span className="bg-zinc-900 px-4 py-2 rounded-lg">{data.personalInfo.phone}</span>
          <span className="bg-zinc-900 px-4 py-2 rounded-lg">{data.personalInfo.location}</span>
        </div>
      </div>

      <div className="col-span-2 row-span-2 bg-zinc-800 rounded-2xl p-8 border border-zinc-700 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 blur-[100px] opacity-30" />
        <h2 className="text-2xl font-black text-white mb-6">Experience</h2>
        <div className="space-y-6 relative z-10">
          {data.experience.map(exp => (
            <div key={exp.id} className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-700/50 hover:border-indigo-500/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <span className="text-xs font-bold text-indigo-300 bg-indigo-900/30 px-3 py-1 rounded-full">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
              </div>
              <p className="text-sm font-medium text-zinc-400 mb-4">{exp.company}</p>
              <ul className="text-sm text-zinc-300 space-y-2 list-none">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-indigo-500">→</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-1 bg-indigo-600 rounded-2xl p-8 text-white">
        <h2 className="text-xl font-black mb-4">Profile</h2>
        <p className="text-sm font-medium text-indigo-100 leading-relaxed">
          {data.personalInfo.summary}
        </p>
      </div>

      <div className="col-span-1 bg-zinc-800 rounded-2xl p-8 border border-zinc-700">
        <h2 className="text-xl font-black text-white mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, i) => (
            <span key={i} className="bg-zinc-900 text-zinc-300 px-3 py-1.5 rounded-lg text-xs font-bold border border-zinc-700">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="col-span-3 bg-zinc-800 rounded-2xl p-8 border border-zinc-700 flex justify-between items-center">
        <h2 className="text-xl font-black text-white">Education</h2>
        <div className="flex gap-8">
          {data.education.map(edu => (
            <div key={edu.id} className="text-sm">
              <p className="font-bold text-white">{edu.degree}</p>
              <p className="text-zinc-400">{edu.institution}</p>
              <p className="text-xs font-bold text-indigo-400 mt-1">{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SparkTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-yellow-400 w-full h-full text-zinc-900 font-sans p-4">
      <div className="bg-white w-full h-full rounded-[2rem] p-10 shadow-2xl flex flex-col border-4 border-zinc-900">
        <header className="flex justify-between items-end border-b-4 border-zinc-900 pb-6 mb-8">
          <div>
            <h1 className="text-6xl font-black uppercase tracking-tighter mb-2">{data.personalInfo.name}</h1>
            <p className="text-2xl font-bold bg-zinc-900 text-white inline-block px-4 py-1 -skew-x-6">{data.personalInfo.title}</p>
          </div>
          <div className="text-right text-sm font-bold space-y-1">
            <p className="border-b-2 border-zinc-200 pb-1">{data.personalInfo.email}</p>
            <p className="border-b-2 border-zinc-200 pb-1">{data.personalInfo.phone}</p>
            <p>{data.personalInfo.location}</p>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-10 flex-1">
          <div className="col-span-8 space-y-8">
            <section>
              <h2 className="text-2xl font-black uppercase tracking-widest mb-6 inline-block border-b-4 border-yellow-400 pb-1">Experience</h2>
              <div className="space-y-8">
                {data.experience.map(exp => (
                  <div key={exp.id} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-xl font-black group-hover:text-yellow-500 transition-colors">{exp.role}</h3>
                      <span className="text-xs font-black bg-zinc-100 px-2 py-1 rounded">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                    </div>
                    <p className="text-md font-bold text-zinc-500 mb-3">{exp.company}</p>
                    <ul className="text-sm font-medium text-zinc-700 space-y-2">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-yellow-400 font-black">»</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="col-span-4 space-y-8">
            <section className="bg-zinc-50 p-6 rounded-2xl border-2 border-zinc-900">
              <h2 className="text-lg font-black uppercase tracking-widest mb-3">Profile</h2>
              <p className="text-sm font-medium leading-relaxed">
                {data.personalInfo.summary}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-black uppercase tracking-widest mb-4 inline-block border-b-4 border-yellow-400 pb-1">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-zinc-900 text-white text-xs font-black uppercase tracking-wider rounded-md -skew-x-6">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-black uppercase tracking-widest mb-4 inline-block border-b-4 border-yellow-400 pb-1">Education</h2>
              <div className="space-y-4">
                {data.education.map(edu => (
                  <div key={edu.id} className="text-sm">
                    <p className="font-black text-zinc-900">{edu.degree}</p>
                    <p className="font-bold text-zinc-500">{edu.institution}</p>
                    <p className="text-xs font-black text-yellow-500 mt-1">{edu.startDate} - {edu.endDate}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
