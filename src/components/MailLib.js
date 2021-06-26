
const MailLib = ({mail,setCurrentmail}) => {

    const mailSelectHandler = async() => {

        const selectedSong = mail
        console.log(mail)
        await setCurrentmail(selectedSong)
    
    }

    return (
        <div onClick={mailSelectHandler} style={{border:"1px solid white",  borderLeft: "0px solid",borderRight:" 0px solid"}}>
            <div style={{padding:"0",margin:"0"}}>
            <h3>{mail.subject}</h3>
            <h4>{mail.date}</h4>
         
            </div>
        
        </div>
    )


}

export default MailLib