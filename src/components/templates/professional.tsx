import { TemplateProps } from "./index";

export function ExecutiveTemplate({ data }: TemplateProps) {
  const technicalSkills = data.skillCategories?.technical?.length ? data.skillCategories.technical : data.skills;
  const tools = data.skillCategories?.tools || [];
  const softSkills = data.skillCategories?.soft || [];

  return (
    <div className="bg-white w-full h-full text-slate-800 font-serif p-8">
      <div className="bg-slate-900 text-white p-6 -mx-8 -mt-8 mb-6">
        <h1 className="text-4xl font-bold uppercase tracking-widest">{data.personalInfo.name}</h1>
        <p className="text-xl mt-2 text-slate-300">{data.personalInfo.title}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-4 text-sm text-slate-400 font-sans">
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
          {data.personalInfo.linkedin && <span>{data.personalInfo.linkedin}</span>}
          {data.personalInfo.portfolio && <span>{data.personalInfo.portfolio}</span>}
        </div>
      </div>
      
      <div className="mb-4 font-sans text-sm leading-relaxed">
        {data.personalInfo.summary}
      </div>

      <div className="mb-4">
        <h2 className="text-2xl border-b-2 border-slate-900 pb-2 mb-3 font-bold uppercase">Experience</h2>
        <div className="flex flex-col gap-4">
          {data.experience.map(exp => (
            <div key={exp.id}>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-lg font-bold">{exp.role}</h3>
                <span className="text-sm font-sans font-medium text-slate-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
              </div>
              <p className="text-md italic text-slate-700 mb-2">{exp.company}</p>
              <ul className="list-disc list-inside font-sans text-sm flex flex-col gap-1 text-slate-600">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <section>
          <h2 className="text-2xl border-b-2 border-slate-900 pb-2 mb-3 font-bold uppercase">Projects</h2>
          <div className="space-y-3 text-sm font-sans text-slate-600">
            {data.projects.map((project) => (
              <div key={project.id} className="space-y-1">
                <div className="flex justify-between gap-3">
                  <h3 className="font-bold text-slate-800">{project.title}</h3>
                  {project.tools.length > 0 && <span className="text-xs text-slate-400 text-right">{project.tools.join(", ")}</span>}
                </div>
                <p>{project.description}</p>
                <p><span className="font-semibold text-slate-800">Impact:</span> {project.impact}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl border-b-2 border-slate-900 pb-2 mb-3 font-bold uppercase">Skills</h2>
          <div className="space-y-2 text-sm font-sans text-slate-600">
            <div>
              <p className="font-semibold text-slate-800 mb-1">Technical Skills</p>
              <p>{technicalSkills.join(", ")}</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800 mb-1">Tools</p>
              <p>{tools.join(", ")}</p>
            </div>
            {softSkills.length > 0 && (
              <div>
                <p className="font-semibold text-slate-800 mb-1">Soft Skills</p>
                <p>{softSkills.join(", ")}</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl border-b-2 border-slate-900 pb-2 mb-3 font-bold uppercase">Education</h2>
        <div className="flex flex-col gap-3">
          {data.education.map(edu => (
            <div key={edu.id} className="flex justify-between items-baseline">
              <div>
                <h3 className="font-bold">{edu.degree} in {edu.field}</h3>
                <p className="italic text-slate-700">{edu.institution}</p>
              </div>
              <span className="text-sm font-sans text-slate-500">{edu.startDate} - {edu.endDate}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CorporateTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-white w-full h-full text-slate-800 font-sans flex flex-row">
      <div className="w-1/3 bg-blue-50 p-6 border-r border-blue-100">
        <h1 className="text-3xl font-bold text-blue-900">{data.personalInfo.name}</h1>
        <p className="text-blue-700 font-medium mt-1 mb-6">{data.personalInfo.title}</p>
        
        <div className="text-sm flex flex-col gap-3 text-slate-600 mb-8">
          <div>
            <p className="font-bold text-slate-800">Email</p>
            <p>{data.personalInfo.email}</p>
          </div>
          <div>
            <p className="font-bold text-slate-800">Phone</p>
            <p>{data.personalInfo.phone}</p>
          </div>
          <div>
            <p className="font-bold text-slate-800">Location</p>
            <p>{data.personalInfo.location}</p>
          </div>
          {data.personalInfo.website && (
            <div>
              <p className="font-bold text-slate-800">Website</p>
              <p>{data.personalInfo.website}</p>
            </div>
          )}
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold text-blue-900 uppercase tracking-wide mb-3">Skills</h2>
          <div className="flex flex-col gap-2 text-sm text-slate-700">
            {data.skills.map((skill, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {skill}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-lg font-bold text-blue-900 uppercase tracking-wide mb-3">Education</h2>
          <div className="flex flex-col gap-4 text-sm">
            {data.education.map(edu => (
              <div key={edu.id}>
                <p className="font-bold text-slate-800">{edu.degree}</p>
                <p className="text-slate-600">{edu.field}</p>
                <p className="text-slate-500 italic mt-1">{edu.institution}</p>
                <p className="text-slate-400 text-xs mt-1">{edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-2/3 p-8">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-blue-900 border-b border-blue-200 pb-2 mb-4">Summary</h2>
          <p className="text-sm leading-relaxed text-slate-700">{data.personalInfo.summary}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-blue-900 border-b border-blue-200 pb-2 mb-4">Experience</h2>
          <div className="flex flex-col gap-6">
            {data.experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">{exp.role}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <ul className="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1">
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ClassicTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-white w-full h-full text-black font-serif p-10 max-w-4xl mx-auto border shadow-sm">
      <div className="text-center border-b-2 border-black pb-6 mb-6">
        <h1 className="text-4xl font-bold mb-2">{data.personalInfo.name}</h1>
        <p className="text-xl italic mb-3">{data.personalInfo.title}</p>
        <p className="text-sm font-sans flex justify-center gap-4">
          <span>{data.personalInfo.email}</span> | 
          <span>{data.personalInfo.phone}</span> | 
          <span>{data.personalInfo.location}</span>
        </p>
      </div>

      <div className="mb-6 text-sm leading-relaxed font-sans">
        {data.personalInfo.summary}
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold uppercase tracking-wider border-b border-black mb-4">Professional Experience</h2>
        <div className="space-y-6">
          {data.experience.map(exp => (
            <div key={exp.id}>
              <div className="flex justify-between font-bold text-lg">
                <h3>{exp.role}</h3>
                <span className="font-sans text-sm">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
              </div>
              <div className="italic mb-2">{exp.company}</div>
              <ul className="list-disc list-inside font-sans text-sm space-y-1">
                {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold uppercase tracking-wider border-b border-black mb-4">Education</h2>
        <div className="space-y-4">
          {data.education.map(edu => (
            <div key={edu.id} className="flex justify-between">
              <div>
                <div className="font-bold">{edu.institution}</div>
                <div className="italic">{edu.degree}, {edu.field}</div>
              </div>
              <div className="font-sans text-sm">{edu.startDate} – {edu.endDate}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold uppercase tracking-wider border-b border-black mb-4">Skills</h2>
        <p className="font-sans text-sm leading-relaxed">
          {data.skills.join(" • ")}
        </p>
      </div>
    </div>
  );
}

export function BoardroomTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-slate-100 w-full h-full text-slate-900 font-sans p-10 flex flex-col gap-6">
      <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
        <h1 className="text-3xl font-black text-slate-800 uppercase tracking-tight">{data.personalInfo.name}</h1>
        <p className="text-lg font-bold text-slate-500 uppercase tracking-widest mt-1 mb-4">{data.personalInfo.title}</p>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600 font-medium">
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 flex-1">
        <div className="col-span-2 bg-white p-8 rounded-lg shadow-sm border border-slate-200 space-y-8">
          <section>
            <h2 className="text-xl font-black uppercase text-slate-800 mb-4 tracking-wide border-b-4 border-slate-900 pb-1 w-max">Experience</h2>
            <div className="space-y-6">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-end mb-1">
                    <h3 className="text-lg font-bold text-slate-800">{exp.company}</h3>
                    <span className="text-sm font-bold text-slate-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  <p className="text-md font-medium text-slate-700 mb-2">{exp.role}</p>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="bg-slate-900 text-slate-300 p-8 rounded-lg shadow-sm space-y-8">
          <section>
            <h2 className="text-lg font-black uppercase text-white mb-4 tracking-wide border-b-2 border-slate-600 pb-1">Profile</h2>
            <p className="text-sm leading-relaxed">{data.personalInfo.summary}</p>
          </section>
          
          <section>
            <h2 className="text-lg font-black uppercase text-white mb-4 tracking-wide border-b-2 border-slate-600 pb-1">Expertise</h2>
            <ul className="space-y-2 text-sm font-medium">
              {data.skills.map((skill, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-sm" />
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-black uppercase text-white mb-4 tracking-wide border-b-2 border-slate-600 pb-1">Education</h2>
            <div className="space-y-4">
              {data.education.map(edu => (
                <div key={edu.id} className="text-sm">
                  <p className="font-bold text-white">{edu.degree}</p>
                  <p className="text-slate-400">{edu.field}</p>
                  <p className="italic">{edu.institution}</p>
                  <p className="text-xs text-slate-500 mt-1">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export function ManhattanTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-white w-full h-full text-zinc-900 font-sans p-10 flex flex-col gap-8">
      <div className="border-t border-b border-zinc-200 py-6 text-center">
        <h1 className="text-3xl tracking-widest uppercase font-light">{data.personalInfo.name}</h1>
        <p className="text-sm tracking-[0.2em] uppercase text-zinc-500 mt-2">{data.personalInfo.title}</p>
        <div className="flex justify-center gap-6 text-xs text-zinc-400 mt-4 tracking-wider">
          <span>{data.personalInfo.email}</span>
          <span>{data.personalInfo.phone}</span>
          <span>{data.personalInfo.location}</span>
        </div>
      </div>

      <div className="text-sm text-zinc-600 leading-relaxed text-justify px-8">
        {data.personalInfo.summary}
      </div>

      <div className="grid grid-cols-12 gap-8 mt-4">
        <div className="col-span-3 text-right space-y-8">
          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 mb-4">Skills</h2>
            <div className="flex flex-col gap-2 text-sm text-zinc-800 font-medium">
              {data.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 mb-4">Education</h2>
            <div className="space-y-4">
              {data.education.map(edu => (
                <div key={edu.id} className="text-sm text-zinc-800">
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-zinc-500 text-xs mb-1">{edu.field}</p>
                  <p className="text-zinc-600">{edu.institution}</p>
                  <p className="text-zinc-400 text-xs mt-1">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        <div className="col-span-1 border-l border-zinc-200 h-full" />
        
        <div className="col-span-8 space-y-8">
          <section>
            <h2 className="text-xs uppercase tracking-widest text-zinc-400 mb-6">Experience</h2>
            <div className="space-y-8">
              {data.experience.map(exp => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-semibold text-zinc-900">{exp.role}</h3>
                    <span className="text-xs text-zinc-400 tracking-wider">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  <p className="text-sm font-medium text-zinc-500 mb-3">{exp.company}</p>
                  <ul className="text-sm text-zinc-600 space-y-2 list-none">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="pl-3 border-l border-zinc-200">{b}</li>
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
