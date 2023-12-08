/* eslint-disable @next/next/no-img-element */
"use client"

import { Navbar } from "@/components/navbar";
import { Typography } from "@/constants/Typography";
import { Grid } from "@mantine/core";
import Image from "next/image";
import AmazonLogo from "@/images/logos/amazon.png";
import { SlArrowRight } from "react-icons/sl";

export default function PhonePage() {

    return <>

        <Navbar />

        <Grid gutter="xl" className="py-[50px] my_container" align="center">
            <Grid.Col md={6}>
                <div className="h-[550px] w-full">
                    <img
                        src="https://johnlewis.scene7.com/is/image/JohnLewis/110062789?wid=234&hei=312"
                        className="w-full h-full object-contain object-top"
                        alt=""
                    />
                </div>
            </Grid.Col>
            <Grid.Col md={6}>
                <div className="flex flex-col gap-4">
                    <p className="text-3xl">Samsung Galaxy S23</p>
                    <p className="text-4xl" style={{ fontFamily: Typography.heading }}>£200 - £500</p>
                </div>
            </Grid.Col>
        </Grid>

        <div className="border border-t-[#DEE2E6] bg-[#f1f3f5]">
            <div className="py-10 min-h-[55vh] my_container">
                <div className="flex flex-col gap-[30px]">
                    <div className="w-full p-4 bg-white rounded-md">
                        <div className="flex gap-5 items-center">
                            <Image
                                src={AmazonLogo}
                                alt="Amazon"
                                className="object-contain w-[100px]"
                            />
                            <p className="text-xl" style={{ fontFamily: Typography.heading }}>Amazon</p>
                        </div>
                        <a href="https://google.com" className="flex items-center justify-between mt-5">
                            <p className="text-lg">Lorem ipsum dolor sit.</p>
                            <div className="flex gap-5 items-center">
                                <p className="text-black text-3xl" style={{ fontFamily: Typography.heading }}>£300</p>
                                <SlArrowRight />
                            </div>
                        </a>
                    </div>
                    <div className="w-full p-4 bg-white rounded-md">
                        <div className="flex gap-5 items-center">
                            <Image
                                src={AmazonLogo}
                                alt="Amazon"
                                className="object-contain w-[100px]"
                            />
                            <p className="text-xl" style={{ fontFamily: Typography.heading }}>Amazon</p>
                        </div>
                        <a href="https://google.com" className="flex items-center justify-between mt-5">
                            <p className="text-lg">Lorem ipsum dolor sit.</p>
                            <div className="flex gap-5 items-center">
                                <p className="text-black text-3xl" style={{ fontFamily: Typography.heading }}>£250</p>
                                <SlArrowRight />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </>

}