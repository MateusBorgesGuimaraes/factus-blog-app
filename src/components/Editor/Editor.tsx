'use client';

import { useEffect, useRef, useState } from 'react';
import EditorJS, { ToolConstructable } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import CodeTool from '@editorjs/code';
import Marker from '@editorjs/marker';
import InlineCode from '@editorjs/inline-code';
import Underline from '@editorjs/underline';

export default function Editor() {
  const editorRef = useRef<EditorJS | null>(null);
  const elementId = 'editorjs';
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (!editorRef.current && document.getElementById(elementId)) {
      editorRef.current = new EditorJS({
        holder: elementId,
        placeholder: 'Escreva aqui...',

        tools: {
          header: {
            class: Header as unknown as ToolConstructable,
            inlineToolbar: true,
            config: {
              placeholder: 'Digite um título...',
              levels: [2, 3, 4, 5, 6],
              defaultLevel: 2,
            },
          },
          paragraph: {
            class: Paragraph as unknown as ToolConstructable,
            inlineToolbar: true,
          },
          list: {
            class: List as unknown as ToolConstructable,
            inlineToolbar: true,
          },
          quote: {
            class: Quote as unknown as ToolConstructable,
            inlineToolbar: true,
            config: {
              quotePlaceholder: 'Digite uma citação...',
              captionPlaceholder: 'Autor',
            },
          },
          code: CodeTool as unknown as ToolConstructable,
          marker: Marker as unknown as ToolConstructable,
          inlineCode: InlineCode as unknown as ToolConstructable,
          underline: Underline as unknown as ToolConstructable,
        },
      });
    }

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy?.();
        editorRef.current = null;
      }
    };
  }, [isClient]);

  return isClient ? <div id={elementId}></div> : null;
}
