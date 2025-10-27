import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, ExternalLink } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Lead {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
  source: string;
  message: string | null;
  metadata: any;
  created_at: string;
}

export const LeadsTable = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setIsLoading(true);
    const { data, error } = await (supabase as any)
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setLeads(data);
    }
    setIsLoading(false);
  };

  const openWhatsApp = (phone: string, name: string) => {
    const message = `Olá ${name}! Aqui é da Yázigi Swiss Park. Recebemos seu contato e gostaríamos de conversar sobre as melhores opções para você!`;
    window.open(`https://wa.me/55${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const getSourceBadge = (source: string) => {
    const sourceMap: Record<string, { label: string; variant: "default" | "secondary" | "outline" }> = {
      hero_cta: { label: "Hero CTA", variant: "default" },
      diagnostic: { label: "Diagnóstico", variant: "secondary" },
      benefits_section: { label: "Benefícios", variant: "outline" },
      levels_section: { label: "Níveis", variant: "outline" },
      cta_section: { label: "CTA Final", variant: "default" },
    };

    const config = sourceMap[source] || { label: source, variant: "outline" as const };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="py-12">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Leads Capturados</CardTitle>
            <CardDescription>
              {leads.length} leads registrados
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={fetchLeads}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Atualizar
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Data</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Contato</TableHead>
                <TableHead>Origem</TableHead>
                <TableHead>Mensagem</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    Nenhum lead capturado ainda
                  </TableCell>
                </TableRow>
              ) : (
                leads.map((lead) => (
                  <TableRow key={lead.id}>
                    <TableCell className="whitespace-nowrap">
                      {format(new Date(lead.created_at), "dd/MM/yyyy HH:mm", { locale: ptBR })}
                    </TableCell>
                    <TableCell className="font-medium">{lead.full_name}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{lead.phone}</div>
                        {lead.email && (
                          <div className="text-xs text-muted-foreground">{lead.email}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{getSourceBadge(lead.source)}</TableCell>
                    <TableCell className="max-w-xs">
                      {lead.message ? (
                        <div className="text-sm text-muted-foreground truncate">
                          {lead.message}
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openWhatsApp(lead.phone, lead.full_name)}
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        WhatsApp
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
