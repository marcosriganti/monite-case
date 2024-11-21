
const Checkbox = ({type, ...rest}) => <input type={type || 'checkbox'} className="w-4 h-4 border-gray-300 text-blue-500 focus:ring-blue-400" {...rest} />;;

export default Checkbox;