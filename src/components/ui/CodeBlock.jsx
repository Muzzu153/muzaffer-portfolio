import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula, dark, pojoaque, tomorrow, vs, xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { atomDark, coy, duotoneDark, duotoneEarth, duotoneForest, duotoneLight, duotoneSea, duotoneSpace, funky, okaidia, prism, twilight, xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = ({ value }) => {
  const { code, language } = value;

  if (!code) {
    return null;
  }

  return (
    // This is our neobrutalist container for the code
    <div className="my-8 border-4 border-dark shadow-neo">
      <div className="bg-dark text-light font-sans text-sm p-2 flex justify-between items-center">
        <span>{language || 'code'}</span>
        {/* You could add a "Copy" button here in the future */}
      </div>
      <SyntaxHighlighter
        language={language || 'text'}
        style={xonokai}
        wrapLines={true}
        customStyle={{
          // Override default styles from the theme here if needed
          margin: 0,
          borderRadius: 0,
          border: 'none',
          padding: '1.5rem',
        }}
        codeTagProps={{
          style: {
            // Set your desired code font here
            fontFamily: '"Fira Code", monospace',
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;