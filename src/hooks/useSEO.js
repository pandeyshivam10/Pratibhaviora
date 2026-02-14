import { useEffect } from 'react';

const useSEO = ({ title, description }) => {
    useEffect(() => {
        // Update title
        if (title) {
            document.title = `${title} | Pratibhaviora Tech LLP`;
        }

        // Update meta description
        if (description) {
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = description;
                document.head.appendChild(meta);
            }
        }

        // Important for Open Graph titles too
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && title) {
            ogTitle.setAttribute('content', title);
        }
    }, [title, description]);
};

export default useSEO;
