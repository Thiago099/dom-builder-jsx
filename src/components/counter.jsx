export default function Counter()
{
    const data = effect( { count: 0 } )

    const button = 
        <button 
            class="button" 
            effect={data}
        >
            Count is: { () => data.count }
        </button>

    button.event("click", () => data.count++ )

    return button
}