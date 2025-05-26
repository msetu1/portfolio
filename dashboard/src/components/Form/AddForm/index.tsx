/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ISkill } from "@/types";
import AddSkillForm from "./AddSkillForm";
import { NMTable } from "@/components/ui/core/NMTable";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { deleteSkill } from "@/services/Skills";
import { toast } from "sonner";
import DeleteConfirmationModal from "@/components/ui/core/NMModal/DeleteConfirmationModal";

type TSkillsProps={
    skills:ISkill[]
}

const SkillCategory = ({skills}:TSkillsProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);


    // delete skills
    const handleDelete = (data: ISkill) => {
    console.log(data?._id);
    setSelectedId(data?._id);
    setSelectedItem(data?.name);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteSkill(selectedId);
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


   const columns: ColumnDef<ISkill>[] = [
{
  accessorKey: "name",
  header: () => (
    <div className="text-[#6C63FF] font-medium">Skill & Name</div>
  ),
  cell: ({ row }) => (
    <div className="flex items-center space-x-3">
      {row.original.icon ? (
        <Image
          src={row.original.icon}
          alt={row.original.name}
          width={40}
          height={40}
          className="w-8 h-8 rounded-full border border-[#6C63FF]"
        />
      ) : (
        <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-xs text-gray-400">
          N/A
        </div>
      )}
      <span className="font-semibold">{row.original.name}</span>
    </div>
  ),
},
  {
    accessorKey: "category",
    header: () => <div className="text-[#6C63FF] font-medium">Category</div>,
    cell: ({ row }) => <span>{row.original.category}</span>,
  },
  {
    accessorKey: "area",
    header: () => <div className="text-[#6C63FF] font-medium">Area</div>,
    cell: ({ row }) => <span>{row.original.area}</span>,
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
    cell: ({row}) => (
      <button
        className="text-red-500 hover:text-red-700 transition-colors"
        title="Delete"
        onClick={() => handleDelete(row.original)}
      >
        <Trash className="w-5 h-5" />
      </button>
    ),
  },
]
    console.log(skills)
    return (
        <div>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-center text-[#6C63FF]">Manage Skills<span className="text-white"> Me</span> 
             </h2>
            <AddSkillForm/>
            </div>
            <NMTable data={skills} columns={columns} />
            <DeleteConfirmationModal
                name={selectedItem}
                isOpen={isModalOpen}
                onOpenChange={setModalOpen}
                onConfirm={handleDeleteConfirm}
            />
        </div>
    );
};

export default SkillCategory;