
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
                <p> {message}</p>
                <button onClick={onClose} className="p-2">
                    <i className="fa fa-close text-white"></i>
                </button>
            </div>
        </div>
    </div>;
};
export default Notification;