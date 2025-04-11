"use client"

import { DocsSidebar } from "@/components/DocsSidebar";


export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-dark text-white">
      <DocsSidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}