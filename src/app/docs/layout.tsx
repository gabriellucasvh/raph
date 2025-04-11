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
            <div className="flex flex-col md:flex-row min-h text-white container mx-auto px-4 md:px-8 lg:px-14">
                <DocsSidebar />
                <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}