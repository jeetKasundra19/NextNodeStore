import React from "react";

export default function Section({ children, container, p, py, px, space }) {
  const paddingStyles = {
    padding: p,
    paddingTop: py,
    paddingBottom: py,
    paddingLeft: px,
    paddingRight: px,
  };

  return (
    <section style={paddingStyles}>
      <div className={container === "fill" ? null : "container"}>
        {React.Children.map(children, (child, index) => (
          <div style={{ marginTop: index !== 0 ? space : 0 }}>{child}</div>
        ))}
      </div>
    </section>
  );
}
