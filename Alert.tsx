import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface AlertProps {
  text: string;
  onDismiss?: () => void;
}

export const Alert: React.FC<AlertProps> = ({ text, onDismiss }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-md bg-yellow-500/10 border border-yellow-500/20 text-yellow-200 text-xs md:text-sm">
      <div className="flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
        <span>{text}</span>
      </div>
      {onDismiss && (
        <button onClick={onDismiss} className="text-yellow-400 hover:text-yellow-100 transition-colors">
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};