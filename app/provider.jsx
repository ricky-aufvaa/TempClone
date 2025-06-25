"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Provider({ children }) {
  return(
  <div>
  <NextThemesProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
    >
    {children}
  </NextThemesProvider>
    </div>
  )
}
