interface MCPProps {
  width?: string
  height?: string
  className?: string
  stroke?: string
}

export function MCP({ width = '24', height = '24', className, stroke = 'currentColor' }: MCPProps) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2"
    >
      <path d="M8 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 15h3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3" y="4" width="18" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
