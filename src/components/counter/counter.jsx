import Manipulator from "./manipulator.jsx"
export default function Counter() {

    const data = effect({count:0});

    return (
        <div>
            <div class="title" effect={data}>Count is: {()=> data.count}</div>
            <Manipulator data={data} text="Add +" fn={()=> {data.count++}}/>
            <Manipulator data={data} text="Subtract -" fn={()=> {data.count--}}/>
        </div>
    )
}