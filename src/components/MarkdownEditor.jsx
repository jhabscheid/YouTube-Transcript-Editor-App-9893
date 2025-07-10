import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

const MarkdownEditor = ({ content, onChange }) => {
  return (
    <div className="markdown-editor">
      <MDEditor
        value={content}
        onChange={onChange}
        preview="edit"
        height={500}
        data-color-mode="light"
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]]
        }}
        textareaProps={{
          placeholder: 'Your transcript will appear here once fetched. You can edit it as markdown...',
          style: {
            fontSize: 14,
            lineHeight: 1.5,
            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
          }
        }}
      />
    </div>
  );
};

export default MarkdownEditor;