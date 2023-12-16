import { useMediaQuery } from '../utils/useMediaQuery';
import Member from "../components/Member"

const Team = (props) => {
    // media query hook
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return (
        <div className='flex flex-col absolute top-32 left-20 mr-12'>
            <h1 className='font-bold text-2xl mb-4'>Team</h1>
            <div className={
                isDesktop
                    ? 'grid grid-cols-4 gap-6'
                    : 'grid grid-cols-2 gap-6'
            }
            >
                {props.teamContent
                    .sort((a, b) => a.lastName > b.lastName ? 1 : -1)
                    .map((member) => <Member member={member} key={member._id}
                    />)
                }
            </div>
        </div>

    )
}

export default Team