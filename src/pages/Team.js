import { useMediaQuery } from '../utils/useMediaQuery';
import Member from "../components/Member"

const Team = (props) => {
    // media query hook
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return (
        <div className='flex flex-col absolute left-10 top-32'>
            <h1 className='font-bold text-2xl mb-4'>Team</h1>
            <div className={
                isDesktop
                    ? 'grid grid-cols-[220px,220px,220px,220px] gap-6 place-items-center'
                    : 'grid grid-cols-[220px,220px] gap-6 place-items-center'
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