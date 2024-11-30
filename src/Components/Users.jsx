import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {

    const handleDelete = _id=>{
        console.log(_id)


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             
               
              fetch(`http://localhost:3000/users/${_id}`, {
                method:'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                const remainingUsers =users.filter(user=>user._id !==_id);
                setUsers(remainingUsers)
            })

            }
          });

       
    }

    const loadedUsers = useLoaderData();
    const [users, setUsers]= useState(loadedUsers)
    return (
        <div>
            <h2 className="text-2xl text-center">Users {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Favorite Color</th>
        <th>Last login at</th>
         <th >Action</th>
      </tr>
    </thead>
    <tbody>
      
     
     {
        users.map(user=><tr key={user._id}>
            <th>1</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.creationTime}</td>
            <td>{user.lastSignInTime}</td>
            <td className="btn">Edit</td>
            <td onClick={()=>handleDelete(user._id)} className="btn">Delete</td>
          </tr>)
     }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;