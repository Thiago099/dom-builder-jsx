import "./style.css"
const data = effect({count:1});


const e = 
    <button 
        effect={data} 
        parent={document.body}
    >
        Count is: {()=>data.count}
    </button>

e.event('click', () => {
    data.count++;
})
