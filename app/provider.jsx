"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { UserDetailsContext } from "@/context/UserDetailsContext";
import { OpenDialogContext } from "@/context/OpenDialogContext";

export function Provider({ children }) {
  const [userDetails,setUserDetails] = React.useState()
  const [openDialog,setOpenDialog] = React.useState()
  return(
  <div>

    <UserDetailsContext.Provider value={{userDetails,setUserDetails}}>
    <OpenDialogContext.Provider value={{openDialog,setOpenDialog}}>
  <NextThemesProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
    >
    {children}
  </NextThemesProvider>
      </OpenDialogContext.Provider>
      </UserDetailsContext.Provider>
    </div>
  )
}
