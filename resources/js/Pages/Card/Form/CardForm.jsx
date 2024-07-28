import React, { useState } from "react";
import { router, Head, Link } from "@inertiajs/react";
import { IoArrowBackCircle } from "react-icons/io5";

const CardForm = ({ roles }) => {
    const [nama, setNama] = useState("");
    const [roleId, setRoleId] = useState("");
    const [profilPict, setProfilPict] = useState(null);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("nama", nama);
        formData.append("role_id", roleId);
        formData.append("profil_pict", profilPict);

        router.post(route("card.store"), formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            onError: (errors) => {
                setErrors(errors);
            },
        });
    };

    return (
        <div>
            <div className="container mx-auto my-20">
                <Head title="Card" />
                <Link href="/" className="hover:text-gray-600">
                    <IoArrowBackCircle className="ml-14" size={50} />
                </Link>
                <h1 className="text-center font-bold text-4xl mb-8">
                    Add Card
                </h1>
                <div className=" mx-60 py-10 border border-spacing-10 border-black rounded bg-transparent">
                    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Attan Muhammad"
                                required=""
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="countries"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Select Role
                            </label>
                            <select
                                type="text"
                                value={roleId}
                                onChange={(e) => setRoleId(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected="">Choose a role</option>
                                {roles.map((item, i) => (
                                    <option key={i} value={item.id}>
                                        {item.role_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="countries"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Profil picture
                            </label>
                            <label className="block bg-gray-50 border border-gray-300 rounded-lg">
                                <input
                                    type="file"
                                    name="profilPict"
                                    onChange={(e) =>
                                        setProfilPict(e.target.files[0])
                                    }
                                    className="block w-full text-sm text-slate-500
file:mr-4 file:py-2 file:px-4
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-black file:text-white
hover:file:bg-gray-300
    "
                                />
                            </label>
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="text-white bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Display form errors */}
            {Object.keys(errors).length > 0 && (
                <div>
                    <h2>Form Errors:</h2>
                    <ul>
                        {Object.keys(errors).map((key) => (
                            <li key={key}>{errors[key]}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CardForm;
