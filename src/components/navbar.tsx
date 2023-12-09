"use client"

import { Typography } from "@/constants/Typography"
import { TextInput } from "@mantine/core"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { IoIosSearch } from "react-icons/io"

export const Navbar = () => {

    const [value, setValue] = useState("");

    const router = useRouter();

    const handleSubmit = (value: string) => {
        if (value.length < 1) return;
        router.push(`/result?q=${value}`);
    }

    return <>
    
        <div className="flex h-16 w-full my_container items-center justify-between">
            <Link href="/" style={{fontFamily: Typography.heading}} className="text-xl">ICOMPARE</Link>
            <form className="w-[300px]" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(value)
            }}>
                <TextInput 
                    className="w-full h-10"
                    variant="filled"
                    placeholder="Search Phone Name"
                    icon={
                        <IoIosSearch />
                    }
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
        </div>

    </>

}