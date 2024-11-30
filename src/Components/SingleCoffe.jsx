
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const SingleCoffe = ({ coffee }) => {
  const {_id, name, supplier, details, taste, quantity } = coffee;

  const handleDelete= (_id)=>{
    console.log(_id);

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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        },
      
        fetch(`http://localhost:3000/coffee/${_id}`,{
          method:'DELETE',
          headers:{
            'content-type': 'application/json',
          }
        })

        .then(res=>res.json())
        .then(data=>console.log(data))
      
      
      );
      }
    });

  }

  return (
    <div className="max-w-6xl flex justify-start">
      <div className="flex justify-between shadow-customShadow">
        <div className="  p-5 flex justify-between items-center gap-8">
          <div>
            <img src={coffee.photo} alt="" className="w-20 rounded-full" />
          </div>
          <div className="gap-2">
            <p>Name: {name}</p>
            <p>Supplier: {supplier}</p>
            <p>Details: {details}</p>
            <p>Teste: {taste}</p>
            <p>Quantity: {quantity}</p>
            {/* <p>{coffee.name}</p> */}
          </div>
        </div>

        <div>

        </div>
        <div className="join join-vertical space-y-4 p-3">
          <button className="btn join-item">Details</button>
          <Link to={`/coffee/${_id}`}><button className="btn join-item">Update</button></Link>
          <button onClick={()=>handleDelete(_id)} className="btn join-item">X</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffe;