import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface LeadData {
  fullName: string;
  phone: string;
  email?: string;
  source: string;
  message?: string;
  metadata?: Record<string, any>;
}

export const useLead = () => {
  const { toast } = useToast();

  const saveLead = async (data: LeadData) => {
    try {
      const { error } = await (supabase as any)
        .from("leads")
        .insert({
          full_name: data.fullName,
          phone: data.phone,
          email: data.email,
          source: data.source,
          message: data.message,
          metadata: data.metadata,
        });

      if (error) {
        console.error("Error saving lead:", error);
        toast({
          title: "Erro ao registrar interesse",
          description: "Tente novamente mais tarde.",
          variant: "destructive",
        });
        return false;
      }

      toast({
        title: "Sucesso!",
        description: "Recebemos seu interesse. Em breve entraremos em contato!",
      });

      return true;
    } catch (error) {
      console.error("Error saving lead:", error);
      return false;
    }
  };

  return { saveLead };
};
