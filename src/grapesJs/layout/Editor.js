// Editor.js
import React, { useEffect, useRef, useState } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import "./style.scss";
import { blockManager } from '../components/blockManager/BlockManager';
import { ReactComponent as CloseIcon } from "../../assets/images/sidebarIcons/close.svg";
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import RightBar from '../components/rightBar/RightBar';
import { styleManager } from '../components/styleManager/StyleManager';
// import { plugin1 } from '../components/plugin/Plugin';
import { Button } from '@mui/material'

const Editor = () => {
    const [editorValue, setEditorValue] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const editorRef = useRef(null);
    const [blocks, setBlocks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [expandedCategory, setExpandedCategory] = useState(null); // State to track expanded category


    useEffect(() => {
        // console.log("Initializing GrapesJS editor...");
        const editor = grapesjs.init({
            container: '#gjs',
            // blockManager: blockManager,
            fromElement: false,
            height: '100vh',
            width: 'auto',
            storageManager: true,
            allowScripts: true,
            panels: { defaults: [] },
            traitManager: {
                appendTo: "#traits-container",
                defaults: {},
            },

            deviceManager: {
                devices: [
                    {
                        name: 'Tab',
                        width: '480',
                        widthMedia: '480',
                    }]
            },
            selectorManager: {
                appendTo: '.styles-container'
            },
            styleManager: styleManager,
            blockManager: {
                appendTo: '#blocks',
                blocks: blockManager.blocks,
                categories: blockManager.categories,
            }
        });
        editor.Commands.add('show-styles', {
            getRowEl(editor) { return editor.getContainer().closest('.editor-row'); },
            getStyleEl(row) { return row.querySelector('.styles-container') },

            run(editor, sender) {
                const smEl = this.getStyleEl(this.getRowEl(editor));
                smEl.style.display = '';
            },
            stop(editor, sender) {
                const smEl = this.getStyleEl(this.getRowEl(editor));
                smEl.style.display = 'none';
            },
        });
        setEditorValue(editor);
        editorRef.current = editor; // Set the ref here
        // console.log("Editor initialized:", editorRef.current);

        // // Function to clear the canvas
        // const clearCanvas = (editor) => {
        //     editor.DomComponents.clear();
        //     editor.CssComposer.clear();
        //     editor.StorageManager.clear();
        //     editor.render();
        // };

        // // Event listener for the button
        // document.getElementById('clearCanvasButton').addEventListener('click', () => {
        //     clearCanvas(editor);
        // });
    }, []);



    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const getBlocksByCategory = () => {
        const blocks = editorRef.current?.BlockManager?.blocks;
        return blocks?.filter(block =>
            block.category?.id?.toLowerCase() === selectedCategory?.toLowerCase()
        ) || [];
    };

    useEffect(() => {
        if (selectedCategory) {
            const filteredBlocks = getBlocksByCategory();
            setBlocks(filteredBlocks);
        }
    }, [selectedCategory]);

    return (
        <div className='main-wrapper'>
            <div className="panel__top">
                <div className="panel-action">
                    <Header editorValue={editorValue} />

                </div>
            </div>
            <div className='side-menu'>
                <Sidebar
                    drawerVisible={drawerVisible}
                    setDrawerVisible={setDrawerVisible}
                    editorValue={editorValue}
                    editorRef={editorRef}
                    isOpen={sidebarOpen}
                    setExpandedCategory={setExpandedCategory}
                />
                <SwipeableTemporaryDrawer
                    drawerVisible={drawerVisible}
                    setDrawerVisible={setDrawerVisible}
                    editorRef={editorRef}
                    // setExpandedCategory={setExpandedCategory}
                    expandedCategory={expandedCategory}
                />
            </div>
            <div id="gjs"></div>


            <div class="panel__right">
                <RightBar />
                <div id="traits-container" />

                <div class="layers-container"></div>
                <div class="styles-container"></div>
            </div>

        </div>
    );
};

const SwipeableTemporaryDrawer = ({ drawerVisible, setDrawerVisible, editorRef, expandedCategory }) => {
    const handleClose = () => {
        setDrawerVisible(false);
    };

    useEffect(() => {
        if (!editorRef.current || !expandedCategory) return;

        const blockManager = editorRef.current.BlockManager;
        const blocks = blockManager.getAll().filter(block =>
            block.get('category')?.id.toLowerCase() === expandedCategory.toLowerCase()
        );

        const blocksContainer = document.getElementById('blocks');
        blocksContainer.innerHTML = ''; // Clear previous blocks

        blocks.forEach(block => {
            const blockElement = blockManager.render([block], { external: true });
            blocksContainer.appendChild(blockElement);
        });
    }, [expandedCategory, editorRef]);

    const handleDragStart = (e, block) => {
        e.dataTransfer.setData('block-id', block.id);
    };

    return (
        <div
            className="collapsible-mini-sidebar-content"
            id="collapsible-mini-sidebar-content"
            style={{ display: drawerVisible ? 'block' : 'none' }}
        >
            <div style={{ marginTop: "20px", marginLeft: "10px", fontSize: "18px" }}>
                {expandedCategory}
            </div>
            <div className="cross-button" onClick={handleClose}>
                <CloseIcon />
            </div>
            <div id="blocks"></div>
        </div>
    );
};

export default Editor;
