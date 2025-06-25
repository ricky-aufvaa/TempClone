"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { UserDetailsContext } from "@/context/UserDetailsContext";
import { OpenDialogContext } from "@/context/OpenDialogContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

export function Provider({ children }) {
  const [userDetails,setUserDetails] = React.useState()
  const [openDialog,setOpenDialog] = React.useState()
  return(
  <div>
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY}>
    {/* <GoogleOAuthProvider clientId="50654474718-r64udfqjulsgqqlo9ko21ri61736gvm9.apps.googleusercontent.com */}
{/* "> */}

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
      </GoogleOAuthProvider>
    </div>
  )
}
