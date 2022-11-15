import "./style.css"
const data = effect({count:1});


function Counter()
{
    const data = effect({count:0});

    const button = 
        <button 
            class="button" 
            effect={data}
        >
            Count is { () => data.count }
        </button>

    button
        .class('button-active', () => data.count > 0)
        .event('click', () => {
            data.count++;
        })

    return button;
}


<div parent={document.body}><Counter/></div>



