import { Head, Link } from "@inertiajs/react";
import { MdAddCard } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { CiTrash } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import { IoPrintOutline } from "react-icons/io5";
import { IoMdPersonAdd } from "react-icons/io";

export default function CardDashboard({ role, cards }) {
    console.log(role);
    console.log(cards);
    return (
        <div className="container mx-auto my-auto">
            <Head title="Card Maker" />

            <h2 className="text-bold text-6xl text-center mt-8">
                Simple Card Maker App
            </h2>
            {/* Role */}
            <div className=" p-4 mx-auto flex justify-center my-20">
                <Link className="flex" href="/role">
                    <button
                        type="button"
                        className=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-8 py-2.5 text-center me-2 mb-2 "
                    >
                        Add
                        <IoMdPersonAdd className="size-5" />
                    </button>
                </Link>
                <div className="shadow-xl w-auto ">
                    <span className="font-semibold text-3xl">Role</span>

                    <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-400 rounded dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {role.map((item, i) => (
                                <tr
                                    key={i}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {i + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.role_name}
                                    </td>
                                    <td className="px-6 py-4 flex justify-between">
                                        <Link>
                                            <HiOutlinePencilSquare
                                                role="button"
                                                className="hover:text-black"
                                                size={18}
                                            />
                                        </Link>
                                        <Link>
                                            <CiTrash
                                                role="button"
                                                className="hover:text-black"
                                                size={18}
                                            />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Card */}
            <div className=" p-4 mx-auto flex justify-center ">
                <Link href="/card" className="flex">
                    <button
                        type="button"
                        className=" text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-8 py-2.5 text-center me-2 mb-2 "
                    >
                        Add
                        <MdAddCard className="size-5" />
                    </button>
                </Link>
                <div className="shadow-xl w-auto ">
                    <span className="font-semibold text-3xl">Card</span>

                    <table className="w-full text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-400 rounded dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cards.map((item, i) => (
                                <tr
                                    key={i}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {i + 1}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.created_at}
                                    </td>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4 flex justify-between gap-3">
                                        <Link href="/1">
                                            <BsEye
                                                name="view"
                                                size={18}
                                                className="hover:text-black"
                                            />
                                        </Link>
                                        <Link>
                                            <HiOutlinePencilSquare
                                                name="edit"
                                                size={18}
                                                className="hover:text-black"
                                            />
                                        </Link>
                                        <Link>
                                            <CiTrash
                                                name="delete"
                                                size={18}
                                                className="hover:text-black"
                                            />
                                        </Link>
                                        <Link>
                                            <IoPrintOutline
                                                name="print"
                                                size={18}
                                                className="hover:text-black"
                                            />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
