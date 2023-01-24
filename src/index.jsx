import "./style.less"

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

function entity(name, properties){
    this.data = {
        Name: name,
        Propery: properties,
        Id: uuidv4()
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
            {/* <span class="id">{data.Id}</span> */}
        </div>
        <div class="card-body" ref={body} if={data.Propery && Object.entries(data.Propery).length > 0}>
        </div>
    </div>

    for(const Propery in data.Propery)
    {
        function parse_prop(name)
        {
            if(name instanceof entity)
            {
                return name.data.Name
            }
            if(Array.isArray(name))
            {
                return name.map(x=><div>{parse_prop(x)}</div>)
            }
            return name
        }
        var name = parse_prop(data.Propery[Propery])
        
        const propery_element = 
        <div>
            <div class="property-container">
                <span style="color:red">{Propery}</span>:&nbsp;<span class="property-group">{name}</span>
            </div>
        </div>
        propery_element.parent(body)
    }
    return result
}

const main = 
<div class="container">
</div>

const hot = new entity("Hot",{})

const pan_handle = new entity("Pan Handle", {})
const pan_body = new entity("Pan Body", { Temperature: hot })
const pan = new entity("Pan", {Parts:[pan_handle, pan_body]})

const bare_hands = new entity("Bare hands", {})

const _something_hot = new entity("<Something Hot>", { Temperature: hot })

const touch = new entity("Touch", { Subject: _something_hot, Actor: bare_hands })

const burn = new entity("Burn", { Subject: bare_hands, Actor: _something_hot })

const causes = new entity("Causes", { Subject: touch, Actor: burn })




main.parent(document.body)