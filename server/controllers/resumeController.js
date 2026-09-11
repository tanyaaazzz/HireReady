import Resume from "../models/Resume";

// controller for creating a new resume
// POST: /api/resumes/
export const createResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { title } = req.body;

        // create new resume
        const newResume = await Resume.create({userId,title})
        //return success msg
        return res.status(201).json({message: 'Resume Created Successfully!',resume:newResume})

    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}
//controller for deleting resume
//DELETE:/ap/resumes/delete
// controller for deleting resume
// DELETE: /api/resumes/delete
export const deleteResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId } = req.params;

        await Resume.findOneAndDelete({ userId, _id: resumeId });

        // return success msg
        return res.status(200).json({
            message: 'Resume Deleted Successfully!'
        });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

//get user resume by id
//GET :/ap/resumes/get
export const getResumeById = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId } = req.params;

        const resume =await Resume.findOne({userId, _id: resumeId })
        if(!resume){
            return  res.status(404).json({ message:  "Resume not found!"});
        }
        resume.__v=undefined;
        resume.createdAt=undefined;
        resume.updatedAt=undefined;
        return res.status(200).json({
            resume
        });

    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

//get resume by id public
//GET: /api/resumes/public
export const getPublicResumeById=async(req,res)=>{
    try{
        const {resumeId}=req.params;
        const resume=await Resume.findOne({public:true,_id:resumeId})
        if(!resume){
            return  res.status(404).json({ message:  "Resume not found!"});
        }return res.status(200).json({resume})
    } catch(error){
        return res.status(400).json({messa: error.message})
    }

}

// controller for updating a resume
// PUT : /api/resumes/update
export const updateResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId, resumeData, removeBackground } = req.body;
        const image = req.file;

        let resumeDataCopy = JSON.parse(resumeData);

        const resume = await Resume.findOneAndUpdate(
            { userId, _id: resumeId },
            resumeDataCopy,
            { new: true }
        );

        return res.status(200).json({
            message: 'Saved Successfully',
            resume
        });

    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
}

