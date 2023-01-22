export default function RefExample()
{

    const ref = {}

    const container = <div>
        <button class="button" ref={[ref,"main"]}>Main</button>
        <button class="button" ref={[ref,"secondary"]}>Secondary</button>
    </div>

    ref.main.event("click", () => alert("Main button clicked") )
    ref.secondary.event("click", () => alert("Secondary button clicked") )

    return container
}