
export interface LessonModule {
  id: string;
  teacherName: string;
  schoolName: string;
  title: string;
  subject: string;
  grade: string;
  topic: string;
  duration: string;
  meetingCount: string;
  learningModel: string;
  learningObjectives: string[];
  biblicalWorldview: {
    verse: string;
    connection: string;
    keyPrinciple: string;
  };
  keyConcepts: string[];
  essentialQuestions: string[];
  activities: {
    opening: string[];
    core: string[];
    closing: string[];
  };
  assessment: {
    method: string;
    scoringRubric: {
      criteria: string;
      excellent: string;
      good: string;
      needsImprovement: string;
    }[];
  };
  worksheet: {
    title: string;
    instructions: string;
    tasks: string[];
  };
  materials: string[];
  createdAt: number;
}

export type Subject = 
  | 'Matematika'
  | 'Bahasa Indonesia'
  | 'IPAS'
  | 'Pendidikan Pancasila'
  | 'Seni Budaya'
  | 'PJOK'
  | 'Bahasa Inggris'
  | 'Pendidikan Agama Kristen'
  | 'TIK';

export interface ModuleFormData {
  teacherName: string;
  schoolName: string;
  subject: Subject;
  grade: string;
  topic: string;
  duration: string;
  meetingCount: string;
  learningModel: string;
  learningObjectives: string;
  additionalContext?: string;
}
