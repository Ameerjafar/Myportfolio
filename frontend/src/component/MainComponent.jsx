import ReactTyped from 'react-typed'

export function MainComponent() {
    return (
        <div>
            <div className = 'text-3xl p-20 pt-30'>
                <div className = 'pl-20'>
                    <div>Hello, </div>
                    <div>
                        <ReactTyped strings = {['I AM AMEER JAFAR', 'I AM A SOFTWARE DEVELOPER']} typeSpeed = {200} backSpeed = {200} loop/>
                    </div>
                    <div>I AM THE SOFTWARE DEVELOPER</div>
                </div>
            </div>
        </div>
    )
}