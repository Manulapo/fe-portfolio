import ReactMarkdown from 'react-markdown';

const MarkDownLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => <p className="mb-2">{children}</p>,
        strong: ({ children }) => (
          <strong className="font-semibold">{children}</strong>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {typeof children === 'string' ? children : String(children)}
          </a>
        ),
      }}
    >
      {children as string}
    </ReactMarkdown>
  );
};

export default MarkDownLayout;
