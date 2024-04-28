import React, { useState } from 'react';
import { useEffect } from 'react';
import {useCurrentEditor, EditorProvider, useEditor} from "@tiptap/react";
import {Editor} from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
//Node in tiptap
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Heading from "@tiptap/extension-heading";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import OrderList from "@tiptap/extension-ordered-list";
import Blockquote from '@tiptap/extension-blockquote'
//Mark in tiptap
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
//Extension in tiptap
import CharacterCount from '@tiptap/extension-character-count'
import { Color } from '@tiptap/extension-color'
import History from '@tiptap/extension-history'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
//Utilities in tiptap
import { generateHTML } from '@tiptap/html'

const extensions = [
    StarterKit,
    BulletList
]
function MenuBar(){
        const {editor} = useCurrentEditor();
        if(!editor){
            return null;
        }
        return(
            <>
            
           <button onClick={()=>{editor.commands.clearContent(true)}}>clear content</button> 

            </>
        )
}
function OuputSection(){
    const {editor} = useCurrentEditor();
    return(
        <>
        <div >{JSON.stringify(editor.getJSON())}</div>
        </>
    );
}
function TextEditor(){
    return(
    <>
     <EditorProvider 
     slotBefore={<MenuBar/>}
      slotAfter={<OuputSection/>}
       extensions={extensions}
       injectCSS="false"
        />
    </>
    ); 
}
export default TextEditor;