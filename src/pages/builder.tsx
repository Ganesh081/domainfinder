import { useParams, Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { Download, Layout, ChevronLeft, UserCircle, X } from "lucide-react";
import { getTemplateComponent } from "@/components/templates";
import { useResume } from "@/hooks/use-resume";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Builder() {
  const { templateId } = useParams();
  const activeTemplateId = templateId || "executive";
  const { 
    data, 
    updatePersonalInfo, 
    updateExperience, 
    addExperience, 
    removeExperience,
    updateEducation,
    addEducation,
    removeEducation,
    setSkills,
    setToolSkills,
    setSoftSkills,
    addProject,
    updateProject,
    removeProject,
  } = useResume(activeTemplateId);

  const Template = getTemplateComponent(activeTemplateId);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [fitScale, setFitScale] = useState(1);

  useEffect(() => {
    const PAGE_HEIGHT_PX = 11 * 96;
    const MIN_SCALE = 0.72;

    const measure = () => {
      if (!contentRef.current) return;

      const contentHeight = contentRef.current.scrollHeight;
      if (contentHeight <= 0) return;

      const nextScale = Math.max(MIN_SCALE, Math.min(1, PAGE_HEIGHT_PX / contentHeight));
      setFitScale(nextScale);
    };

    const frame = window.requestAnimationFrame(measure);
    window.addEventListener("resize", measure);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", measure);
    };
  }, [data, activeTemplateId]);

  const parseList = (value: string) =>
    value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

  const isBlank = (value: string) => value.trim().length === 0;
  const missingRequired: string[] = [];

  if (isBlank(data.personalInfo.name)) missingRequired.push("Full Name");
  if (isBlank(data.personalInfo.title)) missingRequired.push("Job Title");
  if (isBlank(data.personalInfo.email)) missingRequired.push("Email");
  if (isBlank(data.personalInfo.phone)) missingRequired.push("Phone");
  if (isBlank(data.personalInfo.location)) missingRequired.push("Location");
  if (isBlank(data.personalInfo.linkedin)) missingRequired.push("LinkedIn");
  if (isBlank(data.personalInfo.portfolio)) missingRequired.push("Portfolio");
  if (isBlank(data.personalInfo.summary)) missingRequired.push("Professional Summary");
  if (data.skillCategories.technical.length === 0) missingRequired.push("Technical Skills");
  if (data.skillCategories.tools.length === 0) missingRequired.push("Tools");
  if (data.projects.length === 0) missingRequired.push("Projects");

  data.experience.forEach((exp, index) => {
    const rowLabel = `Experience ${index + 1}`;
    if (isBlank(exp.role)) missingRequired.push(`${rowLabel}: Job Title`);
    if (isBlank(exp.company)) missingRequired.push(`${rowLabel}: Company`);
    if (isBlank(exp.startDate)) missingRequired.push(`${rowLabel}: Start Date`);
    if (!exp.current && isBlank(exp.endDate)) missingRequired.push(`${rowLabel}: End Date`);
    if (exp.bullets.filter((b) => b.trim().length > 0).length === 0) {
      missingRequired.push(`${rowLabel}: Description`);
    }
  });

  data.education.forEach((edu, index) => {
    const rowLabel = `Education ${index + 1}`;
    if (isBlank(edu.institution)) missingRequired.push(`${rowLabel}: Institution`);
    if (isBlank(edu.degree)) missingRequired.push(`${rowLabel}: Degree`);
    if (isBlank(edu.field)) missingRequired.push(`${rowLabel}: Field of Study`);
    if (isBlank(edu.startDate)) missingRequired.push(`${rowLabel}: Start Date`);
    if (isBlank(edu.endDate)) missingRequired.push(`${rowLabel}: End Date`);
  });

  if (data.skills.length === 0) {
    missingRequired.push("Skills");
  }

  const handlePrint = () => {
    if (missingRequired.length > 0) {
      const preview = missingRequired.slice(0, 10);
      const overflow = missingRequired.length > 10 ? "\n- ..." : "";
      window.alert(
        `Please fill all required fields before downloading PDF:\n- ${preview.join("\n- ")}${overflow}`,
      );
      return;
    }

    window.print();
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      updatePersonalInfo({ photo: ev.target?.result as string });
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    updatePersonalInfo({ photo: "" });
    if (photoInputRef.current) photoInputRef.current.value = "";
  };

  const technicalSkillsValue = data.skillCategories.technical.join(", ");
  const toolsValue = data.skillCategories.tools.join(", ");
  const softSkillsValue = data.skillCategories.soft.join(", ");

  return (
    <div className="flex h-[100dvh] w-full bg-slate-100 overflow-hidden font-sans">
      
      {/* Left Sidebar - Editor Form */}
      <div className="w-1/2 flex flex-col bg-white border-r shadow-xl z-10 h-full print:hidden">
        <div className="h-16 border-b flex items-center justify-between px-6 bg-white sticky top-0 shrink-0">
          <Link href="/templates" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900" data-testid="link-back-templates">
            <ChevronLeft className="w-4 h-4" />
            Back
          </Link>
          {missingRequired.length > 0 && (
            <p className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-md">
              {missingRequired.length} required fields missing
            </p>
          )}
          <div className="flex gap-2">
            <Link href="/templates" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2" data-testid="link-change-template">
              <Layout className="w-4 h-4" />
              Change Template
            </Link>
            <Button
              onClick={handlePrint}
              className="gap-2"
              data-testid="button-download-pdf"
              disabled={missingRequired.length > 0}
              title={missingRequired.length > 0 ? "Fill required fields to enable PDF download" : "Download PDF"}
            >
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-2xl mx-auto space-y-8">
            
            {/* Personal Info */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">Personal Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required data-testid="input-name" value={data.personalInfo.name} onChange={e => updatePersonalInfo({ name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input id="title" required data-testid="input-title" value={data.personalInfo.title} onChange={e => updatePersonalInfo({ title: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" required type="email" data-testid="input-email" value={data.personalInfo.email} onChange={e => updatePersonalInfo({ email: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" required data-testid="input-phone" value={data.personalInfo.phone} onChange={e => updatePersonalInfo({ phone: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" required data-testid="input-location" value={data.personalInfo.location} onChange={e => updatePersonalInfo({ location: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website / LinkedIn</Label>
                  <Input id="website" data-testid="input-website" value={data.personalInfo.website} onChange={e => updatePersonalInfo({ website: e.target.value })} />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea id="summary" required data-testid="input-summary" rows={4} value={data.personalInfo.summary} onChange={e => updatePersonalInfo({ summary: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn</Label>
                  <Input id="linkedin" required data-testid="input-linkedin" value={data.personalInfo.linkedin} onChange={e => updatePersonalInfo({ linkedin: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio</Label>
                  <Input id="portfolio" required data-testid="input-portfolio" value={data.personalInfo.portfolio} onChange={e => updatePersonalInfo({ portfolio: e.target.value })} />
                </div>
                <div className="col-span-2 space-y-2">
                  <Label>Profile Photo <span className="text-xs font-normal text-slate-400">(used in photo templates)</span></Label>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                      {data.personalInfo.photo ? (
                        <img src={data.personalInfo.photo} alt="Profile" className="w-full h-full object-cover" />
                      ) : (
                        <UserCircle className="w-8 h-8 text-slate-300" />
                      )}
                    </div>
                    <div className="flex gap-2">
                      <input
                        ref={photoInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        data-testid="input-photo-file"
                        onChange={handlePhotoUpload}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        data-testid="button-upload-photo"
                        onClick={() => photoInputRef.current?.click()}
                      >
                        {data.personalInfo.photo ? "Change Photo" : "Upload Photo"}
                      </Button>
                      {data.personalInfo.photo && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          data-testid="button-remove-photo"
                          onClick={handleRemovePhoto}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 gap-1"
                        >
                          <X className="w-3 h-3" />
                          Remove
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section className="space-y-5">
              <div className="flex items-center justify-between border-b pb-2">
                <h2 className="text-2xl font-bold text-slate-900">Experience</h2>
                <Button variant="outline" size="sm" onClick={addExperience} data-testid="button-add-experience">+ Add Job</Button>
              </div>
              
              {data.experience.map((exp, index) => (
                <div key={exp.id} className="p-4 bg-slate-50 border rounded-lg space-y-4 relative">
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => removeExperience(exp.id)} data-testid={`button-remove-experience-${exp.id}`}>
                    &times;
                  </Button>
                  <div className="grid grid-cols-2 gap-4 mr-8">
                    <div className="space-y-2">
                      <Label>Job Title</Label>
                      <Input value={exp.role} onChange={e => updateExperience(exp.id, { role: e.target.value })} data-testid={`input-exp-role-${exp.id}`} />
                    </div>
                    <div className="space-y-2">
                      <Label>Company</Label>
                      <Input value={exp.company} onChange={e => updateExperience(exp.id, { company: e.target.value })} data-testid={`input-exp-company-${exp.id}`} />
                    </div>
                    <div className="space-y-2">
                      <Label>Start Date</Label>
                      <Input value={exp.startDate} onChange={e => updateExperience(exp.id, { startDate: e.target.value })} placeholder="e.g. Jan 2020" data-testid={`input-exp-start-${exp.id}`} />
                    </div>
                    <div className="space-y-2 flex flex-col justify-end">
                      {exp.current ? (
                         <div className="h-10 flex items-center text-sm font-medium text-slate-500">Present</div>
                      ) : (
                        <>
                          <Label>End Date</Label>
                          <Input value={exp.endDate} onChange={e => updateExperience(exp.id, { endDate: e.target.value })} placeholder="e.g. Dec 2022" data-testid={`input-exp-end-${exp.id}`} />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id={`current-${exp.id}`} checked={exp.current} onChange={e => updateExperience(exp.id, { current: e.target.checked })} data-testid={`checkbox-exp-current-${exp.id}`} />
                    <Label htmlFor={`current-${exp.id}`} className="font-normal">I currently work here</Label>
                  </div>
                  <div className="space-y-2">
                    <Label>Description (one bullet per line)</Label>
                    <Textarea 
                      rows={4} 
                      value={exp.bullets.join('\n')} 
                      onChange={e => updateExperience(exp.id, { bullets: e.target.value.split('\n') })} 
                      data-testid={`textarea-exp-bullets-${exp.id}`}
                    />
                  </div>
                </div>
              ))}
            </section>

            {/* Education */}
            <section className="space-y-5">
              <div className="flex items-center justify-between border-b pb-2">
                <h2 className="text-2xl font-bold text-slate-900">Education</h2>
                <Button variant="outline" size="sm" onClick={addEducation} data-testid="button-add-education">+ Add Education</Button>
              </div>
              
              {data.education.map((edu) => (
                <div key={edu.id} className="p-4 bg-slate-50 border rounded-lg space-y-4 relative">
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => removeEducation(edu.id)} data-testid={`button-remove-education-${edu.id}`}>
                    &times;
                  </Button>
                  <div className="grid grid-cols-2 gap-4 mr-8">
                    <div className="space-y-2">
                      <Label>Institution</Label>
                      <Input value={edu.institution} onChange={e => updateEducation(edu.id, { institution: e.target.value })} data-testid={`input-edu-institution-${edu.id}`} />
                    </div>
                    <div className="space-y-2">
                      <Label>Degree</Label>
                      <Input value={edu.degree} onChange={e => updateEducation(edu.id, { degree: e.target.value })} placeholder="e.g. B.S." data-testid={`input-edu-degree-${edu.id}`} />
                    </div>
                    <div className="space-y-2">
                      <Label>Field of Study</Label>
                      <Input value={edu.field} onChange={e => updateEducation(edu.id, { field: e.target.value })} data-testid={`input-edu-field-${edu.id}`} />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-2">
                        <Label>Start</Label>
                        <Input value={edu.startDate} onChange={e => updateEducation(edu.id, { startDate: e.target.value })} data-testid={`input-edu-start-${edu.id}`} />
                      </div>
                      <div className="space-y-2">
                        <Label>End</Label>
                        <Input value={edu.endDate} onChange={e => updateEducation(edu.id, { endDate: e.target.value })} data-testid={`input-edu-end-${edu.id}`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">Skills</h2>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label>Technical Skills</Label>
                  <Textarea
                    value={technicalSkillsValue}
                    onChange={(e) => setSkills(parseList(e.target.value))}
                    placeholder="UX Research, Interaction Design, Accessibility"
                    data-testid="input-skills-technical"
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Tools</Label>
                  <Textarea
                    value={toolsValue}
                    onChange={(e) => setToolSkills(parseList(e.target.value))}
                    placeholder="Figma, Jira, Notion, Hotjar"
                    data-testid="input-skills-tools"
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Soft Skills</Label>
                  <Textarea
                    value={softSkillsValue}
                    onChange={(e) => setSoftSkills(parseList(e.target.value))}
                    placeholder="Stakeholder Management, Mentoring"
                    data-testid="input-skills-soft"
                    rows={4}
                  />
                </div>
              </div>
            </section>

            <section className="space-y-5">
              <div className="flex items-center justify-between border-b pb-2">
                <h2 className="text-2xl font-bold text-slate-900">Projects</h2>
                <Button variant="outline" size="sm" onClick={addProject} data-testid="button-add-project">+ Add Project</Button>
              </div>
              {data.projects.map((project) => (
                <div key={project.id} className="p-4 bg-slate-50 border rounded-lg space-y-4 relative">
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50" onClick={() => removeProject(project.id)} data-testid={`button-remove-project-${project.id}`}>
                    &times;
                  </Button>
                  <div className="grid gap-4 mr-8">
                    <div className="space-y-2">
                      <Label>Project Title</Label>
                      <Input value={project.title} onChange={(e) => updateProject(project.id, { title: e.target.value })} data-testid={`input-project-title-${project.id}`} />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea rows={3} value={project.description} onChange={(e) => updateProject(project.id, { description: e.target.value })} data-testid={`textarea-project-description-${project.id}`} />
                    </div>
                    <div className="space-y-2">
                      <Label>Tools (comma separated)</Label>
                      <Input value={project.tools.join(", ")} onChange={(e) => updateProject(project.id, { tools: parseList(e.target.value) })} data-testid={`input-project-tools-${project.id}`} />
                    </div>
                    <div className="space-y-2">
                      <Label>Impact</Label>
                      <Textarea rows={2} value={project.impact} onChange={(e) => updateProject(project.id, { impact: e.target.value })} data-testid={`textarea-project-impact-${project.id}`} />
                    </div>
                  </div>
                </div>
              ))}
            </section>

          </div>
        </div>
      </div>

      {/* Right Content - Live Preview */}
      <div className="w-1/2 h-full flex-1 overflow-y-auto bg-slate-200 p-8 flex justify-center items-start print:w-full print:p-0 print:block">
        <div id="resume-preview" className="bg-white shadow-2xl w-[8.5in] h-[11in] shrink-0 overflow-hidden print:shadow-none print:w-full print:h-[11in] relative origin-top scale-[0.85] 2xl:scale-100 print:scale-100">
          <div
            ref={contentRef}
            style={{
              transform: `scale(${fitScale})`,
              transformOrigin: "top left",
              width: `${100 / fitScale}%`,
            }}
          >
            <Template data={data} />
          </div>
        </div>
      </div>

    </div>
  );
}
