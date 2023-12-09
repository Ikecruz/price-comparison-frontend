/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"

import { Navbar } from "@/components/navbar";
import { Typography } from "@/constants/Typography";
import { Phone } from "@/interface";
import { getPriceRange } from "@/utils";
import { Button, Center, Grid, Group, Image, Select, Skeleton, Stack, Text, TextInput } from "@mantine/core";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MdDoubleArrow, MdSignalWifiStatusbarConnectedNoInternet1 } from "react-icons/md"
import { ImFileEmpty } from "react-icons/im"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

export default function Result() {

    const searchParams = useSearchParams();

    const query = searchParams.get("q");

    const [status, setStatus] = useState<string | null>(null);

    const [phones, setPhones] = useState<Phone[]>([]);

    const [pagination, setPagination] = useState({
        next: null, prev: null
    })

    const getData = async (page?: number | null) => {

        setStatus("loading")

        try {

            const result = await axios.get(`http://localhost:3010/api/v1/search?keyword=${query}${page ? `&page=${page}` : ''}`);
            const { next, prev, data } = result.data;

            setPhones(data);
            setPagination({ next, prev });

            setStatus("success")

        } catch (e) {
            setStatus("error")
        }

    }

    useEffect(() => {
        getData();
    }, [query]);

    return <>

        <Navbar />

        <div className="h-96 my_container flex flex-col items-center justify-center gap-10">
            <p className="text-2xl" style={{ fontFamily: Typography.heading }}>Showing Result for &quot;{query}&quot;</p>
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
                {
                    status === "success" &&
                    <>
                        {
                            phones.length > 0 ?
                                <>
                                    <Grid gutter="xl">
                                        {
                                            phones.map(({ image_url, model, comparisons, id }) => (
                                                <Grid.Col span={3} key={id}>
                                                    <div className="bg-white w-full rounded-md  overflow-hidden">
                                                        <div className="h-[250px]">
                                                            <img
                                                                src={image_url}
                                                                className="w-full h-full object-cover object-top"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="p-4 flex flex-col gap-2">
                                                            <p>{model!.name}</p>
                                                            <p className="text-xl" style={{ fontFamily: Typography.heading }}>{getPriceRange(comparisons)}</p>
                                                            <Button variant="default" rightIcon={<MdDoubleArrow />} component={Link} href={`/phone/${id}`}>
                                                                View
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </Grid.Col>
                                            ))
                                        }
                                    </Grid>
                                    <Group mt="30px" position="center">
                                        <Button
                                            leftIcon={<AiOutlineArrowLeft />}
                                            disabled={!pagination.prev}
                                            className="bg-indigo-800 hover:bg-indigo-700 disabled:bg-inherit"
                                            onClick={() => getData(pagination.prev)}
                                        >
                                            Previous
                                        </Button>
                                        <Button
                                            rightIcon={<AiOutlineArrowRight />}
                                            disabled={!pagination.next}
                                            className="bg-indigo-800 hover:bg-indigo-700 disabled:bg-inherit"
                                            onClick={() => getData(pagination.next)}
                                        >
                                            Next
                                        </Button>
                                    </Group>
                                </> :
                                <div className="h-[70vh] flex flex-col items-center justify-center gap-5">
                                    <ImFileEmpty size="70px" />
                                    <Text size="lg" style={{ fontFamily: Typography.heading }}>No phone with keyword &quot;{query}&quot; found 😕</Text>
                                </div>
                        }
                    </>
                }
                {
                    status === "loading" &&
                    <Grid gutter="xl">
                        {
                            Array(8).fill(0).map((n, index) => (
                                <Grid.Col key={index} span={3}>
                                    <div className="bg-white w-full rounded-md  overflow-hidden">
                                        <Skeleton
                                            height="250px"
                                        />
                                        <div className="p-4 flex flex-col gap-2">
                                            <Skeleton
                                                height="10px"

                                            />
                                            <Skeleton
                                                height="20px"
                                                width="70px"
                                            />
                                            <Skeleton
                                                height="40px"
                                            />
                                        </div>
                                    </div>
                                </Grid.Col>
                            ))
                        }

                    </Grid>
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
            </div>
        </div>

    </>

}