import { Head, Link } from "@inertiajs/react";
import { IoArrowBackCircle } from "react-icons/io5";

export default function Card() {
    return (
        <div className="bg-gray-100 h-screen">
            <Head title="Card" />
            <Link href="/" className="hover:text-gray-600">
                <IoArrowBackCircle className="ml-14" size={50} />
            </Link>
            <div className="container mx-auto flex justify-center items-center">
                <div className="mt-40 block max-w-sm p-6 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br border border-gray-200 rounded-2xl   dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 shadow-2xl transition-all">
                    <div className="flex justify-between gap-9">
                        <h5 className=" text-2xl font-bold  ">
                            Muhammad Attan
                        </h5>
                        <img
                            src="https://mahasiswa.itp.ac.id/assets/foto/profil/2022/55201/2022610013.jpeg"
                            alt=""
                            className="size-32 rounded-full"
                        />
                    </div>

                    <h6 className=" text-base font-normal  ">Mahasiswa</h6>
                </div>
            </div>
        </div>
    );
}
