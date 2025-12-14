import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function SignUp() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex flex-col gap-0 p-4 border-2 w-1/4 mx-auto mt-20 rounded-lg">
            <div className="text-center text-4xl font-bold">
                Sign Up
            </div>
            <div className="mb-6">
                <label className="block mb-2.5 text-sm font-medium text-heading">Username</label>
                <input type="text" className="bg-neutral-secondary-medium rounded-xl border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Username" required />
            </div>
            <div className="mb-6">
                <label className="block mb-2.5 text-sm font-medium text-heading">Email</label>
                <input type="email" className="bg-neutral-secondary-medium rounded-xl border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Email" required />
            </div>
            
            <div className="mb-6">
                <label className="block mb-2.5 text-sm font-medium text-heading">Password</label>
                <div className="flex gap-3">
                    <input type={showPassword? "text" : "password"} className="bg-neutral-secondary-medium rounded-xl border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
                    <button 
                        onClick={() => {
                            if(showPassword) setShowPassword(false)
                            else setShowPassword(true)
                        }} 
                        className="bg-gray-300 px-3 py-1 rounded-xl"
                    >
                        {showPassword? "hide" : "Show"}
                    </button>
                </div>
            </div>
            <div className="mb-6">
                <label className="block mb-2.5 text-sm font-medium text-heading">Confirm Password</label>
                <div className="flex gap-3">
                    <input type={showPassword? "text" : "password"} className="bg-neutral-secondary-medium rounded-xl border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required />
                    <button 
                        onClick={() => {
                            if(showPassword) setShowPassword(false)
                            else setShowPassword(true)
                        }} 
                        className="bg-gray-300 px-3 py-1 rounded-xl"
                    >
                        {showPassword? "hide" : "Show"}
                    </button>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-gray-300 px-6 py-2 text-lg rounded-2xl">Sign Up</button>
            </div>

            <div>
                <p className="text-center mt-4">
                    Alreday have an account? 
                    <button onClick={() => navigate('/')} className="text-blue-500 underline">
                        Sign In
                    </button>
                </p>
            </div>

        </div>
    )
}