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

interface Diagnostic {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
  current_level: string;
  previous_experience: string;
  main_objective: string;
  biggest_difficulty: string;
  desired_timeline: string;
  weekly_availability: string;
  age_range: string;
  class_preference: string;
  created_at: string;
}

export const DiagnosticsTable = () => {
  const [diagnostics, setDiagnostics] = useState<Diagnostic[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDiagnostics();
  }, []);

  const fetchDiagnostics = async () => {
    setIsLoading(true);
    const { data, error } = await (supabase as any)
      .from("diagnostic_results")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setDiagnostics(data);
    }
    setIsLoading(false);
  };

  const openWhatsApp = (phone: string, name: string) => {
    const message = `Olá ${name}! Aqui é da Yázigi Swiss Park. Recebemos seu diagnóstico e gostaríamos de conversar sobre as melhores opções para você!`;
    window.open(`https://wa.me/55${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, "_blank");
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
            <CardTitle>Diagnósticos Recebidos</CardTitle>
            <CardDescription>
              {diagnostics.length} diagnósticos completos
            </CardDescription>
          </div>
          <Button variant="outline" size="sm" onClick={fetchDiagnostics}>
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
                <TableHead>Nível</TableHead>
                <TableHead>Objetivo</TableHead>
                <TableHead>Faixa Etária</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {diagnostics.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    Nenhum diagnóstico recebido ainda
                  </TableCell>
                </TableRow>
              ) : (
                diagnostics.map((diagnostic) => (
                  <TableRow key={diagnostic.id}>
                    <TableCell className="whitespace-nowrap">
                      {format(new Date(diagnostic.created_at), "dd/MM/yyyy HH:mm", { locale: ptBR })}
                    </TableCell>
                    <TableCell className="font-medium">{diagnostic.full_name}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{diagnostic.phone}</div>
                        {diagnostic.email && (
                          <div className="text-xs text-muted-foreground">{diagnostic.email}</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{diagnostic.current_level}</Badge>
                    </TableCell>
                    <TableCell>{diagnostic.main_objective}</TableCell>
                    <TableCell>{diagnostic.age_range}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openWhatsApp(diagnostic.phone, diagnostic.full_name)}
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
