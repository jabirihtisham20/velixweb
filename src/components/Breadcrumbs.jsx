import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center flex-wrap gap-2 text-xs sm:text-sm text-gray-400">
      <Link
        to="/"
        className="flex items-center gap-1.5 hover:text-[#00A8FF] transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-gray-600 shrink-0" />
            {isLast || !item.path ? (
              <span className="text-[#00A8FF] font-medium truncate max-w-[240px]">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="hover:text-[#00A8FF] transition-colors truncate max-w-[200px]"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
