/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IProject } from "@/types";
import ManageProjectModal from "./ManageProjectModal";
import { NMTable } from "../../ui/core/NMTable";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Trash, Eye, Pencil } from 'lucide-react';
import { useState } from "react";
import DeleteConfirmationModal from "../../ui/core/NMModal/DeleteConfirmationModal";
import { toast } from "sonner";
import { deleteProject } from "@/services/Projects";

type TProjectsProps={
    projects:IProject[]
}

const ManageProductFunc = ({projects}:TProjectsProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);


    

    const handleView = () => {
 
};

const handleEdit = () => {
 
};

// delete skills
    const handleDelete = (data: IProject) => {
    // console.log(data?._id);
    setSelectedId(data?._id);
    setSelectedItem(data?.title);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteProject(selectedId);
        // console.log(res);
        if (res.success) {
          toast.success(res.message);
          setModalOpen(false);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };
     


       const columns: ColumnDef<IProject>[] = [
{
  accessorKey: "Title",
  header: () => (
    <div className="text-[#6C63FF] font-medium">Image & Title</div>
  ),
  cell: ({ row }) => (
    <div className="flex items-center space-x-3">
      {row.original.thumbnail ? (
        <Image
          src={row.original.thumbnail}
          alt={row.original.title}
          width={40}
          height={40}
          className="w-8 h-8 rounded-full border border-[#6C63FF]"
        />
      ) : (
        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-400">
          N/A
        </div>
      )}
      <span className="font-semibold">{row.original.title}</span>
    </div>
  ),
},
{
    accessorKey: "technologies",
    header: () => <div className="text-[#6C63FF] font-medium">Technologies</div>,
    cell: ({ row }) => <span>{row.original.technologies}</span>,
  },
  {
  accessorKey: "liveLink",
  header: () => <div className="text-[#6C63FF] font-medium">Live Link</div>,
  cell: ({ row }) => {
   
    const link = row.original.liveLink;
    const displayText = expanded ? link : `${typeof link === 'string' &&link.slice(0, 15)}...`;

    return (
      <div className="flex flex-col">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {displayText}
        </a>
        {typeof link === 'string' &&link.length> 15 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs text-[#6C63FF] hover:underline self-start"
          >
            {expanded ? 'Back' : 'See More'}
          </button>
        )}
      </div>
    );
  },
},
  
  {
    accessorKey: "isAvailable",
    header: () => <div className="text-[#6C63FF] font-medium">Available</div>,
    cell: ({ row }) =>
      row.original.isAvailable ? (
        <p className="text-green-600 bg-green-100 border border-green-300 w-16 text-center px-2 py-1 rounded text-xs">
          Yes
        </p>
      ) : (
        <p className="text-red-600 bg-red-100 border border-red-300 w-16 text-center px-2 py-1 rounded text-xs">
          No
        </p>
      ),
  },
{
  accessorKey: "action",
  header: () => <div className="text-[#6C63FF] font-medium">Action</div>,
  cell: ({ row }) => {
    const data = row.original;

    return (
      <div className="flex items-center gap-3">
        {/* View Button */}
        <button
          className="text-blue-500 hover:text-blue-700 transition-colors"
          title="View"
          onClick={() => handleView()}
        >
          <Eye className="w-5 h-5" />
        </button>

        {/* Edit Button */}
        <button
          className="text-green-500 hover:text-green-700 transition-colors"
          title="Edit"
          onClick={() => handleEdit()}
        >
          <Pencil className="w-5 h-5" />
        </button>

        {/* Delete Button */}
        <button
          className="text-red-500 hover:text-red-700 transition-colors"
          title="Delete"
          onClick={() => handleDelete(data)}
        >
          <Trash className="w-5 h-5" />
        </button>
      </div>
    );
  },
}

        ]

    return (
        <div>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-center text-[#6C63FF]"> Manage Projects 
             </h2>
            <ManageProjectModal/>
            </div>
            <NMTable data={projects} columns={columns} />
              <DeleteConfirmationModal
                name={selectedItem}
                isOpen={isModalOpen}
                onOpenChange={setModalOpen}
                onConfirm={handleDeleteConfirm}
              />

        </div>
    );
};

export default ManageProductFunc;