import { TemplateProps } from "./index";

export function PrestigeTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-white w-full h-full text-slate-800 font-serif border-[12px] border-slate-900 p-8">
      <div className="flex justify-between items-start border-b-2 border-amber-600 pb-6 mb-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{data.personalInfo.name}</h1>
          <p className="text-xl text-amber-700 italic">{data.personalInfo.title}</p>
        </div>
        <div className="text-right text-sm font-sans text-slate-600 space-y-1">
          <p>{data.personalInfo.email}</p>
          <p>{data.personalInfo.phone}</p>
          <p>{data.personalInfo.location}</p>
          <p>{data.personalInfo.website}</p>
        </div>
      </div>

      <div className="mb-8 font-sans text-sm leading-relaxed text-slate-700">
        <span className="font-bold text-amber-700 font-serif text-lg mr-2">Profile</span> 
        {data.personalInfo.summary}
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Professional Experience</h2>
            <div className="space-y-6">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-bold text-slate-800">{exp.role}</h3>
                    <span className="text-sm font-sans text-slate-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  <p className="text-md italic text-amber-700 mb-2">{exp.company}</p>
                  <ul className="list-disc list-inside font-sans text-sm text-slate-600 space-y-1">
                    {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8 border-l border-slate-200 pl-8">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Education</h2>
            <div className="space-y-4">
              {data.education.map(edu => (
                <div key={edu.id} className="text-sm">
                  <p className="font-bold text-slate-800">{edu.degree}</p>
                  <p className="text-amber-700 italic">{edu.institution}</p>
                  <p className="text-slate-500 font-sans mt-1">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Core Competencies</h2>
            <ul className="font-sans text-sm text-slate-600 space-y-2">
              {data.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-600 rounded-sm" />
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export function SummitTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-slate-50 w-full h-full text-slate-800 font-sans p-0 flex flex-col">
      <div className="bg-emerald-900 text-white p-10 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{data.personalInfo.name}</h1>
          <p className="text-emerald-300 text-lg font-medium mt-1">{data.personalInfo.title}</p>
        </div>
        <div className="text-right text-sm text-emerald-100/80 space-y-1">
          <p>{data.personalInfo.email}</p>
          <p>{data.personalInfo.phone}</p>
          <p>{data.personalInfo.location}</p>
        </div>
      </div>

      <div className="p-10 flex-1 grid grid-cols-12 gap-10">
        <div className="col-span-8 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
              Executive Summary
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed text-justify">
              {data.personalInfo.summary}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-emerald-600 inline-block" />
              Professional Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map((exp, i) => (
                <div key={exp.id} className="relative pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-emerald-600" />
                  {i !== data.experience.length - 1 && (
                    <div className="absolute left-[3px] top-4 bottom-[-16px] w-0.5 bg-emerald-100" />
                  )}
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-bold text-slate-800">{exp.role}</h3>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  <p className="text-sm font-bold text-emerald-700 mb-2">{exp.company}</p>
                  <ul className="text-sm text-slate-600 space-y-1 list-none">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-emerald-300">-</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="col-span-4 space-y-8 bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <section>
            <h2 className="text-md font-bold text-emerald-900 mb-4 uppercase tracking-wider">Education</h2>
            <div className="space-y-4">
              {data.education.map(edu => (
                <div key={edu.id} className="text-sm border-l-2 border-emerald-200 pl-3">
                  <p className="font-bold text-slate-800">{edu.degree}</p>
                  <p className="text-slate-600">{edu.field}</p>
                  <p className="text-emerald-700 mt-1">{edu.institution}</p>
                  <p className="text-xs text-slate-400 mt-1">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-md font-bold text-emerald-900 mb-4 uppercase tracking-wider">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-2 text-sm">
              {data.skills.map((skill, i) => (
                <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-md font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export function PremierTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-white w-full h-full text-slate-800 font-sans grid grid-cols-4">
      <div className="col-span-1 bg-slate-900 text-white p-8 flex flex-col gap-8">
        <div>
          <div className="w-16 h-16 bg-white text-slate-900 flex items-center justify-center text-3xl font-bold mb-6">
            {data.personalInfo.name.charAt(0)}
          </div>
          <h1 className="text-2xl font-bold mb-2 leading-tight">{data.personalInfo.name}</h1>
          <p className="text-sm text-slate-400 uppercase tracking-widest">{data.personalInfo.title}</p>
        </div>

        <div className="space-y-4 text-xs text-slate-300">
          <p>{data.personalInfo.email}</p>
          <p>{data.personalInfo.phone}</p>
          <p>{data.personalInfo.location}</p>
          {data.personalInfo.website && <p>{data.personalInfo.website}</p>}
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4 text-slate-500">Skills</h2>
          <div className="space-y-2 text-xs">
            {data.skills.map((skill, i) => (
              <div key={i} className="flex items-center justify-between">
                <span>{skill}</span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest mb-4 text-slate-500">Education</h2>
          <div className="space-y-4 text-xs">
            {data.education.map(edu => (
              <div key={edu.id}>
                <p className="font-bold text-white">{edu.degree}</p>
                <p className="text-slate-400">{edu.institution}</p>
                <p className="text-slate-500 mt-1">{edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="col-span-3 p-10 space-y-10 bg-slate-50">
        <section>
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest mb-4">Profile</h2>
          <p className="text-sm text-slate-600 leading-relaxed bg-white p-6 border-l-4 border-slate-900 shadow-sm">
            {data.personalInfo.summary}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 uppercase tracking-widest mb-6">Experience</h2>
          <div className="space-y-8">
            {data.experience.map(exp => (
              <div key={exp.id} className="bg-white p-6 shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{exp.role}</h3>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">{exp.company}</p>
                  </div>
                  <span className="text-xs font-bold text-white bg-slate-900 px-3 py-1">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <ul className="mt-4 text-sm text-slate-600 space-y-2 list-none">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-slate-300 mt-0.5">▶</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export function LegacyTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-[#fdfdfc] w-full h-full text-[#2c3e50] font-serif p-12 flex flex-col items-center">
      <div className="w-full max-w-3xl border-b-[3px] border-[#2c3e50] pb-8 mb-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-2 text-[#1a252f]">{data.personalInfo.name}</h1>
        <p className="text-xl italic text-[#7f8c8d] mb-4">{data.personalInfo.title}</p>
        <p className="text-sm font-sans tracking-widest uppercase text-[#95a5a6] flex justify-center gap-4">
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
        </p>
      </div>

      <div className="w-full max-w-3xl space-y-10 text-left">
        <p className="text-md leading-relaxed text-justify drop-cap">
          <span className="float-left text-5xl font-bold mr-2 mt-1 leading-none text-[#1a252f]">{data.personalInfo.summary.charAt(0)}</span>
          {data.personalInfo.summary.substring(1)}
        </p>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px bg-[#bdc3c7] flex-1" />
            <h2 className="text-lg font-bold uppercase tracking-widest text-[#1a252f]">Experience</h2>
            <div className="h-px bg-[#bdc3c7] flex-1" />
          </div>

          <div className="space-y-8">
            {data.experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between items-end mb-1">
                  <h3 className="text-xl font-bold text-[#1a252f]">{exp.role}</h3>
                  <span className="font-sans text-sm font-bold text-[#7f8c8d]">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <p className="text-lg italic text-[#34495e] mb-3">{exp.company}</p>
                <ul className="list-disc list-inside font-sans text-sm text-[#2c3e50] space-y-1 leading-relaxed">
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-bold uppercase tracking-widest text-[#1a252f]">Education</h2>
              <div className="h-px bg-[#bdc3c7] flex-1" />
            </div>
            <div className="space-y-4">
              {data.education.map(edu => (
                <div key={edu.id}>
                  <p className="font-bold text-[#1a252f]">{edu.degree}</p>
                  <p className="italic text-[#34495e]">{edu.institution}</p>
                  <p className="font-sans text-sm text-[#7f8c8d] mt-1">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-lg font-bold uppercase tracking-widest text-[#1a252f]">Skills</h2>
              <div className="h-px bg-[#bdc3c7] flex-1" />
            </div>
            <div className="font-sans text-sm text-[#2c3e50] leading-relaxed">
              {data.skills.map((skill, i) => (
                <span key={i} className="inline-block mr-2 mb-2 px-3 py-1 bg-[#ecf0f1] text-[#2c3e50] rounded-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PinnacleTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-zinc-50 w-full h-full text-zinc-800 font-sans flex flex-col">
      <div className="bg-zinc-900 text-white pt-16 pb-12 px-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold tracking-tight mb-3">{data.personalInfo.name}</h1>
          <p className="text-xl font-light text-zinc-300 tracking-widest uppercase">{data.personalInfo.title}</p>
        </div>
      </div>

      <div className="bg-zinc-800 text-zinc-300 py-4 px-12 flex justify-center gap-8 text-sm">
        <span className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full"/>{data.personalInfo.email}</span>
        <span className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full"/>{data.personalInfo.phone}</span>
        <span className="flex items-center gap-2"><div className="w-1 h-1 bg-zinc-500 rounded-full"/>{data.personalInfo.location}</span>
      </div>

      <div className="p-12 max-w-4xl mx-auto w-full space-y-12">
        <section className="text-center max-w-2xl mx-auto">
          <p className="text-md text-zinc-600 leading-relaxed font-medium">
            {data.personalInfo.summary}
          </p>
        </section>

        <div className="grid grid-cols-3 gap-12 border-t border-zinc-200 pt-12">
          <div className="col-span-2 space-y-10">
            <h2 className="text-2xl font-bold text-zinc-900 uppercase tracking-widest flex items-center gap-4">
              Experience
              <div className="h-px bg-zinc-200 flex-1" />
            </h2>
            <div className="space-y-8">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <h3 className="text-xl font-bold text-zinc-800">{exp.role}</h3>
                  <div className="flex justify-between items-center mb-3 mt-1">
                    <p className="text-md font-medium text-zinc-500 uppercase tracking-wider">{exp.company}</p>
                    <span className="text-xs font-bold text-zinc-400 bg-zinc-100 px-2 py-1">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  <ul className="text-sm text-zinc-600 space-y-2 list-none">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-zinc-900 font-bold">•</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-xl font-bold text-zinc-900 uppercase tracking-widest mb-6 border-b border-zinc-200 pb-2">Skills</h2>
              <div className="space-y-3">
                {data.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 border-2 border-zinc-800 rounded-full" />
                    <span className="text-sm font-medium text-zinc-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-900 uppercase tracking-widest mb-6 border-b border-zinc-200 pb-2">Education</h2>
              <div className="space-y-6">
                {data.education.map(edu => (
                  <div key={edu.id}>
                    <p className="font-bold text-zinc-800">{edu.degree}</p>
                    <p className="text-sm text-zinc-600 mt-1">{edu.field}</p>
                    <p className="text-sm text-zinc-500 uppercase tracking-wider mt-1">{edu.institution}</p>
                    <p className="text-xs font-bold text-zinc-400 mt-2">{edu.startDate} - {edu.endDate}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
