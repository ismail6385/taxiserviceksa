
'use client';

import { useEffect, useRef } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { createRoot } from 'react-dom/client';

interface BlogContentProps {
    content: string; // HTML content
}

export default function BlogContent({ content }: BlogContentProps) {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!contentRef.current) return;

        const container = contentRef.current;
        const headers = container.querySelectorAll('h2');

        let faqHeader: Element | null = null;

        // 1. Find the FAQ Header
        headers.forEach(h2 => {
            if (h2.textContent?.toLowerCase().includes('frequently asked questions') || h2.textContent?.includes('FAQ')) {
                faqHeader = h2;
            }
        });

        if (faqHeader) {
            // 2. Identify all Q&A pairs following the header
            const questions: { question: string, answer: string }[] = [];
            let nextSibling = (faqHeader as Element).nextElementSibling;

            // Collect siblings until the next H2 or end of container
            while (nextSibling && nextSibling.tagName !== 'H2') {
                // Check for H3 (Question) or STRONG at start of P (sometimes markdown does this)
                // We primarily look for H3 as per standard markdown structure
                if (nextSibling.tagName === 'H3' || (nextSibling.tagName === 'P' && nextSibling.querySelector('strong'))) {
                    const questionText = nextSibling.tagName === 'H3'
                        ? (nextSibling.textContent || '')
                        : (nextSibling.querySelector('strong')?.textContent || '');

                    if (!questionText) {
                        nextSibling = nextSibling.nextElementSibling;
                        continue;
                    }

                    let answerHTML = '';

                    // The answer is the rest of the P or subsequent Ps
                    let answerSibling = nextSibling.nextElementSibling;

                    // If we found a P with strong as title, we might need to handle content inside that P too? 
                    // Simpler assumption: H3 is question, Ps are answer.

                    if (nextSibling.tagName === 'P' && nextSibling.querySelector('strong')) {
                        // If it's a P with Strong, the rest of the P might be the answer, or next Ps
                        // This is tricky. Let's stick to H3 for now as standard KORAY prompt usually produces ### Question
                    }

                    while (answerSibling && answerSibling.tagName !== 'H3' && answerSibling.tagName !== 'H2' && !(answerSibling.tagName === 'P' && answerSibling.querySelector('strong'))) {
                        answerHTML += answerSibling.outerHTML;
                        const toRemove = answerSibling;
                        answerSibling = answerSibling.nextElementSibling;
                        toRemove.remove();
                    }

                    if (answerHTML) {
                        questions.push({ question: questionText, answer: answerHTML });
                    }

                    const qToRemove = nextSibling;
                    nextSibling = answerSibling;
                    qToRemove.remove();
                } else {
                    nextSibling = nextSibling.nextElementSibling;
                }
            }

            // 3. Render Accordion if questions found
            if (questions.length > 0) {
                const accordionContainer = document.createElement('div');
                accordionContainer.className = 'mt-6 not-prose';
                (faqHeader as Element).after(accordionContainer);

                const root = createRoot(accordionContainer);
                root.render(
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

                // Cleanup
                return () => {
                    setTimeout(() => root.unmount(), 0);
                    if (accordionContainer.parentNode) {
                        accordionContainer.remove();
                    }
                };
            }
        }
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
