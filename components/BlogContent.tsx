
'use client';
import React from 'react';

import { useEffect, useRef } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { createRoot } from 'react-dom/client';

import { ArrowRight, Check, X, Info } from 'lucide-react';

interface BlogContentProps {
    content: string; // HTML content
}

export default function BlogContent({ content }: BlogContentProps) {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!contentRef.current) return;

        const container = contentRef.current;
        const cleanupFunctions: (() => void)[] = [];

        // --- Helper to create and manage React roots ---
        const renderReactComponent = (element: Element, Component: React.ReactNode) => {
            const wrapperDiv = document.createElement('div');
            element.replaceWith(wrapperDiv); // Replace the original element with our wrapper
            const root = createRoot(wrapperDiv);
            root.render(Component);
            cleanupFunctions.push(() => {
                setTimeout(() => root.unmount(), 0);
                if (wrapperDiv.parentNode) {
                    wrapperDiv.remove();
                }
            });
            return wrapperDiv; // Return the new wrapper div
        };

        // --- 1. Table of Contents (TOC) ---
        const tocItems: { id: string; text: string; level: number }[] = [];
        const allHeaders = container.querySelectorAll('h2, h3');
        let tocContainer: HTMLDivElement | null = null;

        allHeaders.forEach((header, index) => {
            const text = header.textContent?.trim();
            if (text) {
                const id = header.id || `section-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
                header.id = id;
                tocItems.push({ id, text, level: parseInt(header.tagName.substring(1)) });
            }
        });

        if (tocItems.length > 0) {
            tocContainer = document.createElement('div');
            tocContainer.className = 'not-prose mb-8 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200';
            const tocTitle = document.createElement('h3');
            tocTitle.className = 'text-lg font-semibold text-gray-900 mb-4';
            tocTitle.textContent = 'Table of Contents';
            tocContainer.appendChild(tocTitle);

            const tocList = document.createElement('ul');
            tocList.className = 'space-y-2';

            tocItems.forEach(item => {
                const listItem = document.createElement('li');
                listItem.className = item.level === 3 ? 'ml-4 text-sm' : 'text-base';
                const link = document.createElement('a');
                link.href = `#${item.id}`;
                link.className = 'text-primary hover:text-primary-dark hover:underline flex items-center';
                if (item.level === 3) {
                    link.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>${item.text}`;
                } else {
                    link.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" /></svg>${item.text}`;
                }
                listItem.appendChild(link);
                tocList.appendChild(listItem);
            });
            tocContainer.appendChild(tocList);
            container.prepend(tocContainer); // Add TOC at the very beginning
            cleanupFunctions.push(() => {
                if (tocContainer && tocContainer.parentNode) {
                    tocContainer.remove();
                }
            });
        }

        // --- 2. Process Pros, Cons, Key Takeaways ---
        const processSection = (headerText: string, icon: React.ElementType, iconColor: string, bgColor: string, borderColor: string) => {
            const header = Array.from(container.querySelectorAll('h2, h3')).find(h =>
                h.textContent?.toLowerCase().includes(headerText.toLowerCase())
            );

            if (header) {
                const items: string[] = [];
                let nextSibling = header.nextElementSibling;
                const elementsToRemove: Element[] = [header];

                while (nextSibling && (nextSibling.tagName === 'UL' || nextSibling.tagName === 'OL')) {
                    Array.from(nextSibling.children).forEach(li => {
                        items.push(li.innerHTML);
                    });
                    elementsToRemove.push(nextSibling);
                    nextSibling = nextSibling.nextElementSibling;
                }

                if (items.length > 0) {
                    const sectionComponent = (
                        <div className={`not-prose my-8 p-6 rounded-lg border ${borderColor} ${bgColor}`}>
                            <h3 className={`flex items-center text-lg font-semibold text-gray-900 mb-4`}>
                                {React.createElement(icon, { className: `h-6 w-6 mr-3 ${iconColor}` })}
                                {header.textContent}
                            </h3>
                            <ul className="space-y-3 list-none p-0 m-0">
                                {items.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-700">
                                        {React.createElement(icon, { className: `h-5 w-5 mr-3 flex-shrink-0 ${iconColor}` })}
                                        <span dangerouslySetInnerHTML={{ __html: item }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );

                    // Replace the first element to remove (the header) with the new component
                    const newWrapper = renderReactComponent(header, sectionComponent);

                    // Remove the rest of the original elements
                    elementsToRemove.slice(1).forEach(el => el.remove());
                }
            }
        };

        processSection('pros', Check, 'text-green-600', 'bg-green-50', 'border-green-200');
        processSection('cons', X, 'text-red-600', 'bg-red-50', 'border-red-200');
        processSection('key takeaways', Info, 'text-blue-600', 'bg-blue-50', 'border-blue-200');


        // --- 3. FAQ Section ---
        const faqHeader = Array.from(container.querySelectorAll('h2')).find(h2 =>
            h2.textContent?.toLowerCase().includes('frequently asked questions') || h2.textContent?.includes('FAQ')
        );

        if (faqHeader) {
            const questions: { question: string, answer: string }[] = [];
            let nextSibling = faqHeader.nextElementSibling;
            const elementsToRemove: Element[] = [faqHeader];

            while (nextSibling && nextSibling.tagName !== 'H2') {
                if (nextSibling.tagName === 'H3' || (nextSibling.tagName === 'P' && nextSibling.querySelector('strong'))) {
                    const questionText = nextSibling.tagName === 'H3'
                        ? (nextSibling.textContent || '')
                        : (nextSibling.querySelector('strong')?.textContent || '');

                    if (!questionText) {
                        nextSibling = nextSibling.nextElementSibling;
                        continue;
                    }

                    let answerHTML = '';
                    let answerSibling = nextSibling.nextElementSibling;
                    elementsToRemove.push(nextSibling); // Add question element to removal list

                    while (answerSibling && answerSibling.tagName !== 'H3' && answerSibling.tagName !== 'H2' && !(answerSibling.tagName === 'P' && answerSibling.querySelector('strong'))) {
                        answerHTML += answerSibling.outerHTML;
                        elementsToRemove.push(answerSibling); // Add answer element to removal list
                        answerSibling = answerSibling.nextElementSibling;
                    }

                    if (answerHTML) {
                        questions.push({ question: questionText, answer: answerHTML });
                    }
                    nextSibling = answerSibling; // Move to the next potential question or H2
                } else {
                    elementsToRemove.push(nextSibling); // Add non-Q&A elements between FAQ header and next H2 to removal list
                    nextSibling = nextSibling.nextElementSibling;
                }
            }

            if (questions.length > 0) {
                const accordionComponent = (
                    <Accordion type="single" collapsible className="w-full">
                        {questions.map((q, i) => (
                            <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary hover:no-underline py-4">
                                    {q.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 pb-4">
                                    <div dangerouslySetInnerHTML={{ __html: q.answer }} />
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                );

                // Replace the FAQ header with the new accordion component
                const newWrapper = renderReactComponent(faqHeader, <div className="mt-6 not-prose">{accordionComponent}</div>);

                // Remove all other original elements that were part of the FAQ section
                elementsToRemove.slice(1).forEach(el => el.remove());
            }
        }

        // --- Cleanup function ---
        return () => {
            cleanupFunctions.forEach(cleanup => cleanup());
        };

    }, [content]);

    return (
        <article
            ref={contentRef}
            className="prose prose-lg max-w-none 
                prose-headings:text-gray-900 prose-headings:font-bold prose-headings:mt-10 prose-headings:mb-6
                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                prose-p:text-gray-600 prose-p:leading-8 prose-p:mb-6
                prose-a:text-primary hover:prose-a:text-primary-dark prose-a:no-underline
                prose-strong:font-bold prose-strong:text-gray-900
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
                prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6
                prose-li:mb-2 text-gray-600
                prose-table:w-full prose-table:border-collapse prose-table:mb-8 prose-table:rounded-lg prose-table:overflow-hidden prose-table:shadow-sm
                prose-thead:bg-gray-50
                prose-th:border-b prose-th:border-gray-200 prose-th:p-4 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900
                prose-td:border-b prose-td:border-gray-100 prose-td:p-4 prose-td:bg-white
                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-12 prose-img:w-full prose-img:object-cover"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
