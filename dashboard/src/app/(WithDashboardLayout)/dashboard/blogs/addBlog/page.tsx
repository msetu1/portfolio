"use client"
import AddTextEditor from "@/components/TextEditor/AddTextEditor";
import { useState } from "react";

const AddBlog = () => {
    const [post,setPost]=useState("")

    const onChange=(content:string)=>{
        setPost(content)
    }
    return (
        <div className="max-w-3xl mx-auto">
            <AddTextEditor content={post} onChange={onChange} />
        </div>
    );
};

export default AddBlog;