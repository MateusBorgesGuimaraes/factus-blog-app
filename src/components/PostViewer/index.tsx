'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Import types only
import type EditorJS from '@editorjs/editorjs';

interface PostViewerProps {
  data: any; // EditorJS output data
}

// Create a wrapper component for EditorJS
const EditorJSWrapper = ({ data }: PostViewerProps) => {
  const elementId = 'post-viewer';
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    // Load editor and tools dynamically
    const initEditor = async () => {
      const EditorJS = (await import('@editorjs/editorjs')).default;
      const Header = (await import('@editorjs/header')).default;
      const List = (await import('@editorjs/list')).default;
      const Paragraph = (await import('@editorjs/paragraph')).default;
      const Quote = (await import('@editorjs/quote')).default;
      const CodeTool = (await import('@editorjs/code')).default;
      const Marker = (await import('@editorjs/marker')).default;
      const InlineCode = (await import('@editorjs/inline-code')).default;
      const Underline = (await import('@editorjs/underline')).default;

      if (!editorRef.current) {
        const editor = new EditorJS({
          holder: elementId,
          data,
          readOnly: true,
          tools: {
            header: Header,
            paragraph: Paragraph,
            list: List,
            quote: Quote,
            code: CodeTool,
            marker: Marker,
            inlineCode: InlineCode,
            underline: Underline,
          },
        });

        editorRef.current = editor;
      }
    };

    initEditor();

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [data]);

  return <div id={elementId} />;
};

export const PostViewer = dynamic(() => Promise.resolve(EditorJSWrapper), {
  ssr: false,
});
