import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


export default function Component() {
    return (
        <div className="min-h-screen bg-[#f5f5f5] text-[#2c2c2c]">
            <header className="flex items-center justify-between p-4 bg-[#e0e0e0]">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold">YouBiblioWeb</h1>
                    <nav className="flex gap-4">
                        <Link href="#" className="text-lg" prefetch={false}>
                            Catalogo
                        </Link>
                        <Link href="#" className="text-lg" prefetch={false}>
                            Listas
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Input type="search" placeholder="Buscar" className="px-2 py-1 bg-white text-[#2c2c2c]" />
                    <Button variant="ghost" size="icon">
                        <SearchIcon className="w-5 h-5 text-[#2c2c2c]" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <EyeIcon className="w-5 h-5 text-[#2c2c2c]" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <MoonIcon className="w-5 h-5 text-[#2c2c2c]" />
                    </Button>
                    <div className="relative">
                        <Button variant="ghost" size="icon">
                            <Avatar>
                                <AvatarImage src="/placeholder-user.jpg" />
                                <AvatarFallback>P</AvatarFallback>
                            </Avatar>
                        </Button>
                        <div className="absolute right-0 mt-2 w-48 bg-white text-[#2c2c2c] rounded-md shadow-lg">
                            <ul className="py-2">
                                <li className="px-4 py-2 hover:bg-gray-200">
                                    <Link href="#" prefetch={false}>
                                        MI PERFIL
                                    </Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-200">
                                    <Link href="#" prefetch={false}>
                                        FAVORITOS
                                    </Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-200">
                                    <Link href="#" prefetch={false}>
                                        RESERVAS
                                    </Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-200">
                                    <Link href="#" prefetch={false}>
                                        PRESTAMOS
                                    </Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-200">
                                    <Link href="#" prefetch={false}>
                                        CERRAR SESION
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <main className="p-4">
                <div className="flex justify-center gap-8 mb-8">
                    <Button variant="outline" className="px-4 py-2 bg-[#e0e0e0] text-[#2c2c2c] hover:bg-[#d0d0d0]">
                        Populares <FlameIcon className="w-5 h-5 text-[#2c2c2c]" />
                    </Button>
                    <Button variant="ghost" className="px-4 py-2 text-[#2c2c2c] hover:bg-[#d0d0d0]">
                        Mas utilizados <HeartIcon className="w-5 h-5 text-[#2c2c2c]" />
                    </Button>
                    <Button variant="ghost" className="px-4 py-2 text-[#2c2c2c] hover:bg-[#d0d0d0]">
                        Educativos <GraduationCapIcon className="w-5 h-5 text-[#2c2c2c]" />
                    </Button>
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <div className="flex flex-col items-center">
                        <img src="/placeholder.svg" alt="El Hobbit" className="w-40 h-60 rounded-md" />
                        <p className="mt-2 text-[#2c2c2c]">El Hobbit</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/placeholder.svg" alt="La Guerra del Fin del Mundo" className="w-40 h-60 rounded-md" />
                        <p className="mt-2 text-[#2c2c2c]">La Guerra del Fin del Mundo</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/placeholder.svg" alt="Harry Potter" className="w-40 h-60 rounded-md" />
                        <p className="mt-2 text-[#2c2c2c]">Harry Potter</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/placeholder.svg" alt="Las Mil y Una Noches" className="w-40 h-60 rounded-md" />
                        <p className="mt-2 text-[#2c2c2c]">Las Mil y Una Noches</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/placeholder.svg" alt="Hamlet" className="w-40 h-60 rounded-md" />
                        <p className="mt-2 text-[#2c2c2c]">Hamlet</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

function EyeIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function FlameIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 1-5 0 2.5 1.5 4.5 3 6 .446-.922.556-2.287 0-4 1.342 1.035 3 2.405 3 5 0 4-3 6-6 6-2 0-2-2-2.5-2.5Z" />
            <path d="M16 19c.795-.982 1.5-2.5 1.5-4.5" />
        </svg>
    );
}

function GraduationCapIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m22 10-10-5-10 5 10 5 10-5Z" />
            <path d="m6 12-2 5h16l-2-5" />
            <path d="M12 22v-8" />
        </svg>
    );
}

function HeartIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8Z" />
        </svg>
    );
}

function MoonIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
    );
}

function SearchIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
        </svg>
    );
}



ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();


