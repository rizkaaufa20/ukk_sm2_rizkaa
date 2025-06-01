import React from 'react';

const Home = () => {
  return (
    <div style={{ height: '100vh', margin: 0 }}>
      <iframe
        src="http://localhost:5174"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  );
};

export default Home;
