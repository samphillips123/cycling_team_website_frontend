import Member from "../components/Member"


const Team = (props) => {
    return (
        <div className='flex'>
            {props.teamContent
                .sort((a, b) => a.lastName > b.lastName ? 1 : -1)
                .map((member) => <Member member={member} key={member._id} />)}
        </div>

    )
}

export default Team