'use client'

import { BriefcaseBusiness, ChevronDown, LogOut } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { sidebarNavigation, sidebarSupportNavigation } from "@/constants/data"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "cn"
import { Avatar, AvatarFallback } from "../ui/avatar"
import { Button } from "../ui/button"

export function Sidebar(){
    const pathname = usePathname()

    return (
        <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
            <div className="flex h-20 items-center gap-3 px-6">
                <div className="size-9 flex items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                    <BriefcaseBusiness className="size-5" />
                </div>

                <div>
                    <p className="text-slate-950 font-bold tracking-tight">
                        Crédito <span className="text-blue-600">Flow</span>
                    </p>
                    <p className="text-xss font-medium uppercase tracking-wider text-slate-400">
                        Gestão Inteligente
                    </p>
                </div>
            </div>

            <Separator />

            <nav className="flex-1 p-3">
                <p className="mb-3 px-3 text-xss font-semibold uppercase tracking-widest text-slate-400">
                    Menu Principal
                </p>

                <div className="flex flex-col gap-1">
                    {sidebarNavigation.map((item) => {
                        const Icon = item.icon
                        const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))

                        return (
                            <Link key={item.href} href={item.href} className={cn('flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors', isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900')}>
                                <Icon className='size-4.5' />
                                <span className="flex-1">{item.label}</span>
                                {item.count && (
                                    <span className={cn('rounded-md px-1.5 py-0.5 text-xs', isActive ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500')}>
                                        {item.count}
                                    </span>
                                )}
                            </Link>
                        )
                    })}
                </div>

                <p className="sidebar-title">
                    Suporte
                </p>

                <div className="flex flex-col gap-1">
                    {sidebarSupportNavigation.map(({href, icon: Icon, label}) => (
                        <Link key={href} href={href} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors text-slate-500 hover:bg-slate-50 hover:text-slate-900">
                            <Icon className="size-4.5" />
                            {label}
                        </Link>
                    ))}
                </div>
            </nav>

            <div className="p-3">
                <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                    <Avatar className="size-9">
                        <AvatarFallback className="bg-blue-600 text-xs font-semibold text-white">
                            BG
                        </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-slate-800">
                            Breno Giovanni
                        </p>
                        <p className="truncate text-xs text-slate-500">
                            Root
                        </p>
                    </div>
                    <Button variant='ghost' className="text-slate-400 hover:text-slate-700">
                        <ChevronDown className="size-4" />
                    </Button>
                </div>

                <Button size='sm' variant='outline'>
                    <LogOut className="size-4" />
                    Sair da conta
                </Button>
            </div>
        </aside>
    )
}