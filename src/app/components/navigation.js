import NavigationLink from "@/components/navigationLink";

const options = {
    routes: [
        {
            'path': '/',
            'name': 'Home',
            'icon': 'home',
        },
        {
            'path': '/transactions',
            'name': 'Transactions',
            'icon': 'transaction',
        },
        {
            'path': '/invoices',
            'name': 'Invoices',
            'icon': 'invoice',
        },
        {
            'path': '/incoming-bills',
            'name': 'Incoming Bills',
            'icon': 'incoming',
        },
        {
            'path': '/expenses',
            'name': 'Expenses',
            'icon': 'expenses',
        },
        {
            'path': '/accounting',
            'name': 'Accounting',
            'icon': 'accounting',
        },
        {
            'path': '/team',
            'name': 'Team',
            'icon': 'people',
        },
        {
            'path': '/other',
            'name': 'Other',
            'icon': 'box',
        },
        {
            'path': '/settings',
            'name': 'Settings',
            'icon': 'settings',
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