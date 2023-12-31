import { useMediaQuery } from '../utils/useMediaQuery';
import Partner from "../components/Partner"

const Partners = (props) => {
    // media query hook
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return (
        <div className='m-24'>
            <h1 className='font-bold text-2xl mb-4'>Partners</h1>
            <div className='flex flex-col justify-center items-center'>
                <div className={
                    isDesktop
                        ? 'grid grid-cols-[220px,220px,220px,220px] gap-6 place-items-center'
                        : 'grid grid-cols-[220px,220px] gap-6 place-items-center'
                }
                >
                    {props.partnersContent
                        .sort((a, b) => a.partnerLevel > b.partnerLevel ? 1 : -1)
                        .map((partner) => <Partner partner={partner} key={partner._id}
                        />)
                    }
                </div>
            </div >
        </div>

    )
}

export default Partners