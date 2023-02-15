import React from 'react';
import { Wrapper } from './Page.style';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from '../MenuBar/MenuBar';
import { TypeWriterNode } from '../../tiptap/nodes';

export type PageProps = {};

export function Page(props: PageProps) {
    const editor = useEditor({
        extensions: [StarterKit, TypeWriterNode],
        content: '<p>Hello World!</p>',
    });

    return (
        <Wrapper className='Page-wrapper' data-testid='Page-wrapper'>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </Wrapper>
    );
}

export default Page;
