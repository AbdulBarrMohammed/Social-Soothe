import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"


import mh9 from '../assets/mh9.png'
import mh10 from '../assets/mh10.png'

export function About() {

    const navigate = useNavigate()

    function handleClick() {
        navigate('/signUp')

    }


    return (
        <div className="bg-[#CCDBEE] flex flex-col text-[rgb(68,66,63)] h-screen">

            <div className="flex flex-wrap gap-10 items-center justify-center px-20 py-32 bg-[#CCDBEE]">
                <div className="flex flex-col gap-5 w-1/2">
                    <h2 className="text-2xl">About us</h2>
                    <h1 className="text-5xl font-bold">Helping those with social anxiety when no one else will</h1>
                    <p className="text-xl">Social Soothe's mission is to help those struggling with social anxiety better cope and provide a platform for individuals who feel unheard.
                        There are few mental health websites that specifically cater to those with social anxiety and are completely free, but Social Soothe is here to change that.
                    </p>
                    <div>
                        <button onClick={handleClick} className="bg-[#4470AD] rounded-full font-bold text-[18px] text-white shadow-md p-5">Sign up For free</button>
                    </div>
                </div>
                <div>
                    <img src={mh9} className="h-96"/>
                </div>
            </div>

            <div className="bg-[#ACC8EA] w-screen px-40 pb-40 flex gap-20 py-20 items-center justify-center">
                <div>
                    <img src={mh10} className="h-80"/>
                </div>
                <div className="flex flex-col gap-5 w-3/5">
                    <h1 className="text-5xl font-bold">Built to help you soothe and help you grow for everyone</h1>
                    <p className="text-xl">In Social Soothe, this platform is designed for everyone, regardless of gender, race or sexual orientation.
                        No one should feel alone, ashamed of having social anxiety, or pressured to conform to society's unfair social norms.
                    </p>
                </div>


            </div>

            <footer className='bg-[#99AFD7] flex flex-col justify-center items-center px-10 py-20 gap-10 w-full'>
                <div className='flex justify-around'>
                    <div className='flex flex-col gap-2 w-1/2'>
                    <p className='font-bold text-xl'>Your Mental Health matters</p>
                    <p className='text-[#44423F]'>If you are in a crisis or any other person life maybe in danger please don't use this site. Their are available resources that can give
                        you immediate help.
                    </p>
                    </div>

                </div>

            </footer>

            <footer className='bg-[#44423F] flex justify-center items-center text-white w-full px-10 py-10'>

                <div className='flex items-center gap-7'>
                    <p>&#169; Social Soothe</p>
                    <Link to={`/about`}><p className='hover:underline underline-offset-2'>About</p></Link>
                    <Link to={'/privacyPolicy'}><p className='hover:underline underline-offset-2'>Privacy policy</p></Link>

                </div>
            </footer>
        </div>
    )
}
