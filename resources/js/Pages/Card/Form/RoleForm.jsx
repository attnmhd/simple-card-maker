import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { IoArrowBackCircle } from "react-icons/io5";

export default function RoleForm({ roles }) {
    const currentUrl = usePage().url;
    console.log(currentUrl);
    const { data, setData } = useForm({
        role_name: roles.role_name,
    });

    const handleChange = (e) => {
        setData({
            ...data,
            role_name: e.target.value,
        });
    };

    const addRole = (e) => {
        e.preventDefault();

        router.post("/role", {
            role_name: data.role_name,
        });

        setData({
            role_name: "",
        });
    };

    const updateRole = (e) => {
        e.preventDefault();

        console.log(data);
        router.post(`/role/${roles.id}/edit`, {
            _method: "patch",
            role_name: data.role_name,
        });
    };

    return (
        <div className="container mx-auto my-20">
            <Head title="Role" />
            <Link href="/" className="hover:text-gray-600">
                <IoArrowBackCircle className="ml-14" size={50} />
            </Link>
            <h1 className="text-center font-bold text-4xl mb-8">Add Role</h1>
            <div className=" mx-60 py-10 border border-spacing-10 border-black rounded bg-transparent">
                <form
                    className="max-w-sm mx-auto"
                    onSubmit={currentUrl == "/role" ? addRole : updateRole}
                >
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Role Name
                        </label>
                        <input
                            type="text"
                            id="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Mahasiswa"
                            required=""
                            value={data.role_name}
                            onChange={handleChange}
                        />
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
    );
}
