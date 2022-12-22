import { useLocation } from "react-router-dom"

import Message from "../Layouts/Message"

function Projectes(){

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }

    return(
        <div>
            <h1>Meus Projetos</h1>
            {message && <Message type="success" msg={message}/>}
        </div>
    )
}

export default Projectes