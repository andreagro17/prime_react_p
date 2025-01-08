import { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import './Header.scss'; // Asegúrate de agregar los estilos en este archivo
import { Badge } from 'primereact/badge';
import SideBarComponent from './SideBar';

interface MenuItem {
    label: string;
    icon: string;
    shortcut?: string;
    template?: (item: MenuItem) => JSX.Element;
    separator?: boolean;
    items?: MenuItem[];
    badge?: number;
}
interface HeaderProps {
    setActivePage: (page: string) => void; // Recibe setActivePage como prop
  }
const Header: React.FC<HeaderProps> = ({ setActivePage }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const showSidebar = () => setSidebarVisible(true);
    const hideSidebar = () => setSidebarVisible(false);

    // Toggle theme
    const toggleTheme = (theme: string) => {
        if (theme === "dark") {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        } else {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }
    };

    // Check theme on page load
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        if (savedTheme === "dark") {
            document.body.classList.add("dark-theme");
            setIsDarkMode(true);
        } else {
            document.body.classList.add("light-theme");
        }
    }, []);

    const itemRenderer = (item: MenuItem) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && (
                <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
                    {item.shortcut}
                </span>
            )}
        </a>
    );

    const items = [
        { label: "Home", icon: "pi pi-fw pi-home", command: () => setActivePage('home') },
        { label: "Destinations", icon: "pi pi-fw pi-map", command: () => setActivePage('destinations') },
        {
            label: "Projects",
            icon: "pi pi-fw pi-bookmark",
            items: [
                {
                    label: "Core",
                    icon: "pi pi-bolt",
                    shortcut: "⌘+S",
                    template: itemRenderer,
                },
                {
                    label: "Blocks",
                    icon: "pi pi-server",
                    shortcut: "⌘+B",
                    template: itemRenderer,
                },
                {
                    label: "UI Kit",
                    icon: "pi pi-pencil",
                    shortcut: "⌘+U",
                    template: itemRenderer,
                },
                {
                    label: "Separator",
                    icon: "pi pi-minus",
                    separator: true,
                },
                {
                    label: "Templates",
                    icon: "pi pi-palette",
                    items: [
                        {
                            label: "Modo Claro",
                            icon: "pi pi-sun",
                            command: () => toggleTheme("light"),
                        },
                        {
                            label: "Modo Oscuro",
                            icon: "pi pi-moon",
                            command: () => toggleTheme("dark"),
                        },
                    ],
                },
            ],
        },
        { label: "Contact", icon: "pi pi-fw pi-phone", command: () => setActivePage('UserProfile')},
        { label: "Perfil", icon: "pi pi-fw pi-user", command: () => setActivePage('profile') },

    ];

    const start = (
        <img
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Indra-Sistemas-Logo.svg"
            style={{ width: "80px" }}
        />
    );

    const end = (
        <>
            {/* Sidebar Toggle Button */}
            <Button 
                label="Open Sidebar" 
                icon="pi pi-bars" 
                className="ml-2 p-button-outlined" 
                onClick={showSidebar}
            />
        </>
    );

    return (
        <header className="custom-header">
            {/* Sidebar Component */}
            <SideBarComponent
                visible={sidebarVisible} // Pass visibility
                onHide={hideSidebar} // Pass hide function
            />
            <Menubar model={items} start={start} end={end} className="menubar" />
        
           
        </header>
    );
};

export default Header;
