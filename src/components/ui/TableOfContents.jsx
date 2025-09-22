import React, { useState, useEffect, useRef } from 'react';
import slugify from '../../utils/helpers.js';

const TableOfContents = ({ blocks }) => {
    const [activeHeadingId, setActiveHeadingId] = useState('');
    const mobileTocRef = useRef(null); // Ref for the mobile scrolling container
    // Parse the Sanity blocks to extract only H2 and H3 headings
    const headings = blocks
        .filter(block => block.style === 'h2' || block.style === 'h3' )
        .map(block => ({
            id: slugify(block.children[0].text),
            text: block.children[0].text,
            level: block.style,
        }));
    // Effect to track which heading is currently active using IntersectionObserver
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveHeadingId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-50% 0px -50% 0px' } // Triggers when a heading is in the vertical center
        );
        headings.forEach(heading => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);
    // Effect to auto-scroll the active tab into view on the mobile tab bar
    useEffect(() => {
        if (activeHeadingId && mobileTocRef.current) {
            const activeTab = mobileTocRef.current.querySelector(`[data-id="${activeHeadingId}"]`);
            if (activeTab) {
                activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    }, [activeHeadingId]);
    // Don't render anything if there are no headings
    if (!headings.length) {
        return null;
    }
    // --- RENDER LOGIC ---
    return (<>
        {/* ============================================= /}
{/ 1. Desktop Version: Sticky Sidebar /}
{/ This is hidden by default and only appears on 'lg' screens and up. /}
{/ ============================================= */}
        <div className="hidden lg:block">
            <h3 className="font-press uppercase text-lg mb-4">On This Page</h3>
            <ul className="space-y-4 text-left ">
                {headings.map(heading => (
                    <li key={heading.id} className={heading.level === 'h3' ? 'ml-0' : ''}>
                        <a href={`#${heading.id}`} className={`block  transition-colors font-sans ${activeHeadingId === heading.id ? 'text-dark bg-highlight px-2' : 'text-gray-500 hover:text-dark'}`}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        {/* ============================================= */}
        {/* 2. Mobile Version: Scrolling Tab Bar        */}
        {/* This is visible by default and is hidden on 'lg' screens and up. */}
        {/* ============================================= */}
        <div
            ref={mobileTocRef}
            className="
      lg:hidden sticky top-[88px] z-30 /* Adjust top value to sit below navbar */
      bg-light py-3 border-y-4 border-dark
      overflow-x-auto whitespace-nowrap
      scrollbar-hide /* Optional: Hides the native scrollbar */
    "
        >
            <ul className="flex items-center gap-2 px-4">
                {headings.map(heading => (
                    <li key={heading.id}>
                        <a
                            href={`#${heading.id}`}
                            data-id={heading.id}
                            className={`
              block transition-all duration-200 font-sans whitespace-nowrap
              py-2 px-4 border-2 shadow-neo-sm text-sm
              ${activeHeadingId === heading.id
                                    ? 'bg-highlight text-dark border-dark'
                                    : 'bg-white text-dark border-dark'}
            `}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </>
    );
};

export default TableOfContents