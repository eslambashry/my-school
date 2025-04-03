import mongoose from "mongoose"

export const connectionDB = async() => {
    return await mongoose.connect(process.env.DB_URL)
    .then((res)  => console.log('Connected to DB'.green.bold.underline))
    .catch((err) => console.log('Connection Fail'.red.underline,err))
}