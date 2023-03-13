import { Types } from "mongoose";
import { Subject } from "../interfaces/subject.interface";
import SubjectModel from "../models/subject";
import UserModel from "../models/user";

const insertSubject=async(item:Subject)=>{
    const responseInsert=await SubjectModel.create(item);
    return responseInsert;
};

const getSubjects=async()=>{
    const responseItem=await SubjectModel.find({}).populate('users');
    return responseItem;
};

const getSubject=async(id:string)=>{
    const responseItem=await SubjectModel.findOne({_id:id}).populate('users');
    return responseItem;
};

const updateSubject=async(id:string,data:Subject)=>{
    const responseItem=await SubjectModel.findOneAndUpdate(
        {_id:id},
        data,
        {
            new:true,
        }
    ).populate('users');
    return responseItem;
};

const deleteSubject=async(id:string)=>{
    const responseItem=await SubjectModel.deleteOne({_id:id});
    return responseItem;
}

const matriculateSubject=async(idUser:string,idSubject:string)=>{
    const responseItem = await SubjectModel.findOneAndUpdate(
        {_id:idSubject},
        {$addToSet: {users: new Types.ObjectId(idUser)}},
        {new: true}
    ).populate('users');
    console.log(responseItem?.users);
    return responseItem;
};
/*const subjectsOfAUser = async (idUser:string,idSubject:string) => {
    const responseItem = await SubjectModel.findOne(
        {_id:idSubject},
        {}
    )
}*/

const getUsersInSubject = async (idSubject:string) => {
    const responseItem=await SubjectModel.findById(idSubject).populate('users');
    return responseItem?.users;
};


const getSubjectsOfAnUser = async (idUser:string) => {
    const responseItem=await SubjectModel.find({ users: idUser }).populate('users');
    return responseItem;
  }






export { insertSubject, getSubject, getSubjects, updateSubject, deleteSubject, matriculateSubject, getUsersInSubject, getSubjectsOfAnUser};
