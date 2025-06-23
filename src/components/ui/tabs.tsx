import React from "react";

export const Tabs = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full">{children}</div>
);

export const TabsList = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
    {children}
  </div>
);

export const TabsTrigger = ({ children }: { children: React.ReactNode }) => (
  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent">
    {children}
  </button>
);

export const TabsContent = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-2">{children}</div>
);
