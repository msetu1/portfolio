import ManageEducationsFunc from "@/components/Modal/Educations";
import { allEducations } from "@/services/educations";

const ManageEducations = async() => {
    const {data}=await allEducations()
    return (
        <div>
            <ManageEducationsFunc educations={data} />
        </div>
    );
};

export default ManageEducations;