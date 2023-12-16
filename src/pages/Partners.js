import { useMediaQuery } from '../utils/useMediaQuery';
import Partner from "../components/Partner"

const Partners = (props) => {
    // media query hook
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return (
        <div className='flex flex-col absolute top-32 left-20 mr-12'>
            <h1 className='font-bold text-2xl'>Partners</h1>
            <div className={
                isDesktop
                    ? 'grid grid-cols-4 gap-6'
                    : 'grid grid-cols-2 gap-6'
            }
            >
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