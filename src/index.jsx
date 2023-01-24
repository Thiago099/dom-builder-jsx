import "./style.less"

function card(data)
{
    const body = ref()
    var result =
    <div class="card">
        <div class="card-header" style="color:green">
            {data.Name}
        </div>
        <div class="card-body" ref={body} if={data.Propery && Object.entries(data.Propery).length > 0}>
        </div>
    </div>

    for(const Propery in data.Propery)
    {
        const propery_element = 
        <div>
            <span style="color:red">{Propery}</span>: {data.Propery[Propery]}
        </div>
        propery_element.parent(body)
    }
    return result
}

const main = 
<div class="container">
</div>

card({
    Name: "Pan",
})
.parent(main)

card({
    Name: "Pan plastic",
})
.parent(main)

card({
    Name: "Pan Metal",
    Propery: {
        temperature: "Hot",
    }
})
.parent(main)



card({
    Name: "{Something Hot}",
    Propery: {
        temperature: "Hot",
    }
})
.parent(main)



main.parent(document.body)