import ManageProductFunc from "@/components/Modal";
import { allProjects } from "@/services/Projects";

const ManageProjects = async() => {
    const {data}=await allProjects()
    return (
        <div>
            <ManageProductFunc projects={data} />
        </div>
    );
};

export default ManageProjects;