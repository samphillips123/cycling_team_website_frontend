import Partner from "../components/Partner"

const Partners = (props) => {
    return (
        <div className='flex'>
            {props.partnersContent
                .sort((a, b) => a.partnerLevel > b.partnerLevel ? 1 : -1)
                .map((partner) => <Partner partner={partner} key={partner._id} />)}
        </div>
    )
}

export default Partners