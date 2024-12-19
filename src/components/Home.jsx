import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

const Home = ({ open, setOpen }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        email: "",
        aadhaar: "",
        pan: "",
        bank: "",
        ifsc: "",
        aadhaarphoto: null,
        panphoto: null,
        bankphoto: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData({ ...formData, [name]: files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const res = await axios.post("https://vacompanybackend.onrender.com/api/v1/user/register", formDataToSend, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            toast.success(res.data.message);

            if(res.data.message === "Existing employee updated successfully."){
                navigate("/welcomeback")
            }else{
                navigate("/success")
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"
            >
                <h2 className="text-2xl font-bold mb-4">User Information Form</h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="firstname">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="lastname">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="aadhaar">
                        Aadhaar Number
                    </label>
                    <input
                        type="text"
                        id="aadhaar"
                        name="aadhaar"
                        value={formData.aadhaar}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="pan">
                        PAN Number
                    </label>
                    <input
                        type="text"
                        id="pan"
                        name="pan"
                        value={formData.pan}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="bank">
                        Bank Account Number
                    </label>
                    <input
                        type="text"
                        id="bank"
                        name="bank"
                        value={formData.bank}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="ifsc">
                        IFSC Code
                    </label>
                    <input
                        type="text"
                        id="ifsc"
                        name="ifsc"
                        value={formData.ifsc}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="aadhaarphoto">
                        Aadhaar Photo
                    </label>
                    <input
                        type="file"
                        id="aadhaarphoto"
                        name="aadhaarphoto"
                        onChange={handleFileChange}
                        className="w-full"
                        accept="image/*"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="panphoto">
                        PAN Photo
                    </label>
                    <input
                        type="file"
                        id="panphoto"
                        name="panphoto"
                        onChange={handleFileChange}
                        className="w-full"
                        accept="image/*"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1" htmlFor="bankphoto">
                        Bank Passbook Photo
                    </label>
                    <input
                        type="file"
                        id="bankphoto"
                        name="bankphoto"
                        onChange={handleFileChange}
                        className="w-full"
                        accept="image/*"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Home