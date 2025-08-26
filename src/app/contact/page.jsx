"use client";
import { Layout } from '@/components/Layout/Layout'
import { Contact } from '@/components/Sections/Contact/Contact';
import { Queries } from '@/components/Sections/Queries/Queries';

const page = () => {
    return (
        <Layout activeSidebarLink="contact">
            <Contact />
            <Queries />
        </Layout>
    )
}

export default page;