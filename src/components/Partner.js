const Partner = ({ partner }) => {
    return (
        <div className='border-2 border-black hover:border-4 rounded bg-slate-100'>
            <a href={partner.partnerUrl} target='_blank'>
                <img className='bg-slate-100 p-2 max-h-36' src={partner.partnerLogo.fields.file.url} alt={`Logo of team partner, ${partner.partnerName}`} />
            </a>
        </div>
    )
}

export default Partner