import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="font-normal text-center text-xl text-white">
        {progress}% Loaded
      </div>
    </Html>
  );
};

export default Loader;
