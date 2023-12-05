import Partner from "../components/Partner"

const Partners = (props) => {
    return props.content.map((partner) => <Partner partner={partner} key={partner._id} />)
}

export default Partners