// app/page/layout.tsx

import type { ReactNode } from "react";

export default function PageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="prose lg:prose-xl dark:prose-invert mx-auto p-6">
      {children}
    </main>
  );
}