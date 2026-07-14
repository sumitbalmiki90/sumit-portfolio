export default function SchemaMarkup() {
    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Sumit Balmiki',
        jobTitle: 'Performance Marketing Head & AI Product / GTM Head',
        url: 'https://sumitbalmiki90.github.io/sumit-portfolio/',
        email: 'mailto:sumit.balmiki90@gmail.com',
        sameAs: [
            'https://www.linkedin.com/in/sumit-balmiki-39408b76/',
        ],
        knowsAbout: [
            'Performance Marketing',
            'Growth Strategy',
            'D2C & E-Commerce Marketing',
            'Real Estate Marketing',
            'Product Strategy',
            'Go-To-Market (GTM) Strategy',
            'AI SaaS Products',
            'CRM Engineering',
            'Revenue Operations',
        ],
        description: 'Sumit Balmiki is a Performance Marketing Head and AI Product & GTM operator with 12+ years of experience — running data-driven growth for D2C, e-commerce, and real estate, and taking AI-powered SaaS products from spec to launch to go-to-market.',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
    );
}
