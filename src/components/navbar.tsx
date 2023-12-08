"use client"

import { Typography } from "@/constants/Typography"
import { TextInput } from "@mantine/core"
import Link from "next/link"
import { IoIosSearch } from "react-icons/io"

export const Navbar = () => {

    return <>
    
        <div className="flex h-16 w-full my_container items-center justify-between">
            <Link href="/" style={{fontFamily: Typography.heading}} className="text-xl">ICOMPARE</Link>
            <div className="w-[300px]">
                <TextInput 
                    className="w-full h-10"
                    variant="filled"
                    placeholder="Search Phone Name"
                    icon={
                        <IoIosSearch />
                    }
                />
            </div>
        </div>

    </>

}