
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const updateCoffee=  useLoaderData();
    const {_id,name, quantity, supplier, taste, details, photo , category }= updateCoffee;
   console.log(updateCoffee);
    const handleUpdatedCoffee=(event)=>{
        event.preventDefault();
        const form = event.target;
        const name =form.name.value;
        const quantity =form.quantity.value;
        const supplier =form.supplier.value;
        const taste =form.taste.value;
        const details =form.details.value;
        const photo =form.photo.value;
        const category =form.category.value;

       const updatedCoffee={
        _id,
        name, 
        quantity,
        supplier,
        taste,
        details,
        photo,
        category
       };

       console.log(updatedCoffee);


       fetch(`http://localhost:3000/update/${_id}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(updatedCoffee)
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        if(data.modifiedCount){
            Swal.fire({
                title:"Successfully updated",
                text:'Successfully updated',
                icon:'success',
                confirmButtonText:'Cool',
            })
        }
       })


    }

   
    return (
        <div className="bg-[#F4F3F0] p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl text-center font-bold">This is AddCoffee components</h2>
        <form onSubmit={handleUpdatedCoffee} >
            <div className="md:w-1/2 mx-auto md:grid grid-cols-2 justify-between gap-4">
                <div className="">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Name:</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={name} type='text' name="name" className="input input-bordered w-full " placeholder="Name" />
                    </label>

                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Quantity:</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={quantity} type='text' name='quantity' className="input input-bordered w-full" placeholder="Quantity" />
                    </label>

                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text text-lg font-semibold w-full">Supplier</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={supplier} type='text' name="supplier" className="input input-bordered w-full" placeholder="Supplier Name" />
                    </label>

                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Taste:</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={taste} type='text' name="taste" className="input input-bordered w-full" placeholder="Taste" />
                    </label>

                </div>

                <div className="">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Category:</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={category} type='text' name="category" className="input input-bordered w-full" placeholder="Category" />
                    </label>

                </div>
                <div className="">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Details:</span>
                    </label>
                    <label className="input-group">
                        <input defaultValue={details} type='text' name="details" className="input input-bordered w-full " placeholder="Details" />
                    </label>

                </div>
                <div className="col-span-2">
                    <label className="label">
                        <span className="text text-lg font-semibold">Photo URL:</span>
                    </label>
                    <label className="w-full">
                        <input defaultValue={photo} type='text' name="photo" className="  input input-bordered w-full" placeholder="Photo URL" />
                    </label>

                   
                </div>

              
               <div className="col-span-2">
               <input className="w-full bg-purple-700 input input-bordered mt-3" type="submit" value="Update Coffee" />
               </div>
            
            </div>
        </form>
    </div>
    );
};

export default UpdateCoffee;