import React, { useState } from 'react'
import "./style.scss"
import SimpleImg from "../../../assets/images/sidebarIcons/simply.svg"
import Layout from "../../../assets/images/sidebarIcons/layout.svg"
import Templates from "../../../assets/images/sidebarIcons/template.svg"
import Video from "../../../assets/images/sidebarIcons/add-video.svg"
import Images from "../../../assets/images/sidebarIcons/add-photos.svg"
import ComponentIcon from "../../../assets/images/sidebarIcons/extra.svg"
import TextIcon from "../../../assets/images/sidebarIcons/Vector.svg"


const Sidebar = ({ editorRef, setDrawerVisible, setExpandedCategory, edit }) => {
    console.log("sidebar", edit)
    const [open, setIsOpen] = useState(false)

    const handleOpen = () => {
        setDrawerVisible(true)
    }

    const handleOpenDrawer = () => {
        setIsOpen(true)
    }

    const handlePhotosClick = () => {
        if (editorRef) {
            editorRef.current.runCommand('open-assets', {
                types: ['image'],
                accept: 'image/*',
                onSelect: (asset) => {
                    const imageUrl = asset.get('src');
                    editorRef.current.addComponents(`<img src="${imageUrl}" />`);
                },
            });
        }


    };

    const handleVideosClick = () => {
        if (editorRef.current) {
            editorRef.current.runCommand('open-assets', {
                types: ['video'],
                accept: 'video/*',
                onSelect: (asset) => {
                    const videoUrl = asset.get('src');
                    editorRef.current.addComponents(`<video src="${videoUrl}" controls></video>`);
                },
            });
        }
    };

    const handleTemplateClick = (categoryId) => {
        setDrawerVisible(true);
        setExpandedCategory(categoryId);
    };

    const handleLayoutClick = (categoryId) => {
        setDrawerVisible(true);
        setExpandedCategory("layout");
    };

    const handleCategoryClick = (categoryId) => {
        setExpandedCategory(categoryId);
        setDrawerVisible(true);
    };

    return (
        <div className='sidebar-container'>
            <div className='simply-image'>
                <img src={SimpleImg} alt='simply-x' />
            </div>

            <div className='side_menu' onClick={() => handleTemplateClick('Templates')}>
                <img src={Templates} />
                <div className='title_heading'>Templates</div>
            </div>
            <div className='side_menu' onClick={() => handleLayoutClick('Layout')} >
                <img src={Layout} />
                <div className='title_heading'>Layout</div>
            </div>
            <div className='side_menu' onClick={() => handlePhotosClick()}>
                <img src={Images} />
                <div className='title_heading'>Add Images</div>
            </div>

            <div className='side_menu' onClick={() => handleVideosClick()}>
                <img src={Video} />
                <div className='title_heading'>Add Videos</div>
            </div>

            <div className='side_menu' onClick={() => handleCategoryClick('Basic')}> 
                <img src={TextIcon} />
                <div className='title_heading'>Basics</div>
            </div>

            {/* <div className='side_menu' onClick={() => handleCategoryClick('Forms')}>  */}
                {/* <img src={Video} /> */}
                {/* <div className='title_heading'>Forms</div>
            </div> */}

            {/* <div className='side_menu' onClick={() => handleCategoryClick('Components')}>
                <img src={ComponentIcon} />
                <div className='title_heading'>Components</div>
            </div> */}



        </div>
    )
}

export default Sidebar