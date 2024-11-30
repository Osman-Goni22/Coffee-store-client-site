import { useLoaderData } from "react-router-dom";
import SingleCoffe from "./SingleCoffe";

const Coffee = () => {

    const allCoffee = useLoaderData();
    // console.log(allCoffee.length);
    return (
        <div className="max-w-6xl mx-auto ">
            <h2 className="text-center text-2xl text-orange-700">This is the Coffee card</h2>
           <div className="grid grid-cols-3 gap-5">
           {
                allCoffee.map(coffee=><SingleCoffe key={coffee._id} coffee={coffee}></SingleCoffe>)
            }
           </div>
        </div>
    );
};

export default Coffee;