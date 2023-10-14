"use client"

import { getXataClient } from "@/src/xata"
import { SubmitHandler, useForm } from "react-hook-form"
import { createNewRecord } from "./action"

type InputItem = {
    name: string,
    link: string
}
export default function Create() {
    const { register, handleSubmit, formState: { errors } } = useForm<InputItem>()

    const onSubmit: SubmitHandler<InputItem> = async (data) => {
        console.log(data)
        await createNewRecord(data)
        
        
    }
    return (
        <div className='w-screen h-screen'>
            <h1>
                Create New Record
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name of the Light Novel:</label>
                    <input
                        type="text"
                        id="name"
                        {...register("name", { required: true })}
                        className="border rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                    />
                    {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="link" className="block text-gray-700 font-bold mb-2">Download Link:</label>
                    <input
                        type="text"
                        id="link"
                        {...register("link", { 
                            required: true})}
                        className="border rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                    />
                    {errors.link && errors.link.type == 'required' && <span className="text-red-500 text-sm">This field is required</span>}
                    {errors.link && errors.link.type == 'pattern' && <span className="text-red-500 text-sm">Input Must be valid url</span>}
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                >
                    Add
                </button>
            </form>


        </div>

    )
}