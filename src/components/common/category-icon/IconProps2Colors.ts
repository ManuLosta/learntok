import React from 'react';

export interface IconProps2Colors extends React.SVGAttributes<SVGElement> {
  size: number;
  foreground?: string;
  background?: string;
}
