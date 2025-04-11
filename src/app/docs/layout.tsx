"use client"

import { DocsSidebar } from "@/components/DocsSidebar";
import Navbar from "@/components/Navbar";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="pt-20">
            <div className="hidden lg:block">
            <Navbar />
            </div>
            <div className="relative flex min-h-screen text-white max-w-7xl mx-auto">
                <DocsSidebar />
                <main className="flex-1 p-4 md:p-0 md:px-8 ml-[19rem]">
                    {children}
                </main>
            </div>
        </div>
    );
}