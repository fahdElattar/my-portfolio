import { QueryItem } from '@/components/QueryItem/QueryItem'
import { SectionHead } from '@/components/SectionHead/SectionHead'
import React from 'react'

export const Queries = () => {
    return (
        <section id="queries">
            <SectionHead
                title={"Common Queries"}
                iconName={"question"}
                description={"Get Answers to Common Queries. Your Questions, Addressed Simply."}
            />
            <div className="queries-wrapper grid grid-cols-1 gap-3 md:grid-cols-2">
                <div className="queries-column flex flex-col gap-3">
                    <QueryItem />
                    <QueryItem />
                </div>

                <div className="queries-column flex flex-col gap-3">
                    <QueryItem />
                    <QueryItem />
                </div>
            </div>
        </section>
    )
}