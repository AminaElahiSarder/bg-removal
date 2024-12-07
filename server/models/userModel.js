import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    clerkId: {type: string, require:true, unique:true},
    email: {type: string, require:true, unique:true},
    photo: {type: string, require:true},
    firstName: {type: string},
    lastName: {type: string},
    creditBalance: {type: Number, default: 5}
})

const userModel = mongoose.model.user || mongoose.model("user", userSchema)

export default userModel;