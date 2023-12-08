import Member from "../components/Member"


const Team = (props) => {
    return props.teamContent.map((member) => <Member member={member} key={member._id} />)
}

export default Team