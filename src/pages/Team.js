import Member from "../components/Member"

const Team = (props) => {
    return (
        <div className='flex flex-col absolute top-32 left-20 mr-12'>
            <h1 className='font-bold text-2xl'>Team</h1>
            <div className='flex'>
                {props.teamContent
                    .sort((a, b) => a.lastName > b.lastName ? 1 : -1)
                    .map((member) => <Member member={member} key={member._id} />)}
            </div>
        </div>

    )
}

export default Team