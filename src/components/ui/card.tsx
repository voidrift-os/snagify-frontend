import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
    {children}
  </div>
);

export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col space-y-1.5 p-6">{children}</div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-semibold leading-none tracking-tight">
    {children}
  </h3>
);

export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-6 pt-0">{children}</div>
);
