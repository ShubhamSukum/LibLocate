import React, { useState } from 'react';
import axios from 'axios';
import Filebase from "react-file-base64";

import "./home.css";

export const Home = () => {
    const [account, setAccount] = useState('novone2020');
    const [postData, setPostData] = useState({
        title:"",
        description:"",
        image:"",
        account:""
    });

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log({...postData,account})
        await axios.post("http://localhost:3001/pict0/createPost",{...postData,account}).
        then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.error(err);
        })
    }
    
    
    return (
        <div className="home-screen">
            <div className="home-post-area">
                {/* {
                    postData.map((data, index) => (
                        <div key={index}>
                            <img src={data.image} alt={data.title} height={"100vh"} width={"100vh"}/>
                            <p>{data.title}</p>
                            <p>{data.description}</p>
                            <p>{data.account}</p>
                        </div>
                    ))
                } */}
            </div>

            <div className="home-share-area">
                <h3 style={{ color: "white", marginTop: "1vh" }}>SHARE</h3>
                <hr />
                <form className="form-adjust form-control" onSubmit={handleSubmit}>

                    <h4 style={{ color: "white" }}>Title</h4>
                    <input type="text" placeholder="Post title" className="post-title home-inputs"
                     onChange={(e) => setPostData({...postData,title:e.target.value})} />

                    <h4 style={{ color: "white" }}>Description</h4>
                    <textarea  type="text" placeholder="Post Description" className="post-description home-inputs"
                     onChange={(e) => setPostData({...postData,description:e.target.value})} />

                    <center>
                        <div className='file-button btn btn-dark'>
                            <Filebase
                                type="file"
                                multiple={false}
                                accept="image/*"
                                onDone={({base64})=>setPostData({...postData,image:base64})}
                            />
                        </div>
                    </center>

                    <button type="submit" className="btn btn-light" >Submit</button>

                </form>
            </div>
        </div>
    );
};




// const arrayBufferToBase64 = (buffer, mimeType) => {
    //     console.log(buffer)
    //     let binary = '';
    //     let bytes = new Uint8Array(buffer.data);
    //     let len = bytes.byteLength;
    //     for (let i = 0; i < len; i++) {
    //     binary += String.fromCharCode(bytes[i]);
    //     }   
    //     return binary.toString("base64")
    // }

    // useEffect(() => {
    //     axios.get("http://localhost:3001/pict0/getPost").
    //         then((res) => {
    //             setPostData(
    //                 res.data.data.map(val => {
    //                     console.log(val)
    //                     return {
    //                         ...val,
    //                         image: arrayBufferToBase64(res.data.data[0].image.data, res.data.data[0].image.contentType)
    //                     }
    //                 }),
    //             );
    //             console.log(postData[0].image)
    //             // console.log(arrayBufferToBase64(res.data.data[0].image.data))
    //         }).catch((err) => {
    //             console.error(err);
    //         });
    // }, []);

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];

    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (event) => {
    //             setImage(event.target.result);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     const formData = new FormData();
    //     formData.append('title', title);
    //     formData.append('description', description);
    
    //     if (image) {
    //         const imageBlob = new Blob([image], { type: 'image/jpeg' }); // Adjust the MIME type accordingly
    //         formData.append('image', imageBlob);
    //     }
    
    //     formData.append('account', account);
    
    //     try {
    //         await axios.post('http://localhost:3001/pict0/createPost', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });
    //         console.log('Post created successfully');
    //         // Reset form fields if needed
    //     } catch (error) {
    //         console.error('Error creating post:', error);
    //     }
    // };