import User from "../models/user.js";
import cloudinary from "./cloudinaryConfig.js";

const infoToUpdate = async (req) => {
    let object = {};
    if (req.file) {

        for (let i in req.body) {
            object[i] = await req.body[i];
        }

        await cloudinary.uploader.destroy(req.body.cloudinaryId)
            .then(r => console.log(r))
            .catch(err => console.log(err))

        await cloudinary.uploader.upload(req.file.path)
            .then(r => {
                    object["image"] = r.secure_url;
                    object["cloudinaryId"] = r.public_id;
                }
            )
            .catch(err => console.log(err));
        return object;
    } else {
        for (let i in req.body) {
            object[i] = await req.body[i];
        }
        return object;
    }
};

export {infoToUpdate};
