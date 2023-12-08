/* eslint-disable @next/next/no-img-element */
"use client"

import { Navbar } from "@/components/navbar";
import { Typography } from "@/constants/Typography";
import { Button, Grid, Image, Select, TextInput } from "@mantine/core";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md"

export default function Result() {

    return <>

        <Navbar />

        <div className="h-96 my_container flex flex-col items-center justify-center gap-10">
            <p className="text-2xl" style={{fontFamily: Typography.heading}}>Showing Result for &quot;Fold 9&quot;</p>
            <form className="flex gap-5 w-full">
                <TextInput 
                    className="flex-1"
                    placeholder="Filter results"
                    variant="filled"
                />
                <Select 
                    data={[]}
                    placeholder="Sort by price"
                    className="flex-1"
                    variant="filled"
                />
                <Button className="bg-indigo-800 hover:bg-indigo-700">
                    Filter
                </Button>
            </form>
        </div>

        <div className="border border-t-[#DEE2E6] bg-[#f1f3f5]">
            <div className="py-10 min-h-[55vh] my_container">
                <Grid gutter="xl">
                    <Grid.Col span={3}>
                        <div className="bg-white w-full rounded-md  overflow-hidden">
                            <div className="h-[250px]">
                                <img 
                                    src="https://johnlewis.scene7.com/is/image/JohnLewis/110062789?wid=234&hei=312"
                                    className="w-full h-full object-cover object-top"
                                    alt=""
                                />
                            </div>
                            <div className="p-4 flex flex-col gap-2">
                                <p>Samsung S23</p>
                                <p className="text-xl" style={{fontFamily: Typography.heading}}>£200-£300</p>
                                <Button variant="default" rightIcon={<MdDoubleArrow />} component={Link} href="/phone">
                                    View 
                                </Button>
                            </div>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <div className="bg-white w-full rounded-md  overflow-hidden">
                            <div className="h-[250px]">
                                <img 
                                    src="https://johnlewis.scene7.com/is/image/JohnLewis/110062789?wid=234&hei=312"
                                    className="w-full h-full object-cover object-top"
                                    alt=""
                                />
                            </div>
                            <div className="p-4 flex flex-col gap-2">
                                <p>Samsung S23</p>
                                <p className="text-xl" style={{fontFamily: Typography.heading}}>£200-£300</p>
                                <Button variant="default" rightIcon={<MdDoubleArrow />} component={Link} href="/phone">
                                    View 
                                </Button>
                            </div>
                        </div>
                    </Grid.Col>
                </Grid>
            </div>
        </div>

    </>

}