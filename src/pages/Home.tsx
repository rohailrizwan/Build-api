import axios from 'axios'
import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import Post from './Post';
export default function Home() {
    type def={
        name:string,
        email:string,
        id:number
    }
    const [apidata,getdata]=useState<def[]>([])
    let api="https://jsonplaceholder.typicode.com/comments"

    let render=()=>{
        axios.get(api).then((res)=>{
            getdata(res.data)
        })
        .catch((err)=>{
           alert(err)
        })
    }
    useEffect(() => {

      return () => {
      render()
      }
    }, [])
    
    let styles={
        border:"1px solid black",
        color:"red"
    }
    const navigate=useNavigate()

    let postpage=(id:number)=>{
        navigate(`./Post/${id}`)
    }
    
    let Deletepost=(id:number)=>{
        axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        console.log("Post Deleted Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
    }
       
  return (
    <div>
      <div className='container'>
            {
                apidata.map((x,i)=>{
                    return(
                        <div className='my-2 px-5 py-2 ' key={i} style={styles}>
                            <h5>Title : {x.name}</h5>
                            <p>Email : {x.email}</p>
                            <button className='btn btn-primary mx-1' onClick={() => postpage(x.id)}>Edit</button>
                            <button className='btn btn-primary' onClick={() => Deletepost}>delete</button>
                        </div>
                    )
                })
            }
            
      </div>
    </div>
  )
}
