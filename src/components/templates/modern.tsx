import { TemplateProps } from "./index";

function SectionHeading({ color, children }: { color: string; children: string }) {
  return (
    <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
      <span className={`w-8 h-1 rounded-full ${color}`} />
      {children}
    </h3>
  );
}

function SkillsBlock({ title, items, badgeClassName }: { title: string; items: string[]; badgeClassName: string }) {
  if (items.length === 0) return null;

  return (
    <section>
      <SectionHeading color="bg-slate-300">{title}</SectionHeading>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span key={index} className={badgeClassName}>{item}</span>
        ))}
      </div>
    </section>
  );
}

function ProjectList({ projects }: { projects: TemplateProps["data"]["projects"] }) {
  if (projects.length === 0) return null;

  return (
    <section>
      <SectionHeading color="bg-indigo-500">Projects</SectionHeading>
      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-3 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between gap-3 mb-1">
              <h4 className="font-bold text-slate-900">{project.title}</h4>
              <span className="text-xs text-slate-400 text-right">{project.tools.join(", ")}</span>
            </div>
            <p className="text-xs text-slate-600 mb-2 leading-relaxed">{project.description}</p>
            <p className="text-xs text-slate-600"><span className="font-bold text-slate-900">Impact:</span> {project.impact}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CompactList({ title, items, renderItem }: { title: string; items: Array<{ id: string }>; renderItem: (item: any) => React.ReactNode }) {
  if (items.length === 0) return null;

  return (
    <section>
      <SectionHeading color="bg-pink-500">{title}</SectionHeading>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="bg-white p-3 rounded-xl shadow-sm border border-slate-200">
            {renderItem(item)}
          </div>
        ))}
      </div>
    </section>
  );
}

export function NovaTemplate({ data }: TemplateProps) {
  const technicalSkills = data.skillCategories?.technical?.length ? data.skillCategories.technical : data.skills;
  const tools = data.skillCategories?.tools || [];
  const softSkills = data.skillCategories?.soft || [];

  return (
    <div className="bg-slate-50 w-full h-full text-slate-800 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      <div className="relative pt-12 px-8 pb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
            {data.personalInfo.name}
          </h1>
          <h2 className="text-xl font-medium text-slate-500 mb-4">{data.personalInfo.title}</h2>
          <div className="flex gap-4 text-sm text-slate-600 font-medium">
            <span>{data.personalInfo.email}</span>
            <span>{data.personalInfo.phone}</span>
            <span>{data.personalInfo.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <section>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-8 h-1 bg-indigo-500 rounded-full"></span>
                Experience
              </h3>
              <div className="space-y-4">
                {data.experience.map(exp => (
                  <div key={exp.id} className="relative pl-6 border-l-2 border-indigo-100">
                    <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[7px] top-1.5 ring-4 ring-white"></div>
                    <h4 className="text-lg font-bold text-slate-800">{exp.role}</h4>
                    <p className="text-indigo-600 font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-slate-500 mb-3">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
                    <ul className="text-sm text-slate-600 space-y-1 list-disc list-outside ml-4">
                      {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <ProjectList projects={data.projects} />

          </div>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-2xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                About
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {data.personalInfo.summary}
              </p>
            </section>

            <section>
              <SectionHeading color="bg-pink-500">Skills</SectionHeading>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {tools.length > 0 && (
              <section>
                <SectionHeading color="bg-indigo-500">Tools</SectionHeading>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold rounded-lg">
                      {tool}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {softSkills.length > 0 && (
              <section>
                <SectionHeading color="bg-emerald-500">Soft Skills</SectionHeading>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((softSkill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold rounded-lg">
                      {softSkill}
                    </span>
                  ))}
                </div>
              </section>
            )}

            <section>
              <SectionHeading color="bg-indigo-500">Education</SectionHeading>
              <div className="space-y-4">
                {data.education.map(edu => (
                  <div key={edu.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm">{edu.degree}</h4>
                    <p className="text-slate-600 text-sm mb-1">{edu.field}</p>
                    <p className="text-xs text-indigo-500 font-medium">{edu.institution}</p>
                    <p className="text-xs text-slate-400 mt-1">{edu.startDate} - {edu.endDate}</p>
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

export function PulseTemplate({ data }: TemplateProps) {
  const technicalSkills = data.skillCategories?.technical?.length ? data.skillCategories.technical : data.skills;
  const tools = data.skillCategories?.tools || [];
  const softSkills = data.skillCategories?.soft || [];

  return (
    <div className="bg-white w-full h-full text-slate-800 font-sans flex border-l-8 border-teal-500">
      <div className="w-1/3 bg-slate-50 p-7 flex flex-col gap-6 border-r border-slate-100">
        <div>
          <h1 className="text-3xl font-black text-slate-900 leading-tight mb-2">{data.personalInfo.name}</h1>
          <p className="text-md font-bold text-teal-600 uppercase tracking-widest">{data.personalInfo.title}</p>
        </div>

        <div className="space-y-3 text-sm font-medium text-slate-600">
          <p className="flex items-center gap-2"><span className="text-teal-500">@</span> {data.personalInfo.email}</p>
          <p className="flex items-center gap-2"><span className="text-teal-500">#</span> {data.personalInfo.phone}</p>
          <p className="flex items-center gap-2"><span className="text-teal-500">&</span> {data.personalInfo.location}</p>
        </div>

        <section>
          <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Skills</h2>
          <div className="flex flex-col gap-3">
            {data.skills.map((skill, i) => (
              <div key={i} className="bg-white px-3 py-2 rounded shadow-sm text-sm font-bold text-slate-700 border border-slate-100">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Education</h2>
          <div className="space-y-4">
            {data.education.map(edu => (
              <div key={edu.id} className="bg-white p-3 rounded shadow-sm border border-slate-100 text-sm">
                <p className="font-bold text-slate-900">{edu.degree}</p>
                <p className="text-teal-600 font-medium">{edu.institution}</p>
                <p className="text-xs text-slate-400 font-bold mt-2">{edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Projects</h2>
          <div className="space-y-3">
            {data.projects.map((project) => (
              <div key={project.id} className="bg-white p-3 rounded shadow-sm border border-slate-100 text-sm">
                <p className="font-bold text-slate-900">{project.title}</p>
                <p className="text-slate-600 text-xs mt-1 leading-relaxed">{project.description}</p>
                <p className="text-xs text-slate-500 mt-2">Tools: {project.tools.join(", ")}</p>
                <p className="text-xs text-slate-500 mt-1"><span className="font-semibold text-slate-700">Impact:</span> {project.impact}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="w-2/3 p-8 space-y-8">
        <section>
          <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-3">
            <div className="w-3 h-3 bg-teal-500 rounded-sm" />
            Profile
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-medium">
            {data.personalInfo.summary}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-3">
            <div className="w-3 h-3 bg-teal-500 rounded-sm" />
            Experience
          </h2>
          <div className="space-y-6">
            {data.experience.map(exp => (
              <div key={exp.id} className="relative">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-lg font-black text-slate-800">{exp.role}</h3>
                  <span className="text-xs font-bold bg-teal-50 text-teal-700 px-2 py-1 rounded uppercase tracking-wider">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <p className="text-md font-bold text-slate-500 mb-3">{exp.company}</p>
                <ul className="text-sm text-slate-600 space-y-2 list-none">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-teal-500 font-bold">→</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-3">
            <div className="w-3 h-3 bg-teal-500 rounded-sm" />
            Skills
          </h2>
          <div className="space-y-3 text-sm font-medium text-slate-600">
            <p><span className="font-bold text-slate-800">Technical:</span> {technicalSkills.join(", ")}</p>
            <p><span className="font-bold text-slate-800">Tools:</span> {tools.join(", ")}</p>
            {softSkills.length > 0 && <p><span className="font-bold text-slate-800">Soft:</span> {softSkills.join(", ")}</p>}
          </div>
        </section>
      </div>
    </div>
  );
}

export function ApexTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-white w-full h-full text-slate-800 font-sans p-8">
      <div className="bg-indigo-900 text-white rounded-2xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 border-[30px] border-indigo-800 rounded-full opacity-50" />
        <div className="absolute right-20 -bottom-20 w-40 h-40 bg-indigo-500 rounded-full opacity-50" />
        
        <div className="relative z-10 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black mb-2">{data.personalInfo.name}</h1>
            <p className="text-indigo-300 font-bold text-xl">{data.personalInfo.title}</p>
          </div>
          <div className="text-right text-sm font-medium text-indigo-100 space-y-1">
            <p>{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
            <p>{data.personalInfo.location}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8 px-4">
        <div className="col-span-2 space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900">Experience</h2>
              <div className="h-0.5 bg-indigo-100 flex-1" />
            </div>
            <div className="space-y-6">
              {data.experience.map(exp => (
                <div key={exp.id} className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-indigo-200 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-indigo-900">{exp.role}</h3>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  <p className="text-sm font-bold text-slate-500 mb-3">{exp.company}</p>
                  <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                    {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900">About</h2>
              <div className="h-0.5 bg-indigo-100 flex-1" />
            </div>
            <p className="text-sm text-slate-600 font-medium leading-relaxed bg-slate-50 p-5 rounded-xl border border-slate-100">
              {data.personalInfo.summary}
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900">Skills</h2>
              <div className="h-0.5 bg-indigo-100 flex-1" />
            </div>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span key={i} className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1 rounded-full text-sm font-bold">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900">Education</h2>
              <div className="h-0.5 bg-indigo-100 flex-1" />
            </div>
            <div className="space-y-4">
              {data.education.map(edu => (
                <div key={edu.id} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                  <p className="font-bold text-indigo-900">{edu.degree}</p>
                  <p className="text-sm font-bold text-slate-500">{edu.institution}</p>
                  <p className="text-xs font-bold text-indigo-400 mt-2">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export function StellarTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-white w-full h-full text-slate-800 font-sans flex">
      <div className="w-1/3 bg-slate-900 text-slate-300 p-8 flex flex-col gap-10">
        <div>
          <h1 className="text-4xl font-black text-white mb-2">{data.personalInfo.name}</h1>
          <p className="text-lg font-bold text-blue-400">{data.personalInfo.title}</p>
        </div>

        <div className="space-y-4 text-sm font-medium">
          <p>{data.personalInfo.email}</p>
          <p>{data.personalInfo.phone}</p>
          <p>{data.personalInfo.location}</p>
        </div>

        <section>
          <h2 className="text-sm font-black text-white uppercase tracking-widest mb-4 pb-2 border-b border-slate-700">Expertise</h2>
          <ul className="space-y-2 text-sm font-medium">
            {data.skills.map((skill, i) => (
              <li key={i} className="flex items-center justify-between">
                {skill}
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-black text-white uppercase tracking-widest mb-4 pb-2 border-b border-slate-700">Education</h2>
          <div className="space-y-4">
            {data.education.map(edu => (
              <div key={edu.id} className="text-sm">
                <p className="font-bold text-white">{edu.degree}</p>
                <p className="text-blue-400">{edu.field}</p>
                <p className="mt-1">{edu.institution}</p>
                <p className="text-xs font-bold text-slate-500 mt-2">{edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="w-2/3 p-10 space-y-10 bg-slate-50">
        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-4">Profile</h2>
          <p className="text-sm text-slate-600 font-medium leading-relaxed">
            {data.personalInfo.summary}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-slate-900 mb-6">Experience</h2>
          <div className="space-y-8">
            {data.experience.map(exp => (
              <div key={exp.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <p className="text-md font-bold text-slate-500 mb-4">{exp.company}</p>
                <ul className="text-sm text-slate-600 space-y-2 list-none">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-500 font-bold">•</span> {b}
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

export function FusionTemplate({ data }: TemplateProps) {
  return (
    <div className="bg-orange-50/30 w-full h-full text-slate-800 font-sans p-10">
      <header className="flex justify-between items-center border-b-2 border-orange-200 pb-8 mb-8">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900">{data.personalInfo.name}</h1>
          <p className="text-xl font-bold text-orange-500 mt-1">{data.personalInfo.title}</p>
        </div>
        <div className="text-right text-sm font-medium text-slate-500 space-y-1">
          <p>{data.personalInfo.email}</p>
          <p>{data.personalInfo.phone}</p>
          <p>{data.personalInfo.location}</p>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8 space-y-8">
          <section>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-orange-400 rounded-sm" />
              Summary
            </h2>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">
              {data.personalInfo.summary}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-orange-400 rounded-sm" />
              Experience
            </h2>
            <div className="space-y-6">
              {data.experience.map(exp => (
                <div key={exp.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 border-l-4 border-l-orange-400">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                    <span className="text-xs font-bold text-slate-400">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                  </div>
                  <p className="text-md font-bold text-slate-500 mb-3">{exp.company}</p>
                  <ul className="text-sm text-slate-600 space-y-2 list-none">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-orange-400">❖</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="col-span-4 space-y-8">
          <section>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-orange-400 rounded-sm" />
              Skills
            </h2>
            <div className="flex flex-col gap-2">
              {data.skills.map((skill, i) => (
                <div key={i} className="bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-100 text-sm font-bold text-slate-700 flex justify-between items-center">
                  {skill}
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <div className="w-2 h-6 bg-orange-400 rounded-sm" />
              Education
            </h2>
            <div className="space-y-4">
              {data.education.map(edu => (
                <div key={edu.id} className="bg-white p-5 rounded-lg shadow-sm border border-slate-100 text-sm">
                  <p className="font-bold text-slate-900">{edu.degree}</p>
                  <p className="text-slate-600 font-medium">{edu.field}</p>
                  <p className="text-slate-500 mt-2">{edu.institution}</p>
                  <p className="text-xs font-bold text-orange-400 mt-2">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
