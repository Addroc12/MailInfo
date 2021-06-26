import React from "react"
import MailLib from "./MailLib"
import './library.css'
const Mail = ({mails,setCurrentmail}) => {

    return (
        <div style={{background:"#28344B",color:"white",textAlign:"center"}}>

            <div className="maillib" >
            {mails.map(mail => (<MailLib mails={mails}  setCurrentmail={setCurrentmail} mail={mail} key={mail.id} />))}
            </div>
        </div>
    )


}

export default Mail