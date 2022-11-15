const data = effect({count:1})

const e = 
    <button >
        Count is: {()=>data.count}
    </button>

e.parent(document.body)
.effect(data)
.event('click', () => {
    data.count++;
})
