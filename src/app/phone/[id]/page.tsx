/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"

import { Navbar } from "@/components/navbar";
import { Typography } from "@/constants/Typography";
import { Button, Center, Grid, Skeleton, Stack, Text } from "@mantine/core";
import Image from "next/image";
import { SlArrowRight } from "react-icons/sl";
import { useEffect, useState } from "react";
import { Phone } from "@/interface";
import axios from "axios";
import { MdSignalWifiStatusbarConnectedNoInternet1 } from "react-icons/md";
import { getPriceRange } from "@/utils";
import AmazonLogo from "@/images/logos/amazon.png";
import ArgosLogo from "@/images/logos/argos.png";
import JohnLewisLogo from "@/images/logos/john-lewis.svg";
import BackMarketLogo from "@/images/logos/backmarket.svg"

const brands = [
    {name: "Amazon", logo: AmazonLogo},
    {name: "Argos", logo: ArgosLogo},
    {name: "John Lewis", logo: JohnLewisLogo},
    {name: "Back Market", logo: BackMarketLogo}
]

const displayLogo = (name: string) => {
    const brand = brands.find((v) => v.name === name)
    return brand?.logo
}

export default function PhonePage({
    params
}: {
    params: { id: string }
}) {

    const [phone, setPhone] = useState<Phone | null>(null);

    const [status, setStatus] = useState<string | null>(null);

    const getData = async () => {

        setStatus("loading")

        try {

            const result = await axios.get(`http://localhost:3010/api/v1/phone/${Number(params.id)}`);
            const phone = result.data;

            setPhone(phone);

            setStatus("success")

        } catch (e) {
            setStatus("error")
        }

    }

    useEffect(() => {
        getData();
    }, []);

    return <>

        <Navbar />

        {
            status === "success" && phone !== null &&
            <>
                <Grid gutter="xl" className="py-[50px] my_container" align="center">
                    <Grid.Col md={6}>
                        <div className="h-[550px] w-full">
                            <img
                                src={phone.image_url}
                                className="w-full h-full object-contain object-top"
                                alt=""
                            />
                        </div>
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <div className="flex flex-col gap-4">
                            <p className="text-3xl">{phone.model.name}</p>
                            <p className="text-4xl" style={{ fontFamily: Typography.heading }}>{getPriceRange(phone.comparisons)}</p>
                        </div>
                    </Grid.Col>
                </Grid>
                <div className="border border-t-[#DEE2E6] bg-[#f1f3f5]">
                    <div className="py-10 min-h-[55vh] my_container">
                        <div className="flex flex-col gap-[30px]">
                            {
                                phone.comparisons.map(({ name, price, url }) => (
                                    <div className="w-full p-4 bg-white rounded-md" key={url}>
                                        <div className="flex gap-5 items-center">
                                            <Image
                                                src={displayLogo(name)}
                                                alt={name + "logo"}
                                                className="object-contain w-[100px]"
                                            />
                                            <p className="text-xl capitalize" style={{ fontFamily: Typography.heading }}>{name}</p>
                                        </div>
                                        <a href={url} target="_blank" className="flex items-center justify-between mt-5">
                                            <p className="text-lg">{phone.model.name}</p>
                                            <div className="flex gap-5 items-center">
                                                <p className="text-black text-3xl" style={{ fontFamily: Typography.heading }}>£{price}</p>
                                                <SlArrowRight />
                                            </div>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </>
        }

        {
            status === "loading" &&
            <>
                <Grid gutter="xl" className="py-[50px] my_container" align="center">
                    <Grid.Col md={6}>
                        <Skeleton
                            height="550px"

                        />
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <div className="flex flex-col gap-4">
                            <Skeleton height="20px" width="200px" />
                            <Skeleton height="40px" width="100px" />
                        </div>
                    </Grid.Col>
                </Grid>
                <div className="border border-t-[#DEE2E6] bg-[#f1f3f5]">
                    <div className="py-10 min-h-[55vh] my_container">
                        <div className="flex flex-col gap-[30px]">
                            {
                                Array(4).fill(0).map((n, index) => (
                                    <div className="w-full p-4 bg-white rounded-md" key={index}>
                                        <div className="flex gap-5 items-center">
                                            <Skeleton
                                                height="70px"
                                                width="150px"
                                            />
                                            <Skeleton height="15px" width="100px" />
                                        </div>
                                        <a href="https://google.com" className="flex items-center justify-between mt-5">
                                            <Skeleton height="15px" width="200px" />
                                            <div className="flex gap-5 items-center">
                                                <Skeleton height="40px" width="70px" />
                                            </div>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </>
        }

        {
            status === "error" &&
            <Center style={{ height: "70vh" }}>
                <Stack align="center">
                    <MdSignalWifiStatusbarConnectedNoInternet1 size="70px" />
                    <Text size="lg" style={{ fontFamily: Typography.heading }}>An error occured...Try again later</Text>
                    <Button onClick={() => getData()} className="bg-indigo-800 hover:bg-indigo-700">
                        Try again
                    </Button>
                </Stack>
            </Center>
        }

    </>

}