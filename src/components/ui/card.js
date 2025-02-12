export function Card({ className, children, ...props }) {
  return (
    <div className={`bg-white/10 rounded-lg p-6 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={`space-y-1.5 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={`text-lg font-semibold text-white ${className}`} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p className={`text-sm text-gray-300 ${className}`} {...props}>
      {children}
    </p>
  )
}
export function CardContent({ className, children, ...props }) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}