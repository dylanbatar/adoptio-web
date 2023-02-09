import React from "react";

export interface LoadingProps {
  show: boolean;
}

export const Loading = ({ show }: LoadingProps) => {
  return (
    <>
      {show && (
        <div className="flex justify-center g">
          <p className="text-center font-medium text-2xl pt-5 text-indigo-900">
            Seaching cutes cats for adoption
          </p>
        </div>
      )}
    </>
  );
};
