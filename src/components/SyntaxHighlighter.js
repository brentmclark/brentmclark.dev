import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import dracula from "prism-react-renderer/themes/dracula"

const SyntaxHighlighter = ({ children, className }) => {
  const language = className.replace(/language-/, "")
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={dracula}
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
