"use client"
import Colors from "@/data/Colors"
import Lookup from "@/data/Lookup"
import { ArrowRight, Link } from "lucide-react"
import { useContext, useState } from "react"
import { SignInDialog } from "./SignInDialog"
import { UserDetailsContext } from "@/context/UserDetailsContext"
import { OpenDialogContext } from "@/context/OpenDialogContext"

export const Hero = () =>{
    const [userInput, setUserInput] = useState("")
    const [message,setMessage] = useState(null)
    const {userDetail,setUserDetail} = useContext(UserDetailsContext)
    // const [openDialog,setOpenDialog] = useState(false)
    const {openDialog,setOpenDialog} = useContext(OpenDialogContext)

    const onGenerate = (input) =>{
        if(!userDetail?.name){
            setOpenDialog(true)
            return
        }


        setMessage({


            // for openai
            // type:"text",
            // role:"user",
            // text:{userInput}
            
            //for gemini
            role:"user",
            content:input,
        })
    }

    return (

        <div className="flex flex-col items-center mt-36 xl:mt-42 gap-2">
        <h2 className="font-bold text-4xl">{Lookup.HERO_HEADING}</h2>
        <p className="text-gray-400 font-medium">{Lookup.HERO_DESC}</p>
        <div
          className="p-5 border rounded-xl max-w-2xl w-full mt-3"
          style={{
            backgroundColor: Colors.BACKGROUND,
          }}
        >
          <div className="flex gap-2">
            <textarea
              placeholder={Lookup.INPUT_PLACEHOLDER}
              className="outline-none bg-transparent w-full h-32 max-h-56 resize-none"
              onChange={(event) => setUserInput(event.target.value)}
            />
             {!userInput && (
              <ArrowRight
                className="bg-gray-500 p-2 w-10 h-10 rounded-md cursor-default"
              />
            )}
            {userInput && (
              <ArrowRight
                onClick={()=> onGenerate(userInput)}
                className="bg-blue-500 p-2 w-10 h-10 rounded-md cursor-pointer"
              />
            )}
          </div>
          <div>
            <Link className="h-5 w-5" />
          </div>
        </div>
  
        <div className="flex mt-8 flex-wrap max-w-2xl items-center justify-center gap-3">
          {Lookup.SUGGSTIONS.map((suggestion, index) => (
            <h2
              className="p-1 px-2 border rounded-full text-sm text-gray-400 hover:text-white cursor-pointer"
              key={index}
              onClick={() => onGenerate(suggestion)}
            >
              {suggestion}
            </h2>
          ))}
        </div>
        <SignInDialog open={openDialog} closeDialog= {(value) => setOpenDialog(false)}/>
            
    </div>)
}