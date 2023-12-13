import Member from "../components/Member"


const Team = (props) => {
    return (
        <div className='flex'>
            {props.teamContent.map((member) => <Member member={member} key={member._id} />)}
        </div>
        
    )
}

export default Team