import React, { useEffect, useRef } from 'react';

const Model = ({ modelTitle, children, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [onClose]);

  return (
    <div className='fixed inset-0 bg-black/40 flex justify-center items-center z-99'>
      <div
        ref={modalRef}
        className='border border-[#E9EAEB] bg-white rounded-2xl w-[430px] px-5 pt-9 pb-1.5 max-h-[90vh] overflow-y-auto mx-4 my-6'
      >
        <h3 className='text-2xl font-bold text-[#2F3542] mb-2.5 text-center'>{modelTitle}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Model;
