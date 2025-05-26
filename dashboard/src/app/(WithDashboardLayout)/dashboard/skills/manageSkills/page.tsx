import SkillCategory from "@/components/Form/AddForm";
import { allSkills } from "@/services/Skills";

const ManageSkills = async() => {
    const {data}=await allSkills()
    return (
        <div>
            <SkillCategory skills={data} />
        </div>
    );
};

export default ManageSkills;