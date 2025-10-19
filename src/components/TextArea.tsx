import React, { useState, forwardRef } from 'react'
interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  fullWidth?: boolean
  maxLength?: number
  showCounter?: boolean
}
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      maxLength,
      showCounter = false,
      className = '',
      onChange,
      value,
      ...props
    },
    ref,
  ) => {
    const [charCount, setCharCount] = useState(
      typeof value === 'string' ? value.length : 0,
    )
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length)
      if (onChange) {
        onChange(e)
      }
    }
    return (
      <div className={`mb-4 ${fullWidth ? 'w-full' : ''}`}>
        <div className="flex justify-between items-center mb-1">
          {label && (
            <label
              htmlFor={props.id}
              className="block text-sm font-medium text-gray-700"
            >
              {label}
            </label>
          )}
          {showCounter && maxLength && (
            <span
              className={`text-xs ${charCount > maxLength ? 'text-red-600' : 'text-gray-500'}`}
            >
              {charCount}/{maxLength}
            </span>
          )}
        </div>
        <textarea
          ref={ref}
          className={`rounded-md shadow-sm border-gray-300 focus:border-primary focus:ring-primary ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''} ${fullWidth ? 'w-full' : ''} ${className}`}
          onChange={handleChange}
          value={value}
          maxLength={maxLength}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500">{helperText}</p>
        )}
      </div>
    )
  },
)
TextArea.displayName = 'TextArea'
