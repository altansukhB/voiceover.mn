import client from "./sanity";


export const getAllPosts = async () =>{
    const posts = await client.fetch(`*[_type=="post"]{'audio':AudioFile.asset->url,names,'gender':Gender->title,'age':age->title,'lang':publisher->title,Level,date,}`)

    return posts;
};