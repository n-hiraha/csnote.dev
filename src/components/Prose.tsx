import clsx from 'clsx'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export function Prose({ children, className }) {
  return (
    <div className={clsx(className, 'prose dark:prose-invert')}>
      <ReactMarkdown
        // remarkPlugins={[remarkGfm]}
        // rehypePlugins={[rehypeKatex]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={nord}
                language={match[1]}
                PreTag='div'
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code
                className={className ? className : 'bg-[#EFF3F9] py-1'}
                {...props}
              >
                {children}
              </code>
            )
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
