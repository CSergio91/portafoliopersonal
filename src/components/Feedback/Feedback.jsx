import React from 'react';

function Feedback() {
  const typeformEmbed = `
    <iframe width="100%" height="500" frameborder="1" color='white' src="https://fpbky5v2rul.typeform.com/to/sTchKdN1"></iframe>
  `;

  return (
    <div dangerouslySetInnerHTML={{ __html: typeformEmbed }} />
  );
}

export default Feedback;
