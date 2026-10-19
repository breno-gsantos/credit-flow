import { BarChart3, CircleHelp, FileText, LayoutDashboard, Settings, Users, WalletCards } from "lucide-react";

export const sidebarNavigation = [
  { label: 'Visão geral', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Clientes', href: '/clients', icon: Users },
  { label: 'Propostas', href: '/proposals', icon: FileText, count: '86' },
  { label: 'Bancos e financeiras', href: '/institutions', icon: WalletCards },
  { label: 'Relatórios', href: '/reports', icon: BarChart3 },
] 

export const sidebarSupportNavigation = [
  {label: 'Configurações', href: '/settings', icon: Settings},
  {label: 'Central de Ajuda', href: '/help', icon: CircleHelp}
] as const