import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Current hour: {currentTime.toLocaleTimeString()}</h2>
    </div>
  );
}

export default CurrentTime;