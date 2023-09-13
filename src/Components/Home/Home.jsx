import { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import Swal from "sweetalert2/src/sweetalert2.js";

const Home = () => {

    const [actors, setActors] = useState([])
    const [selectedActors, setSelectedActors] = useState([])
    const [remaining, setRemaining] = useState(0);
    const [totalCost, setTotalcost] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActors(data))
    }, [])


    const selectActor = (actor) => {
        const isexist = selectedActors.find((item) => item.id == actor.id)
        // console.log(isexist)

        let count = actor.salary;

        if (isexist) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        } else {

            selectedActors.forEach(item => {
                count = count + (item.salary)
            })

            const totalRemaining = 20000 - count
            if (count > 20000) {
                return alert('Budget fail')
            } else {
                setTotalcost(count)
                setRemaining(totalRemaining)
                setSelectedActors([...selectedActors, actor])
            }

        }
    }
    // console.log(selectedActors)
    return (
        <div>
            <div className="flex justify-evenly">
                <div className="flex flex-wrap gap-4">
                    {
                        actors.map((actor) => (
                            // eslint-disable-next-line react/jsx-key
                            <div key={actor.id} className="w-64 h-72 border-2 border-teal-200">
                                <div className="ml-20">
                                    <img className="w-20 rounded-full" src={actor.image} alt="" />
                                </div>
                                <h2>{actor.name}</h2>
                                <p><small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, nostrum.</small></p>
                                <div className="flex justify-evenly">
                                    <p>salary: {actor.salary} $</p>
                                    <p>Writer {actor.role}</p>
                                </div>
                                <button onClick={() => selectActor(actor)} className="bg-amber-600">Select</button>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <Cart selectedActors={selectedActors} remaining={remaining} totalCost={totalCost}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;