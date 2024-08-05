// import React from 'react'

type Props = {
    name?: string;
    image?: string;
    title?: string;
    description?: string;
}
export default function CandidatesAppliedCard({ name, image, title, description }: Props) {
    return (

        <div className="m-4 p-4 rounded-lg shadow-md flex items-center justify-between bg-white pl-10 py-5">
            <div>
                <h1 className="text-[20px] font-semibold  text-gray-700 mb-5">{name || "Candidate Name"}</h1>
                <div className="flex items-center">
                    <div className="w-16 h-16 bg-gray-300 rounded mr-4">
                        {image && false}{/* <img src={image} alt={title} className="w-full h-full object-cover rounded" /> */}
                    </div>
                    <div>   
                        <h2 className="text-[20px] font-semibold text-gray-800">{title || "Lorem ipsum"}</h2>
                        <span className="text-gray-500 text-sm">{description || "Lorem ipsum dolor sit amet"}</span>
                    </div>
                </div>
            </div>
            <button className="bg-signup text-white font-semibold py-2 px-6 rounded shadow translate-y-6 w-[200px] h-[54px]">
                View Details
            </button>
        </div>

    )
}
