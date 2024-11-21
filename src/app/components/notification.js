
const Notification = ({message, state = 'success', onClose}) => {
    let style = '';
    switch (state) {
        case 'success':
            style = 'border-emerald-500 bg-emerald-500';
            break;
        case 'error':
            style = 'border-red-500 bg-red-500';
            break;
        default:
            style = 'border-gray-500 bg-gray-500';
            break;
    }
    return <div className="absolute bottom-4 left-4">
        <div role="alert">
            <div className={`${style} border border-t-0  rounded-lg  py-7 pl-8 pr-4 gap-4 text-white text-sm flex flex-row items-center justify-between`}>
                {/* <p>The 'Kilos' was added as a new measuring unit</p> */}
                <p> {message}</p>
                <button onClick={onClose} className="p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" color="#FFF" fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </div>;
};
export default Notification;