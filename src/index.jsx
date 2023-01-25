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
        header.style.fontSize = size + "px"
        while(header.offsetWidth > 400)
        {
            size -= 1
            header.style.fontSize = size + "px"
        }
    })

    for(const Propery in data.Propery)
    {
        function parse_prop(name)
        {
            if(name instanceof entity)
            {
                if(name.data.Propery.Any)
                {
                    return <div style="color:blue">{name.data.Name}</div>
                }
                return <div>{name.data.Name}</div>
            }
            if(Array.isArray(name))
            {
                return name.map(x=>parse_prop(x))
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

function isAny(inpersonation, entity)
{
    for(const [key, value] of Object.entries(inpersonation.data.Propery))
    {
        if(key == "Any")
        {
            if(entity.data.Propery["Generic"] != value)
            {
                return false
            }
        }
        else
        if(entity.data.Propery[key] != value)
        {
            return false
        }
    }
    return true
}

const main = 
<div class="container">
</div>

const hot = entity("Hot",{})
const object = entity("Object",{})
const touch = entity("Touch",{})
const burn = entity("Burn",{})
const causes = entity("Causes",{})
const bare_hands = entity("Bare hands", {})

const pan_handle = entity("Pan Handle", {})
const pan_body = entity("Pan Body", { Generic:object,Temperature: hot })
// const pan = entity("Pan", {Parts:[pan_handle, pan_body]})

const touch_pan_body = entity("Touch pan body", {  Generic:touch ,Actor: bare_hands ,Subject: pan_body})

const _something_hot = entity("<Something hot>", { Any: object,Temperature: hot })

const _touch = entity("Touch something hot", {  Generic: touch ,Actor: bare_hands ,Subject: _something_hot})

const _burn = entity("Burn your hands", { Generic:burn,Actor: _something_hot ,Subject: bare_hands})

const _causes = entity("Touch something hot cases you to burn your hands", { Generic:causes, Cause: _touch, Effect: _burn })

console.log(isAny(_something_hot,pan_body))


main.parent(document.body)