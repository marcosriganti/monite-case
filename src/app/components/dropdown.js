
const Dropdown = ({id, options, ...rest}) => {
    return <select id={id}
        className="block w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        {...rest}>
        {options.map((vat) => {
            return <option key={vat.value} value={vat.value}>{vat.label}</option>;
        })}
    </select>;
};

export default Dropdown;