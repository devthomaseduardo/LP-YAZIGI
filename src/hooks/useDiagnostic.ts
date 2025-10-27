import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface DiagnosticData {
  fullName: string;
  phone: string;
  email?: string;
  currentLevel: string;
  previousExperience: string;
  mainObjective: string;
  biggestDifficulty: string;
  desiredTimeline: string;
  weeklyAvailability: string;
  ageRange: string;
  classPreference: string;
}

export const useDiagnostic = () => {
  const { toast } = useToast();

  const saveDiagnostic = async (data: DiagnosticData) => {
    try {
      const { error } = await (supabase as any)
        .from("diagnostic_results")
        .insert({
          full_name: data.fullName,
          phone: data.phone,
          email: data.email,
          current_level: data.currentLevel,
          previous_experience: data.previousExperience,
          main_objective: data.mainObjective,
          biggest_difficulty: data.biggestDifficulty,
          desired_timeline: data.desiredTimeline,
          weekly_availability: data.weeklyAvailability,
          age_range: data.ageRange,
          class_preference: data.classPreference,
        });

      if (error) {
        console.error("Error saving diagnostic:", error);
        toast({
          title: "Erro ao salvar diagnóstico",
          description: "Não se preocupe, seus dados foram enviados via WhatsApp.",
          variant: "destructive",
        });
        return false;
      }

      return true;
    } catch (error) {
      console.error("Error saving diagnostic:", error);
      return false;
    }
  };

  return { saveDiagnostic };
};
