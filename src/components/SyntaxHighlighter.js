import React from "react"
import { Highlight, themes, defaultProps } from "prism-react-renderer"

const SyntaxHighlighter = (props) => {
  console.log(props)
  const { children, className } = props
  const language = className?.replace(/language-/, "") ?? ''
  if (!language) {
    // must be inline
    return (
      <code
        style={{
          // background: "var(--color-5)",
          padding: ".1em",
          color: "var(--color-bg-heavy)",
          fontWeight: '700'
        }}
        {...props}
      />
    )
  }
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={themes.dracula}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre
            className={className}
            style={{ ...style, padding: "20px", overflow: "auto" }}
          >
            {tokens.map((line, i) => {
              // do not render the empty line
              if (line[0].empty) {
                return null
              }
              return (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
            })}
          </pre>
        )
      }}
    </Highlight>
  )
}

export { SyntaxHighlighter as default }
