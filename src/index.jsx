import "./style.less"

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

function entity(name, properties){
    if(!this) 
    {
        return new entity(name, properties);
    }

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
    const header = ref()


    var result =
    <div class="card">
        <div class="card-header" style="color:green">
            <span ref={header}>
                {data.Name}
            </span>
            {/* <span class="id">{data.Id}</span> */}
        </div >
        <div class="card-body" ref={body} if={data.Propery && Object.entries(data.Propery).length > 0}>
        </div>
    </div>

    header.mounted(() => {
        var size = 30;
        while(header.offsetWidth > 400)
        {
            header.style.fontSize = size + "px"
            size -= 1
        }
    })

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

const hot = entity("Hot",{})
const objects = entity("Object",{})
const touch = entity("Touch",{})
const burn = entity("Burn",{})
const causes = entity("Causes",{})
const bare_hands = entity("Bare hands", {})

const pan_handle = entity("Pan Handle", {})
const pan_body = entity("Pan Body", { Temperature: hot })
const pan = entity("Pan", {Parts:[pan_handle, pan_body]})

const touch_pan_body = entity("Touch pan body", {  Generic:touch ,Actor: bare_hands ,Subject: pan_body})

const _something_hot = entity("Something hot", { Generic: objects,Temperature: hot })

const _touch = entity("Touch something hot", {  Generic: touch ,Actor: bare_hands ,Subject: _something_hot})

const _burn = entity("Burn your hands", { Generic:burn,Actor: _something_hot ,Subject: bare_hands})

const _causes = entity("Touch something hot cases you to burn your hands", { Generic:touch, Cause: _touch, Effect: _burn })




main.parent(document.body)