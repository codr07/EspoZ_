import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Blog from "../models/Blog.js";

export const addBlog = async (req , res)=>{
    try {
        const {title,subTitle,description,category, isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;

        if(!title || !description || !category || !imageFile) {
            return req.JSON({success: false,message: "Missing Required File"});
        }

        const fileBuffer = fs.readFileSync(imageFile.path);

        //upload image
        const res = await imagekit.upload({
            file : fileBuffer,
            fileName : imageFile.originalname,
            folder : "/blogs",
        })
        //optimise image
        const optimizedImageUrl = imagekit.url({
            path:response.filePath,
            transformation : [
                {quality:'auto'},
                {format:'webp'},
                {width:'1280'}
            ]
        });

        const image = optimizedImageUrl;

        await Blog.create({title,subTitle,description,category,image,isPublished})

        res.json({success: true,message:"Blog Added Succesfully"})
        

    } catch (error) {
        res.json({success: true,message: error.message})
    
    }
}