import React from 'react';

/**
 * @param {Object[]} items  Liste des éléments du menu
 * @param {string}   active Élément actuellement sélectionné
 * @param {Function} onSelect  Callback (id) => void
 */
export default function Sidebar({ items, active, onSelect }) {
  return (
    <aside className="w-64 bg-white shadow-lg h-screen overflow-y-auto">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold text-center">Super App</h1>
      </div>

      <nav className="mt-4">
        {items.map(item => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`
              w-full flex items-center p-3 text-left transition-colors
              ${active === item.id
                ? 'bg-blue-100 text-blue-600'
                : 'hover:bg-gray-100'}
            `}
          >
            <span className="mr-3">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
