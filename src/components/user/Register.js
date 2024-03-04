import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="flex flex-col mx-auto max-w-md p-6 rounded-md sm:p-10">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign up</h1>
            </div>
            <form noValidate="" action="" className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        <p className='text-gray-400 text-sm mt-1'>We wont share your email with anyone else.</p>
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                        </div>
                        <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                        <p className='text-gray-400 text-sm mt-1'>Choose strong password.</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900">Sign up</button>
                    </div>
                    <p className="px-6 text-sm text-center dark:text-gray-400">Already user?
                        <Link rel="noopener noreferrer" to='/user/login' className="hover:underline dark:text-violet-400"> Sign In</Link>.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;