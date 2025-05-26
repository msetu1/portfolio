/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { NMTable } from "@/components/ui/core/NMTable";
import ManageResumesModal from "./ManageResumesModal";
import DeleteConfirmationModal from "@/components/ui/core/NMModal/DeleteConfirmationModal";
import {Pencil, Trash } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { IResume } from "@/types";
import { useState } from "react";
import { deleteResume } from "@/services/resumes";
import { toast } from "sonner";



type TResumesProps={
    resumes:IResume[]
}

const ManageResumesFunc = ({resumes}:TResumesProps) => {
      const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  

const handleEdit = (resume) => {
  console.log('Edit resume:', resume);
  // Open edit modal or navigate to edit form
};

// delete skills
    const handleDelete = (data: IResume) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.url);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteResume(selectedId);
        console.log(res);
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
     


       const columns: ColumnDef<IResume>[] = [
{
    accessorKey: "url",
    header: () => <div className="text-[#6C63FF] font-medium">Resume URL</div>,
    cell: ({ row }) => <span>{row.original.url}</span>,
  },
{
  accessorKey: "action",
  header: () => <div className="text-[#6C63FF] font-medium">Action</div>,
  cell: ({ row }) => {
    const data = row.original;

    return (
      <div className="flex items-center gap-3">
        {/* Edit Button */}
        <button
          className="text-green-500 hover:text-green-700 transition-colors"
          title="Edit"
          onClick={() => handleEdit(data)}
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
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-center text-[#6C63FF]"> Manage Resumes
             </h2>
            <ManageResumesModal/>
            </div>
            <NMTable data={resumes} columns={columns} />
              <DeleteConfirmationModal
                name={selectedItem}
                isOpen={isModalOpen}
                onOpenChange={setModalOpen}
                onConfirm={handleDeleteConfirm}
              />
        </div>
    );
};

export default ManageResumesFunc;