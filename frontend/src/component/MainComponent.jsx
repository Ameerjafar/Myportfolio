import { ReactTyped } from 'react-typed';
import myImage from '../assets/myImage.jpg'
export function MainComponent() {
    return (
        <div>
            <div className='text-3xl p-20 pt-30'>
                <div className='pl-20 font-semibold'>
                    <div>Hello, </div>
                        I AM <ReactTyped strings={['AMEER JAFAR', 'A SOFTWARE DEVELOPER']} typeSpeed={200} backSpeed={200} loop/>
                    <div className = 'flex justify-end'>
                        <img className = 'w-1/3 rounded-full' src = {myImage} alt = 'This image is not present'></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
