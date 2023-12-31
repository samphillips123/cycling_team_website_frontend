const Member = ({ member }) => {
    return (
        <div className='border-2 border-black hover:border-4 rounded bg-slate-100'>
            <img className='max-h-72' src={member.headShotImg.fields.file.url} alt={`Headshot of ${member.firstName} ${member.lastName}.`} />
            <div className='flex items-center justify-center bg-slate-100'>
                <img className='m-2 bg-slate-100' src={`https://flagsapi.com/${member.homeCountryCode}/shiny/32.png`} alt={`Flag representing team members' home country of ${member.homeCountry}`} />
                <span className='m-2 font-extrabold text-xl bg-slate-100' >{member.firstName} {member.lastName}</span>
            </div>
        </div>
    )
}

export default Member