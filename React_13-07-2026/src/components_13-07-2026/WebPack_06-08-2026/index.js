import React from 'react';
import Greet from './greet';
import math from './math';

function Index() {
  const sum = math(5, 7);

  return (
    <div>
      <p>Sum: {sum}</p>
      <Greet name="John" />
    </div>
  );
}

export default Index;