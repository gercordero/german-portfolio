import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"
import Code from "./Code"

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
}

const MDXCode = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)

export default MDXCode
