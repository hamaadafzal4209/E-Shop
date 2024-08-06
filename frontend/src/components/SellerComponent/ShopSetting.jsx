/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { backend_url, server } from "../../server";
import { AiOutlineCamera } from "react-icons/ai";
import axios from "axios";
import { loadSeller } from "../../redux/actions/user";
import { toast } from "react-toastify";

const ShopSetting = () => {
    const { seller } = useSelector((state) => state.seller);
    const [avatar, setAvatar] = useState();
    const [name, setName] = useState(seller && seller.name);
    const [description, setDescription] = useState(
        seller && seller.description ? seller.description : "",
    );
    const [address, setAddress] = useState(seller && seller.address);
    const [phoneNumber, setPhoneNumber] = useState(seller && seller.phoneNumber);
    const [zipCode, setZipcode] = useState(seller && seller.zipCode);

    const dispatch = useDispatch();

    const handleImage = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setAvatar(file);

        const formData = new FormData();

        formData.append("file", e.target.files[0]);

        await axios.put(
            `${server}/shop/update-shop-avatar`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            },
            { withCredentials: true },
        ).then(() =>
            dispatch(loadSeller());
        ).catch((error) => {
            toast.error(error.message);
        }) 
    };

    const updateHandler = async (e) => {
        e.preventDefault();

        await axios
            .put(
                `${server}/shop/update-seller-info`,
                {
                    name,
                    address,
                    zipCode,
                    phoneNumber,
                    description,
                },
                { withCredentials: true },
            )
            .then(() => {
                toast.success("Shop info updated succesfully!");
                dispatch(loadSeller());
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    return (
        <div className="flex min-h-screen w-full flex-col items-center bg-gray-100 p-4">
            <div className="mt-5 w-full rounded-lg bg-white p-8 shadow-md lg:w-3/4">
                <div className="mb-6 flex w-full items-center justify-center">
                    <div className="relative">
                        <img
                            src={
                                avatar
                                    ? URL.createObjectURL(avatar)
                                    : `${backend_url}/${seller?.avatar}`
                            }
                            alt="Shop Avatar"
                            className="h-32 w-32 rounded-full border-2 border-gray-300 object-cover"
                        />
                        <div className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-gray-800 p-1 text-white">
                            <input
                                type="file"
                                id="image"
                                className="hidden"
                                onChange={handleImage}
                            />
                            <label htmlFor="image">
                                <AiOutlineCamera size={20} />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Shop info */}
                <form className="space-y-6" onSubmit={updateHandler}>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Shop Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Shop Description
                        </label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Shop Address
                        </label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Shop Phone Number
                        </label>
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                            Shop Zip Code
                        </label>
                        <input
                            type="text"
                            value={zipCode}
                            onChange={(e) => setZipcode(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Update Shop
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ShopSetting;
