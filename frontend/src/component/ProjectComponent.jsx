export function ProjectComponent() {
    return (
        <div>
            <div className = 'flex justify-center p-3 text-2xl font-semibold'>Projects</div>
            <div className = 'flex justify-center gap-3'>
                <div className = 'bg-gray-200 h-44 rounded-lg font-bold'>
                    <a href = "https://github.com/Ameerjafar/BlogApp.git">This is blog app</a>
                </div>
                <div className = 'bg-gray-200 h-44 rounded-lg font-bold'>
                    <a href = "https://github.com/Ameerjafar/ExpenseTracker-Frontend.git">This is expanse tracker website</a>
                </div>
                <div className = 'bg-gray-200 hover:bg-gray-300 h-44 rounded-lg font-bold'>
                    <a href = 'https://github.com/Ameerjafar/paytm-clone.git'>This is paytm clone application</a>
                </div>
            </div>
        </div>
    )
}