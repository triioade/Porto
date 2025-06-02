import React from "react";

interface AddressButtonProps {
  address: string;
}

const AddressButton: React.FC<AddressButtonProps> = ({ address }) => {
  const handleClick = () => {
    window.open(
      `ce/SMP+BUMI+PUTRA/@-6.5167308,106.8053907,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69c3d7375d7541:0xaf92ddd361ed63b2!8m2!3d-6.5167308!4d106.8102616!16s%2Fg%2F11f5k296c_!5m1!1e2?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 bg-blue-500 text-white rounded"
    >
      Lihat Alamat
    </button>
  );
};

export default AddressButton;
