
const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke={"var(--text-input-primary-color)"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 12s4-8 11-8 11 8 11 8M1 12s4 8 11 8 11-8 11-8"
    />
    <circle
      cx={12}
      cy={12}
      r={3}
      stroke={"var(--text-input-primary-color)"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
)
export default SvgComponent
