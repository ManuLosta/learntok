import React from 'react';

interface CalloutProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const Callout: React.FC<CalloutProps> = ({ icon, title, description, className }) => (
  <div className={`bg-gray-200 rounded-2xl p-4 flex items-start ${className}`}>
    <div className="mr-2 slate-500">
      {icon}
    </div>
    <div>
      <h4 className="typography-body font-bold mb-2">{title}</h4>
      <p className="typography-body ">{description}</p>
    </div>
  </div>
);

export default Callout;

