import { ExecutiveTemplate, CorporateTemplate, ClassicTemplate, BoardroomTemplate, ManhattanTemplate } from "./professional";
import { NovaTemplate, PulseTemplate, ApexTemplate, StellarTemplate, FusionTemplate } from "./modern";
import { CanvasTemplate, StudioTemplate, PaletteTemplate, MosaicTemplate, SparkTemplate } from "./creative";
import { PureTemplate, WhisperTemplate, LineTemplate, DotTemplate, GhostTemplate } from "./minimal";
import { PrestigeTemplate, SummitTemplate, PremierTemplate, LegacyTemplate, PinnacleTemplate } from "./executive";
import { VisageTemplate, PortraitTemplate, HorizonTemplate, LumiereTemplate, SpotlightTemplate } from "./photo";
import { ResumeData } from "@/lib/types";

export interface TemplateProps {
  data: ResumeData;
}

export const templatesList = [
  // Professional
  { id: "executive", name: "Executive", category: "Professional", component: ExecutiveTemplate },
  { id: "corporate", name: "Corporate", category: "Professional", component: CorporateTemplate },
  { id: "classic", name: "Classic", category: "Professional", component: ClassicTemplate },
  { id: "boardroom", name: "Boardroom", category: "Professional", component: BoardroomTemplate },
  { id: "manhattan", name: "Manhattan", category: "Professional", component: ManhattanTemplate },
  
  // Modern
  { id: "nova", name: "Nova", category: "Modern", component: NovaTemplate },
  { id: "pulse", name: "Pulse", category: "Modern", component: PulseTemplate },
  { id: "apex", name: "Apex", category: "Modern", component: ApexTemplate },
  { id: "stellar", name: "Stellar", category: "Modern", component: StellarTemplate },
  { id: "fusion", name: "Fusion", category: "Modern", component: FusionTemplate },
  
  // Creative
  { id: "canvas", name: "Canvas", category: "Creative", component: CanvasTemplate },
  { id: "studio", name: "Studio", category: "Creative", component: StudioTemplate },
  { id: "palette", name: "Palette", category: "Creative", component: PaletteTemplate },
  { id: "mosaic", name: "Mosaic", category: "Creative", component: MosaicTemplate },
  { id: "spark", name: "Spark", category: "Creative", component: SparkTemplate },
  
  // Minimal
  { id: "pure", name: "Pure", category: "Minimal", component: PureTemplate },
  { id: "whisper", name: "Whisper", category: "Minimal", component: WhisperTemplate },
  { id: "line", name: "Line", category: "Minimal", component: LineTemplate },
  { id: "dot", name: "Dot", category: "Minimal", component: DotTemplate },
  { id: "ghost", name: "Ghost", category: "Minimal", component: GhostTemplate },
  
  // Executive
  { id: "prestige", name: "Prestige", category: "Executive", component: PrestigeTemplate },
  { id: "summit", name: "Summit", category: "Executive", component: SummitTemplate },
  { id: "premier", name: "Premier", category: "Executive", component: PremierTemplate },
  { id: "legacy", name: "Legacy", category: "Executive", component: LegacyTemplate },
  { id: "pinnacle", name: "Pinnacle", category: "Executive", component: PinnacleTemplate },

  // With Photo
  { id: "visage", name: "Visage", category: "With Photo", component: VisageTemplate },
  { id: "portrait", name: "Portrait", category: "With Photo", component: PortraitTemplate },
  { id: "horizon", name: "Horizon", category: "With Photo", component: HorizonTemplate },
  { id: "lumiere", name: "Lumiere", category: "With Photo", component: LumiereTemplate },
  { id: "spotlight", name: "Spotlight", category: "With Photo", component: SpotlightTemplate },
];

export function getTemplateComponent(id: string) {
  const template = templatesList.find(t => t.id === id) || templatesList[0];
  return template.component;
}
