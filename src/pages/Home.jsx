import React from 'react';

export default function Home() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Tableau de bord</h2>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl mb-4">Bienvenue sur Super App</h3>
        <p className="text-gray-600">
          Explorez nos différents services et fonctionnalités. Naviguez dans le
          menu pour tout découvrir.
        </p>
      </div>
    </div>
  );
}
