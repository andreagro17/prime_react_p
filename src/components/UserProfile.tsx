import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const UserProfile: React.FC = () => {
    const [user, setUser] = useState({
        name: 'Juan Pérez',
        email: 'juan.perez@example.com',
        password: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const saveChanges = () => {
        alert('Cambios guardados: ' + JSON.stringify(user));
    };

    return (
        <div className="user-profile">
            <h2>Perfil de Usuario</h2>
            <div className="p-fluid">
                <div className="p-field">
                    <label htmlFor="name">Nombre</label>
                    <InputText id="name" name="name" value={user.name} onChange={handleInputChange} />
                </div>
                <div className="p-field">
                    <label htmlFor="email">Correo Electrónico</label>
                    <InputText id="email" name="email" value={user.email} onChange={handleInputChange} />
                </div>
                <div className="p-field">
                    <label htmlFor="password">Contraseña</label>
                    <InputText id="password" name="password" type="password" onChange={handleInputChange} />
                </div>
                <Button label="Guardar Cambios" icon="pi pi-save" onClick={saveChanges} />
            </div>
        </div>
    );
};

export default UserProfile;
