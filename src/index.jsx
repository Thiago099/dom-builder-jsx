import "./style.less"

function entity(name, properties){
    this.data = {
        Name: name,
        Propery: properties,
    }
    card(this).parent(main)
}

function card({data})
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
        var name = data.Propery[Propery]
        if(name instanceof entity)
        {
            name = data.Propery[Propery].data.Name
        }
        const propery_element = 
        <div>
            <span style="color:red">{Propery}</span>: {name}
        </div>
        propery_element.parent(body)
    }
    return result
}

const main = 
<div class="container">
</div>

const pan = new entity("Pan", {})
const pan_handle = new entity("Pan Handle", {})
const pan_body = new entity("Pan Body", { Temperature: "Hot" })

const bare_hands = new entity("Bare hands", {})

const _something_hot = new entity("<Something Hot>", { Temperature: "Hot" })

const touch = new entity("Touch", { Subject: _something_hot, Actor: bare_hands })

const burn = new entity("Burn", { Subject: bare_hands, Actor: _something_hot })

const causes = new entity("Causes", { Subject: touch, Actor: burn })





main.parent(document.body)