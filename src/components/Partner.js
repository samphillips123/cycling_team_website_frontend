const Partner = ({ partner }) => {
    return (
        <div>
            <a href={partner.partnerUrl} target='_blank'>
                <img src={partner.partnerLogo.fields.file.url} alt={`Logo of team partner, ${partner.partnerName}`} />
            </a>
        </div>
    )
}

export default Partner