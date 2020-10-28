import React from "react"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/oceanicNext"
import { Pre, Line, LineNo, LineContent } from "./styles/Code.styles"
import "./styles/language-tabs.css"

const Code = ({ codeString, language, ...props }) => {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={codeString}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight" data-language={language}>
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        </div>
      )}
    </Highlight>
  )
}

export default Code
