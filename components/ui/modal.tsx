/* eslint-disable @typescript-eslint/no-explicit-any */
'user client';

import React from 'react';
import Button from '@/components/ui/button';

export type ModalProps = {
  open?: boolean;
  title?: string;
  message?: string;
  onOk?: () => void;
};

const Modal = (props: ModalProps) => {
  return props.open ? (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 w-full h-full z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 w-120 min-h-48 p-5 rounded flex flex-col items-start z-20">
          <div className="w-full text-gray-700 mb-5">
            <h4 className="mb-5 border-b border-gray-300">{props.title}</h4>
            <div className="text-sm">{props.message}</div>
          </div>
          <div className="w-full mt-auto text-center">
            <Button onClick={props.onOk}>OK</Button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default Modal;
