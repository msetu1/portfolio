import ManageProjectModal from "./ManageProjectModal";

const ManageProductFunc = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-bold text-center text-[#6C63FF]"> Manage Projects<span className="text-white"> Me</span> 
             </h2>
            <ManageProjectModal/>
            </div>
        </div>
    );
};

export default ManageProductFunc;