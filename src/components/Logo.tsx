import React from 'react';
import { Link } from 'react-router-dom';
export function Logo() {
  return <Link to="/" className="flex flex-col items-start">
      <span className="text-xl font-extrabold tracking-tighter text-blue-600">
        HAND
        <span className="text-orange-500">IT</span>
        DOWN
      </span>
      <span className="text-xs font-bold tracking-wider" style={{
      color: '#043927'
    }}>
        SAC STATE
      </span>
    </Link>;
}