import { Head, Link } from "@inertiajs/react";
import { IoArrowBackCircle, IoPrintOutline } from "react-icons/io5";
import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function Card() {
    const contentToPrint = useRef(null);
    const handlePrint = useReactToPrint({
        documentTitle: "Print This Document",
        onBeforePrint: () => console.log("before printing..."),
        onAfterPrint: () => console.log("after printing..."),
        removeAfterPrint: true,
    });
    return (
        <div className="bg-gray-100 h-screen">
            <Head title="Card" />
            <Link href="/" className="hover:text-gray-600">
                <IoArrowBackCircle className="ml-14" size={50} />
            </Link>
            <div
                ref={contentToPrint}
                className="container mx-auto flex justify-center items-center"
            >
                <div className="mt-40 block w-[385px] p-6 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br border border-gray-200 rounded-2xl   dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-2xl transition-all">
                    <div className="flex justify-between gap-9">
                        <h5 className=" text-2xl font-bold  ">
                            Muhammad Attan
                        </h5>
                        <img
                            src="https://mahasiswa.itp.ac.id/assets/foto/profil/2022/55201/2022610013.jpeg"
                            alt=""
                            className="size-32 rounded-full "
                        />
                    </div>
                    <img src="logoitp.png" alt="" className="size-4" />

                    <h6 className=" text-base font-normal  ">Mahasiswa</h6>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <PrimaryButton
                    className="flex justify-center gap-2"
                    onClick={() => {
                        handlePrint(null, () => contentToPrint.current);
                    }}
                >
                    Cetak
                    <IoPrintOutline className="size-4" />
                </PrimaryButton>
            </div>
        </div>
    );
}
