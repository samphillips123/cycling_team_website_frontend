import Partner from "../components/Partner"

const Partners = (props) => {
    return (
        <div className='flex flex-col absolute top-32 left-20 mr-12'>
            <h1 className='font-bold text-2xl'>Partners</h1>
            <div className='flex'>
                {props.partnersContent
                    .sort((a, b) => a.partnerLevel > b.partnerLevel ? 1 : -1)
                    .map((partner) => <Partner partner={partner} key={partner._id}
                    />)
                }
            </div>
        </div >
    )
}

export default Partners