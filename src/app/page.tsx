"use client"

import { Navbar } from "@/components/navbar";
import { Grid, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import HeroImage from "@/images/hero_img.png"
import { Typography } from "@/constants/Typography";
import AmazonLogo from "@/images/logos/amazon.png";
import ArgosLogo from "@/images/logos/argos.png";
import JohnLewisLogo from "@/images/logos/john-lewis.svg";
import BackMarketLogo from "@/images/logos/backmarket.svg"

export default function Home() {

    const theme = useMantineTheme();

    return <>
        <Navbar />
        <Grid gutter="lg" className="my_container h:auto sm:h-[400px] md:h-[600px] my-10 flex items-center">
            <Grid.Col span={12} sm={6} className="flex flex-col">
                <p className="text-4xl mb-5" style={{fontFamily: Typography.heading}}>Shopping Made Efficient</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quibusdam est ad distinctio, nostrum tenetur molestias ex voluptas, debitis vitae officia facilis fugiat minima tempore nam quod perspiciatis soluta nobis.</p>
            </Grid.Col>
            <Grid.Col span={12} sm={6} className="flex h-[200px] sm:h-3/4 justify-center items-center">
                <Image 
                    src={HeroImage}
                    alt="Hero Image"
                    className="object-contain h-full w-full"
                />
            </Grid.Col> 
        </Grid>
        <div className="border border-t-[#DEE2E6] bg-[#f1f3f5]">
            <div className="my_container py-10">
                <p className="font-bold mb-5">Supported By:</p>
                <div className="flex gap-10 items-center">
                    <Image 
                        src={AmazonLogo}
                        alt="Amazon"
                        className="object-contain w-[100px]"
                    />
                    <Image 
                        src={ArgosLogo}
                        alt="Amazon"
                        className="object-contain w-[100px]"
                    />
                    <Image 
                        src={BackMarketLogo}
                        alt="Amazon"
                        className="object-contain w-[100px]"
                    />
                    <Image 
                        src={JohnLewisLogo}
                        alt="Amazon"
                        className="object-contain w-[100px]"
                    />
                </div>
            </div>
        </div> 
    </>

}