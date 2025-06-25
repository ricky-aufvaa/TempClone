import { Button } from "../ui/button";
import Lookup from "../../data/Lookup";
import Link from "next/link";
import Image from "next/image";
import Colors from "@/data/Colors";

export function Header() {
  return (
    //outer
    <div className="flex justify-between p-4">   
    {/* left */}
      <div className="flex items-center ">
        <Link href="/">
          <Image
            src="lightning-charge-fill.svg"
            alt="logo"
            width={30}
            height={30}
            style={{ filter: "invert(1)" }}
          />
        </Link>
      </div>
      {/* right */}
      <div className="flex items-center gap-5">
        <Button variant="ghost" asChild className="opacity-70 hover:opacity-100 transition-all duration-400">
          <Link href={Lookup.LINKEDIN_LINK}>
            <Image
              src="linkedin.svg"
              alt="linkedin"
              width={30}
              height={30}
              style={{ filter: "invert(1)" }}
            />
          </Link>
        </Button>
        <Button variant="ghost" asChild className="opacity-70  hover:opacity-100 transition-all duration-400">
          <Link href={Lookup.GITHUB_LINK}>
            <Image
              src="github.svg"
              alt="github"
              width={30}
              height={30}
              style={{ filter: "invert(1)" }}
            />
          </Link>
        </Button>
        <Button className="text-white hover:text-black transition-all duration-400 cursor-pointer" style={{ backgroundColor: Colors.BLUE }}>Get Started</Button>
      </div>
    </div>
  );
}
