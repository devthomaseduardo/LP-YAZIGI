import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardCheck, Users, TrendingUp, Calendar } from "lucide-react";

export const DashboardStats = () => {
  const [stats, setStats] = useState({
    totalDiagnostics: 0,
    totalLeads: 0,
    todayDiagnostics: 0,
    todayLeads: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [diagnosticsResult, leadsResult, todayDiagnosticsResult, todayLeadsResult] = await Promise.all([
      (supabase as any).from("diagnostic_results").select("*", { count: "exact", head: true }),
      (supabase as any).from("leads").select("*", { count: "exact", head: true }),
      (supabase as any).from("diagnostic_results").select("*", { count: "exact", head: true }).gte("created_at", today.toISOString()),
      (supabase as any).from("leads").select("*", { count: "exact", head: true }).gte("created_at", today.toISOString()),
    ]);

    setStats({
      totalDiagnostics: diagnosticsResult.count || 0,
      totalLeads: leadsResult.count || 0,
      todayDiagnostics: todayDiagnosticsResult.count || 0,
      todayLeads: todayLeadsResult.count || 0,
    });
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Diagnósticos</CardTitle>
          <ClipboardCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalDiagnostics}</div>
          <p className="text-xs text-muted-foreground">
            +{stats.todayDiagnostics} hoje
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalLeads}</div>
          <p className="text-xs text-muted-foreground">
            +{stats.todayLeads} hoje
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Hoje</CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {stats.todayDiagnostics + stats.todayLeads}
          </div>
          <p className="text-xs text-muted-foreground">
            Novos contatos
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {stats.totalLeads > 0 
              ? Math.round((stats.totalDiagnostics / (stats.totalDiagnostics + stats.totalLeads)) * 100)
              : 0}%
          </div>
          <p className="text-xs text-muted-foreground">
            Diagnósticos vs Leads
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
