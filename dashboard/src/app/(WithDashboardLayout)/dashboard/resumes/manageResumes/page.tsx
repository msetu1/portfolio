import ManageResumesFunc from "@/components/Modal/Resumes";
import { allResumes } from "@/services/resumes";

const ManageResumes = async() => {
    const {data}=await allResumes()
    return (
        <div>
            <ManageResumesFunc resumes={data} />
        </div>
    );
};

export default ManageResumes;