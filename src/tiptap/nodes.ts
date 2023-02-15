import { Node } from '@tiptap/core';
import { mergeAttributes, wrappingInputRule } from '@tiptap/react';

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        typeWriter: {
            /**
             * Types text
             */
            type: (text: string) => ReturnType;
        };
    }
}

export interface TypeWriterOptions {
    HTMLAttributes: Record<string, any>;
}

export const TypeWriterNode = Node.create({
    name: 'typeWriter',

    addOptions() {
        return {
            HTMLAttributes: {},
        };
    },

    content: 'typeWriter+',

    group: 'typeWriter',

    defining: true,

    parseHTML() {
        return [{ tag: 'p' }];
    },

    renderHTML({ HTMLAttributes }) {
        return [
            'blockquote',
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
            0,
        ];
    },

    addCommands() {
        return {
            type:
                (text: string) =>
                ({ commands }) => {
                    let index = 0;

                    const that = commands;
                    setTimeout(() => {
                        that.insertContent(text);
                    });

                    for (let char of text.split('')) {
                        index++;

                        setTimeout(() => {
                            console.log('char ->', char);
                            that.insertContentAt(10, char);
                        }, 10 * index);
                    }
                    return true;
                },
        };
    },

    addKeyboardShortcuts() {
        return {
            'Mod-Shift-b': () => this.editor.commands.toggleBlockquote(),
        };
    },

    addInputRules() {
        return [
            wrappingInputRule({
                find: inputRegex,
                type: this.type,
            }),
        ];
    },
});

export const inputRegex = /^\s*>\s$/;
