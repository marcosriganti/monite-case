import Header from "./header";

const Modal = ({visible, onClose, title, children}) => {
    return (
        <>
            <div className={`${visible ? 'fixed' : 'hidden'} inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center`}>
                <div className="bg-white rounded-lg shadow-lg w-[500px] p-6">
                    <div className="flex justify-between items-center mb-6">
                        <Header type={'h2'}>{title}</Header>
                        <button className="text-gray-400 hover:text-gray-600" onClick={onClose}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </>);
};
export default Modal;