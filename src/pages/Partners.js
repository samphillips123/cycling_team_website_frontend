import Partner from "../components/Partner"

const Partners = (props) => {
    return (
        <div className='flex'>
            {props.partnersContent.map((partner) => <Partner partner={partner} key={partner._id} />)}
        </div>
    )
}

export default Partners