import NavigationLink from "@/components/navigationLink";

const options = {
    routes: [
        {
            'path': '/',
            'name': 'Home',
            'icon': 'tachometer',
        },
        {
            'path': '/transactions',
            'name': 'Transactions',
            'icon': 'exchange',
        },
        {
            'path': '/invoices',
            'name': 'Invoices',
            'icon': 'file',
        },
        {
            'path': '/incoming-bills',
            'name': 'Incoming Bills',
            'icon': 'dollar',
        },
        {
            'path': '/expenses',
            'name': 'Expenses',
            'icon': 'book',
        },
        {
            'path': '/accounting',
            'name': 'Accounting',
            'icon': 'calculator',
        },
        {
            'path': '/team',
            'name': 'Team',
            'icon': 'users',
        },
        {
            'path': '/other',
            'name': 'Other',
            'icon': 'ellipsis-h',
        },
        {
            'path': '/settings',
            'name': 'Settings',
            'icon': 'cog',
        }
    ]
};
const Navigation = () => {

    return <nav className="space-y-6">
        {options.routes.map((route, index) => {
            return <NavigationLink key={`${route.path}-${index}`} path={route.path} name={route.name} icon={route.icon} />;
        })}
    </nav>;
};

export default Navigation;