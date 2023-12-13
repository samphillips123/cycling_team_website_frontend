import { Link } from 'react-router-dom'
import TeamLogo from './TeamLogo'
import TeamSocials from './TeamSocials'
import { useMediaQuery } from '../utils/useMediaQuery';

const Footer = (props) => {
    // media query hook
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return (
        <>
            {
                isDesktop && (
                    <>
                        <div className='flex items-center justify-between'>
                            <Link to='/' className='m-20 shrink-0' >
                                {props.mainContent.map((team) => <TeamLogo team={team} key={team._id} />)}
                            </Link>
                            <div className='shrink-0'>
                                {props.mainContent.map((socials) => <TeamSocials socials={socials} key={socials._id} />)}
                            </div>
                        </div>
                    </>
                )
            }
            {
                !isDesktop && (
                    <>
                        <div className='flex flex-col items-center'>
                            <Link to='/' className='mt-20 shrink-0' >
                                {props.mainContent.map((team) => <TeamLogo team={team} key={team._id} />)}
                            </Link>
                            <div className='shrink-0'>
                                {props.mainContent.map((socials) => <TeamSocials socials={socials} key={socials._id} />)}
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Footer