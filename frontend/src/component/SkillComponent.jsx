export function SkillComponent() {
    return (
        <div>
            <div className = 'font-semibold text-2xl flex justify-center p-3'>Tech Stacks</div>
            <div>
                <div className = 'flex gap-3 text-center justify-center'>
                    <div className = 'w-36 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg'>next.js</div>
                    <div className = 'w-36 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg'>React.js</div>
                    <div className = 'w-36 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg'>express</div>
                </div><br></br>
                <div className = 'flex gap-3 justify-center text-center'>
                    <div className = 'w-36 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg'>java</div>
                    <div className = 'w-36 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg'>javascript</div>
                    <div className = 'w-36 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg'>typscript</div>
                </div><br></br>
                <div className = 'flex gap-3 justify-center text-center'>
                    <div className = 'w-36 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg'>Mongodb</div>
                    <div className = 'w-36 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg'>MySql</div>
                    <div className = 'w-36 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg'  >Postgress</div>
                </div>
            </div>
        </div>
    )
}