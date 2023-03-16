const Icon = ({ children, className, svgRef, transform, ...props }) => {
  return (
    <svg
      className={className}
      fill="currentColor"
      ref={svgRef}
      transform={transform}
      viewBox="0 0 128 128"
      width="128"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
};

export default Icon;
