import { IProject } from "@/types";
import ManageProjectModal from "./ManageProjectModal";
import { NMTable } from "../ui/core/NMTable";
import Image from "next/image";
import { Trash } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

type TProjectsProps={
    projects:IProject[]
}

const ManageProductFunc = ({projects}:TProjectsProps) => {

    const handleDelete=()=>{

    }

       const columns: ColumnDef<IProject>[] = [
{
  accessorKey: "name",
  header: () => (
    <div className="text-[#6C63FF] font-medium">Skill & Name</div>
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
    accessorKey: "category",
    header: () => <div className="text-[#6C63FF] font-medium">Category</div>,
    cell: ({ row }) => <span>{row.original.liveLink}</span>,
  },
  {
    accessorKey: "area",
    header: () => <div className="text-[#6C63FF] font-medium">Area</div>,
    cell: ({ row }) => <span>{row.original.technologies}</span>,
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
    cell: () => (
      <button
        className="text-red-500 hover:text-red-700 transition-colors"
        title="Delete"
        onClick={() => handleDelete()}
      >
        <Trash className="w-5 h-5" />
      </button>
    ),
  },
]

    return (
        <div>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-center text-[#6C63FF]"> Manage Projects<span className="text-white"> Me</span> 
             </h2>
            <ManageProjectModal/>
            </div>
            <NMTable data={projects} columns={columns} />
        </div>
    );
};

export default ManageProductFunc;