import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee= event=>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const supplier= form.supplier.value;
        const quantity= form.quantity.value;
        const taste= form.taste.value;
        const category= form.category.value;
        const details= form.details.value;
        const photo= form.photo.value;

        const newCoffee={name, supplier, quantity, taste,category,details,photo};
        console.log(newCoffee);

        fetch('http://localhost:3000/coffee', {
            method:'POST',
            headers:{
                'content-type': 'application/json',
            },
            body:JSON.stringify(newCoffee),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'added coffee successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className="bg-[#F4F3F0] p-6 max-w-6xl mx-auto">
            <h2 className="text-2xl text-center font-bold">This is AddCoffee components</h2>
            <form onSubmit={handleAddCoffee}>
                <div className="md:w-1/2 mx-auto md:grid grid-cols-2 justify-between gap-4">
                    <div className="">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Name:</span>
                        </label>
                        <label className="input-group">
                            <input type='text' name="name" className="input input-bordered w-full " placeholder="Name" />
                        </label>

                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Quantity:</span>
                        </label>
                        <label className="input-group">
                            <input type='text' name='quantity' className="input input-bordered w-full" placeholder="Quantity" />
                        </label>

                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text text-lg font-semibold w-full">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type='text' name="supplier" className="input input-bordered w-full" placeholder="Supplier Name" />
                        </label>

                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Taste:</span>
                        </label>
                        <label className="input-group">
                            <input type='text' name="taste" className="input input-bordered w-full" placeholder="Taste" />
                        </label>

                    </div>

                    <div className="">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Category:</span>
                        </label>
                        <label className="input-group">
                            <input type='text' name="category" className="input input-bordered w-full" placeholder="Category" />
                        </label>

                    </div>
                    <div className="">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Details:</span>
                        </label>
                        <label className="input-group">
                            <input type='text' name="details" className="input input-bordered w-full " placeholder="Details" />
                        </label>

                    </div>
                    <div className="col-span-2">
                        <label className="label">
                            <span className="text text-lg font-semibold">Photo URL:</span>
                        </label>
                        <label className="w-full">
                            <input type='text' name="photo" className="  input input-bordered w-full" placeholder="Photo URL" />
                        </label>

                       
                    </div>

                  
                   <div className="col-span-2">
                   <input className="w-full bg-purple-700 input input-bordered mt-3" type="submit" value="Add Coffee" />
                   </div>
                
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;