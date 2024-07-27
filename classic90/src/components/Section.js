import React from 'react';

export default function Section({ children, container, p, space }) {
  return (
    <section style={{ padding: p }}>
      <div className="container">
        {React.Children.map(children, (child, index) => (
          <div style={{ marginTop: index !== 0 ? space : 0 }}>
            {child}
          </div>
        ))}
      </div>
    </section>
  );
}
