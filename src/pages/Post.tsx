import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

export default function Post() {
    const param = useParams()

    type def={
        name:string,
        email:string
    }

    const api = `https://jsonplaceholder.typicode.com/comments/${param.id}`;

    const [apidata, getdata] = useState<any>({});

    let render=()=>{
        axios.get(api).then((res)=>{
            getdata(res.data)
        })
        .catch((err)=>{
            alert(err)
        })
    }

    useEffect(() => {
        if (param.id) {
          render();
        }
      }, []);
    
    const updatePost = () => {
        axios
          .put(api, apidata)
          .then((res) => {
            console.log("Post Updated Successfully ==>",res.data);
          })
          .catch((err) => {
           alert(err);
          });
      };
      const submitPost = () => {
        axios
          .post(api, apidata)
          .then((res) => {
            console.log("Post Updated Successfully ==>", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <div>
        
      <div className='container'>
        <h1>Add Project</h1>
        <div className="p-2">

          <div className='mb-2'>
            <h2 className='mb-3'>Name :</h2>
            <input type="text" value={apidata.name} style={{width:"300px"}}  onChange={(e) => getdata({ ...apidata, name: e.target.value })}/>
          </div>
          
          <div>
          <textarea value={apidata.email} style={{width:"300px"}} onChange={(e) => getdata({ ...apidata, email: e.target.value })}>

            </textarea>
          </div>
            
          <div>
            {param.id ? (
              <button onClick={updatePost} className='btn btn-primary my-2'>
                Update
              </button>
            ) : (
              <button onClick={submitPost} className='btn btn-primary'>
                Submit
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
    
  )
}
