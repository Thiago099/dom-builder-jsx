export default function RefExample()
{

    const ref = {}

    const container = <div>
        <button class="button" id="main" ref={ref}>Main</button>
        <button class="button" id="secondary" ref={ref}>Secondary</button>
    </div>

    ref.main.event("click", () => alert("Main button clicked") )
    ref.secondary.event("click", () => alert("Secondary button clicked") )

    return container
}