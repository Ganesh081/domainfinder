import { useState, useEffect } from "react";
import { ResumeData, defaultResumeData } from "../lib/types";

const inMemoryResumeStore = new Map<string, ResumeData>();

function createId() {
  return Math.random().toString(36).slice(2, 10);
}

function createDefaultResumeData(): ResumeData {
  return JSON.parse(JSON.stringify(defaultResumeData));
}

function mergeSkills(technical: string[], tools: string[], soft: string[]) {
  return Array.from(new Set([...technical, ...tools, ...soft].filter(Boolean)));
}

export function useResume(templateId: string) {
  const [data, setData] = useState<ResumeData>(() => {
    const existing = inMemoryResumeStore.get(templateId);
    if (existing) return existing;

    const initial = createDefaultResumeData();
    inMemoryResumeStore.set(templateId, initial);
    return initial;
  });

  useEffect(() => {
    const existing = inMemoryResumeStore.get(templateId);
    if (existing) {
      setData(existing);
      return;
    }

    const initial = createDefaultResumeData();
    inMemoryResumeStore.set(templateId, initial);
    setData(initial);
  }, [templateId]);

  useEffect(() => {
    inMemoryResumeStore.set(templateId, data);
  }, [templateId, data]);

  const updatePersonalInfo = (info: Partial<ResumeData["personalInfo"]>) => {
    setData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...info },
    }));
  };

  const updateExperience = (id: string, exp: Partial<ResumeData["experience"][0]>) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((e) => (e.id === id ? { ...e, ...exp } : e)),
    }));
  };

  const addExperience = () => {
    setData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Math.random().toString(36).substr(2, 9),
          company: "",
          role: "",
          startDate: "",
          endDate: "",
          current: false,
          bullets: [""],
        },
      ],
    }));
  };

  const removeExperience = (id: string) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((e) => e.id !== id),
    }));
  };

  const updateEducation = (id: string, edu: Partial<ResumeData["education"][0]>) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.map((e) => (e.id === id ? { ...e, ...edu } : e)),
    }));
  };

  const addEducation = () => {
    setData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: Math.random().toString(36).substr(2, 9),
          institution: "",
          degree: "",
          field: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  const removeEducation = (id: string) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.filter((e) => e.id !== id),
    }));
  };

  const setSkills = (skills: string[]) => {
    setData((prev) => ({
      ...prev,
      skillCategories: {
        ...prev.skillCategories,
        technical: skills,
      },
      skills: mergeSkills(skills, prev.skillCategories.tools, prev.skillCategories.soft),
    }));
  };

  const setTechnicalSkills = (technical: string[]) => {
    setData((prev) => ({
      ...prev,
      skillCategories: {
        ...prev.skillCategories,
        technical,
      },
      skills: mergeSkills(technical, prev.skillCategories.tools, prev.skillCategories.soft),
    }));
  };

  const setToolSkills = (tools: string[]) => {
    setData((prev) => ({
      ...prev,
      skillCategories: {
        ...prev.skillCategories,
        tools,
      },
      skills: mergeSkills(prev.skillCategories.technical, tools, prev.skillCategories.soft),
    }));
  };

  const setSoftSkills = (soft: string[]) => {
    setData((prev) => ({
      ...prev,
      skillCategories: {
        ...prev.skillCategories,
        soft,
      },
      skills: mergeSkills(prev.skillCategories.technical, prev.skillCategories.tools, soft),
    }));
  };

  const addProject = () => {
    setData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: createId(),
          title: "",
          description: "",
          tools: [],
          impact: "",
        },
      ],
    }));
  };

  const updateProject = (id: string, project: Partial<ResumeData["projects"][0]>) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((item) => (item.id === id ? { ...item, ...project } : item)),
    }));
  };

  const removeProject = (id: string) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((item) => item.id !== id),
    }));
  };

  return {
    data,
    updatePersonalInfo,
    updateExperience,
    addExperience,
    removeExperience,
    updateEducation,
    addEducation,
    removeEducation,
    setSkills,
    setTechnicalSkills,
    setToolSkills,
    setSoftSkills,
    addProject,
    updateProject,
    removeProject,
  };
}
