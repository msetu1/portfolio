"use client"
import DeleteConfirmationModal from "@/components/ui/core/NMModal/DeleteConfirmationModal";
import { NMTable } from "@/components/ui/core/NMTable";
import { IEducation } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import ManageEducationModal from "./ManageEducationModal";
import { Eye, Pencil, Trash } from "lucide-react";
import { deleteEducation } from "@/services/educations";
import { toast } from "sonner";
import { useState } from "react";

type TEducationsProps={
    educations:IEducation[]
}

const ManageEducations = ({educations}:TEducationsProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
    

    const handleView = (education) => {
  console.log('View education:', education);
  // Optionally open a modal or navigate to detail page
};

const handleEdit = (education) => {
  console.log('Edit education:', education);
  // Open edit modal or navigate to edit form
};

// delete skills
    const handleDelete = (data: IEducation) => {
    console.log(data?._id);
    setSelectedId(data?._id);
    setSelectedItem(data?.title);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteEducation(selectedId);
        console.log(res);
        if (res.success) {
          toast.success(res.message);
          setModalOpen(false);
        } else {
          toast.error(res.message);
        }
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err?.message);
    }
  };

    const columns: ColumnDef<IEducation>[] = [
  {
    accessorKey: "institute",
    header: () => <div className="text-[#6C63FF] font-medium">Institute</div>,
    cell: ({ row }) => <span className="font-semibold">{row.original.institute}</span>,
  },
  {
    accessorKey: "degree",
    header: () => <div className="text-[#6C63FF] font-medium">Degree</div>,
    cell: ({ row }) => <span>{row.original.degree}</span>,
  },
  {
    accessorKey: "status",
    header: () => <div className="text-[#6C63FF] font-medium">Status</div>,
    cell: ({ row }) => (
      <span
        className={`text-xs px-2 py-1 rounded ${
          row.original.status === 'Completed'
            ? 'bg-green-100 text-green-600 border border-green-300'
            : 'bg-yellow-100 text-yellow-600 border border-yellow-300'
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: "duration",
    header: () => <div className="text-[#6C63FF] font-medium">Duration</div>,
    cell: ({ row }) => <span>{row.original.duration}</span>,
  },
  {
    accessorKey: "action",
    header: () => <div className="text-[#6C63FF] font-medium">Action</div>,
    cell: ({ row }) => {
      const data = row.original;
      return (
        <div className="flex items-center gap-3">
          <button
            className="text-blue-500 hover:text-blue-700"
            title="View"
            onClick={() => handleView(data)}
          >
            <Eye className="w-5 h-5" />
          </button>
          <button
            className="text-green-500 hover:text-green-700"
            title="Edit"
            onClick={() => handleEdit(data)}
          >
            <Pencil className="w-5 h-5" />
          </button>
          <button
            className="text-red-500 hover:text-red-700"
            title="Delete"
            onClick={() => handleDelete(data)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      );
    },
  },
];

    return (
        <div>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-center text-[#6C63FF]"> Manage Educations 
             </h2>
            <ManageEducationModal/>
            </div>
            <NMTable data={educations} columns={columns} />
              <DeleteConfirmationModal
                name={selectedItem}
                isOpen={isModalOpen}
                onOpenChange={setModalOpen}
                onConfirm={handleDeleteConfirm}
              />
        </div>
    );
};

export default ManageEducations;