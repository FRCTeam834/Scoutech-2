import React from 'react'
import BaseInputProps from './BaseInputProps'

export interface SelectInputProps extends BaseInputProps {
    options: Record<string, string>
    defaultValue: string
  }


  const App: React.FunctionComponent = () => {
      const divClickedHandler = (event: React.MouseEvent<HTMLDivElement>) => {
          const div = event.CurrentTarget;
      }
  }
var submit = document.createElement("input");
submit.type = "button";
document.body.appendChild(submit);

submit.onclick