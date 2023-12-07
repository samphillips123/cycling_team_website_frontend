const Partner = ({ partner }) => {
    return (
        <div>
            {/* <img src={partner.partnerLogo.fields.file.url} alt={`Logo of team partner, ${partner.partnerName}`} /> */}
            <h3>{partner.partnerName}</h3>
        </div>
    )
}

export default Partner