// Initialize Lucide Icons
lucide.createIcons();

// Case Studies Data
const caseStudiesData = [
    {
        id: "hru-india",
        client: 'HRU India',
        industry: 'Retail & eCommerce',
        headline: 'Scaling Retail Attribution and Multi-Channel LTV',
        tags: ['Attribution Modeling', 'eCommerce Growth', 'Predictive AI'],
        kpiHighlights: [
            { label: 'Attribution Accuracy', value: '+45%' },
            { label: 'ROAS Stability', value: '2.5x' },
            { label: 'Omnichannel Velocity', value: '+30%' }
        ],
        overview: 'Resolved disjointed offline-to-online tracking for heavy retail footprints by implementing Server-Side tagging, capturing unified multi-touch attribution (MTA).',
        businessContext: 'HRU India possessed significant retail volume but lacked digital measurement infrastructure. Inability to map in-store purchasers to online campaigns restricted dynamic scaling of media spend.',
        strategicDiagnosis: 'Data fragmentation between POS and ad networks created artificial CAC inflation. The algorithm optimized for cheapest web traffic rather than highest LTV omni-channel buyers.',
        growthSystem: 'Engineered a unified closed-loop API connecting physical retail purchase data directly to Meta and Google using Conversion APIs (CAPI).',
        techStack: ['Meta CAPI', 'Google Analytics 4', 'Server-Side GTM', 'BigQuery'],
        financialImpact: 'Enabled deterministic scaling of ad budgets, resulting in a 2.5x stabilized ROAS regardless of seasonal volatility.',
        forecastModel: 'Long-term predictions indicate a compounding 12% YoY reduction in customer acquisition costs through ML-driven lookalike audiences fueled by normalized retail data.',
        scalability: 'The data pipelines operate independently. New store locations simply plug into the existing webhook infrastructure without requiring custom analytics integration.'
    },
    {
        id: "pyramids-skill",
        client: 'Pyramids Skill Tech Pvt. Ltd.',
        industry: 'EdTech & Training',
        headline: 'Structuring Multi-Tiered Acquisition Funnels',
        tags: ['Lead Scoring', 'CRM Architecture', 'Funnel Optimization'],
        kpiHighlights: [
            { label: 'Lead Quality', value: '+60%' },
            { label: 'Sales Cycle Time', value: '-25%' },
            { label: 'Pipeline Value', value: '2.1x' }
        ],
        overview: 'Re-architected the B2C acquisition pipeline for enterprise tech training by implementing rigorous lead scoring and CRM automation workflows.',
        businessContext: 'The client generated massive top-of-funnel lead volume, but sales teams were overwhelmed by low-intent inquiries, causing high-value prospects to churn due to slow SLA response times.',
        strategicDiagnosis: 'A sheer lack of programmatic qualification. Every lead was treated equally within the CRM, leading to misallocation of expensive human sales capital.',
        growthSystem: 'Integrated a behavioral scoring model tracking content consumption, webinar attendance, and demographic data. Routing high scores instantly to human reps, while low scores remained in automated nurture.',
        techStack: ['Salesforce', 'HubSpot', 'Zapier Enterprise', 'Python'],
        financialImpact: 'Doubled total pipeline value strictly by re-prioritizing existing lead flow. Decreased sales cycle time by 25% for high-intent cohorts.',
        forecastModel: 'Predictive churn modeling will identify at-risk students during long-term training programs to intervene automatically.',
        scalability: 'The scoring logic recalculates linearly as lead volume scales. Capable of handling 100k+ monthly leads with zero added sales-team overhead.'
    },
    {
        id: "ignited-ai",
        client: 'Ignited AI Business',
        industry: 'AI Products & SaaS',
        headline: 'Product-Led Growth (PLG) and Market Expansion',
        tags: ['GTM Strategy', 'Market Positioning', 'PLG Infrastructure'],
        kpiHighlights: [
            { label: 'User Activation', value: '+40%' },
            { label: 'CAC Payback', value: '< 3 Months' },
            { label: 'Organic Viral Coefficient', value: '1.2' }
        ],
        overview: 'Executed a complete product-led growth infrastructure shift, mathematically mapping adjacent TAMs for their AI toolsets.',
        businessContext: 'Initially operating as an agency, the business needed to pivot strictly to productized, self-serve SaaS models but lacked the onboarding architecture to convert free users to paid.',
        strategicDiagnosis: 'The conversion bottleneck wasn’t traffic; it was the "Time to First Value" (TTFV). The product was too complex without human intervention.',
        growthSystem: 'Deconstructed the complex SaaS interface into micro-conversion steps. Built automated, personalized onboarding paths depending on the user\'s self-declared industry.',
        techStack: ['Segment', 'Mixpanel', 'React/Next.js (Product)', 'Intercom'],
        financialImpact: 'Shortened the CAC payback period to under 3 months by increasing self-serve conversions and driving down reliance on SDR outreach.',
        forecastModel: 'Revenue expansion will rely heavily on feature-gating analytics. Projected 3x growth in NRR (Net Retention Rate).',
        scalability: 'The onboarding telemetry scales infinitely. New product features are integrated into the automated tour framework automatically based on usage data.'
    },
    {
        id: "greentech-residency",
        client: 'Greentech Residency',
        industry: 'High-Ticket Real Estate',
        headline: 'Dynamic Lead Scoring for High-Value Closings',
        tags: ['Omnichannel Workflow', 'Predictive Modeling', 'Sales Routing'],
        kpiHighlights: [
            { label: 'Sales Conversion', value: '+22%' },
            { label: 'Cost Per Appointment', value: '-35%' },
            { label: 'Aged Lead Revival', value: '15%' }
        ],
        overview: 'Implemented dynamic lead scoring and multi-touch omnichannel workflows to systematically convert aged real estate data into high-value closings.',
        businessContext: 'Selling high-ticket luxury real estate requires long sales cycles. The client had a database of 40,000+ aged leads that were considered "dead" by the sales team.',
        strategicDiagnosis: 'Sales teams manually sorted through spreadsheets. There was zero algorithmic intervention to detect when an aged lead suddenly started showing "ready-to-buy" digital signals (e.g., revisiting the pricing page).',
        growthSystem: 'Deployed a full-stack CRM lifecycle engine. Connected site analytics to email engagement. When an aged lead tripped a specific behavioral threshold, a high-priority SMS was dispatched to the lead, and a task was created for the top-performing broker.',
        techStack: ['ActiveCampaign', 'Twilio', 'Google Tag Manager', 'Custom Webhooks'],
        financialImpact: 'Revived 15% of the "dead" database into active pipeline, contributing to millions in top-line booked revenue with zero additional ad spend.',
        forecastModel: 'Implementing machine-learning driven pricing elasticity models to offer dynamic incentives to leads on the verge of closing.',
        scalability: 'The notification matrix handles concurrent broker routing. Ensures SLA compliance even during high-traffic launch events.'
    },
    {
        id: "greentech-miles",
        client: 'Greentech Miles',
        industry: 'Commercial Real Estate / Logistics',
        headline: 'B2B Pipeline Velocity Acceleration',
        tags: ['ABM Strategy', 'Data Warehousing', 'Telemetry'],
        kpiHighlights: [
            { label: 'Target Account Penetration', value: '85%' },
            { label: 'Enterprise Deal Velocity', value: '+40%' },
            { label: 'Marketing-Sales Alignment', value: '100%' }
        ],
        overview: 'Architected an Account-Based Marketing (ABM) data warehouse to synchronize B2B marketing and sales inputs through unified telemetry.',
        businessContext: 'Selling massive commercial logistics spaces requires targeting specific decision-makers. Generic digital advertising was burning budget on non-qualified commercial entities.',
        strategicDiagnosis: 'There was a structural disconnect between who marketing was acquiring and who sales could actually close. They lacked a unified Target Account List (TAL).',
        growthSystem: 'Replaced broad ad spend with hyper-targeted IP-based advertising and LinkedIn programmatic sequences matched against a rigid database of 500 ideal commercial tenants.',
        techStack: ['Clearbit', 'LinkedIn Ads API', 'Salesforce Enterprise', 'Tableau'],
        financialImpact: 'Increased enterprise deal velocity by 40% because sales reps were only speaking to pre-qualified, highly nurtured accounts.',
        forecastModel: 'Long-term value creation through geographic expansion algorithms identifying the next logical market based on competitor void analysis.',
        scalability: 'The ABM list updates dynamically via API based on company funding rounds and geographic footprint expansions.'
    },
    {
        id: "talcopi",
        client: 'Talcopi (Talent Co Pilot)',
        industry: 'HR Tech & Recruitment',
        headline: 'LLM-Driven Recruitment Automation Architecture',
        tags: ['LLM Integration', 'Marketplace Growth', 'AI Automation'],
        kpiHighlights: [
            { label: 'Sourcing Efficiency', value: '5x' },
            { label: 'Candidate Match Rate', value: '+75%' },
            { label: 'Time-to-Hire', value: '-45%' }
        ],
        overview: 'Deployed programmatic workflows and LLM parsing layers to replace manual HR functions, optimizing high-volume talent sourcing.',
        businessContext: 'As a rapidly scaling HR tech marketplace, Talcopi needed to match thousands of resumes to hundreds of job descriptions instantly, a task structurally impossible for human recruiters.',
        strategicDiagnosis: 'The core platform bottleneck was manual resume parsing and subjective candidate evaluation. Accuracy was low, and latency was high.',
        growthSystem: 'Integrated OpenAI/Claude API endpoints to mathematically extract resume vectors and cross-reference them against job requirement vectors using cosine similarity.',
        techStack: ['OpenAI API', 'Vector Databases (Pinecone)', 'Python Fast API', 'React'],
        financialImpact: 'Reduced total Time-to-Hire by 45%. Sourcing efficiency increased 5x, fundamentally changing the unit economics of the recruiting model.',
        forecastModel: 'The platform is positioned to capture compounding margins as API costs decrease and matching accuracy approaches 99%.',
        scalability: 'The architecture is infinitely scalable. Processing 10 resumes or 10,000 resumes utilizes the exact same serverless functions without human bottlenecks.'
    }
];

// Recharts Dummy Data Ported to Chart.js format
const barChartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
        {
            label: 'CAC',
            data: [400, 350, 300, 280],
            backgroundColor: '#EF4444', // Tailwind red-500
            borderRadius: 4,
            barThickness: 40
        },
        {
            label: 'LTV',
            data: [2400, 2800, 3200, 4100],
            backgroundColor: '#3B82F6', // Tailwind blue-500
            borderRadius: 4,
            barThickness: 40
        }
    ]
};

const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
        {
            label: 'Velocity',
            data: [45, 52, 68, 85, 110],
            borderColor: '#3B82F6',
            backgroundColor: '#3B82F6',
            borderWidth: 3,
            pointRadius: 4,
            pointBackgroundColor: '#3B82F6',
            pointBorderWidth: 0,
            tension: 0.4
        },
        {
            label: 'Baseline',
            data: [30, 30, 30, 30, 30],
            borderColor: '#6B7280',
            borderWidth: 2,
            borderDash: [5, 5],
            pointRadius: 0,
            fill: false,
            tension: 0
        }
    ]
};

// --- Case Studies Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const caseStudiesGrid = document.getElementById('case-studies-grid');

    if (caseStudiesGrid) {
        // Populate Grid
        caseStudiesData.forEach(study => {
            const card = document.createElement('div');
            card.className = "flex flex-col p-8 bg-surface border border-gray-800 rounded-xl hover:border-accent transition-all duration-300 relative group h-full cursor-pointer";

            let kpiHtml = study.kpiHighlights.slice(0, 3).map(kpi => `
        <div class="flex justify-between items-center text-sm">
            <span class="text-text-secondary">${kpi.label}</span>
            <span class="text-white font-mono font-medium">${kpi.value}</span>
        </div>
      `).join('');

            card.innerHTML = `
        <div class="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl"></div>
        <div class="relative z-10 flex flex-col flex-grow">
            <div class="flex flex-wrap gap-2 mb-4">
                <span class="text-xs font-mono px-2 py-1 bg-background border border-gray-700 text-text-secondary rounded">
                    ${study.industry}
                </span>
            </div>
            <p class="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                ${study.client}
            </p>
            <h2 class="text-xl font-display font-bold text-white leading-tight mb-6">
                ${study.headline}
            </h2>
            <div class="mt-auto space-y-3 mb-8">
                ${kpiHtml}
            </div>
            <button class="w-full py-3 bg-background border border-gray-700 hover:border-accent hover:bg-accent/10 text-white rounded font-medium transition-colors flex justify-center items-center text-sm view-arch-btn">
                View Architecture
                <i data-lucide="arrow-up-right" class="ml-2 w-4 h-4"></i>
            </button>
        </div>
      `;

            card.addEventListener('click', () => openModal(study));
            caseStudiesGrid.appendChild(card);
        });

        // Re-initialize icons for dynamically added elements
        lucide.createIcons();
    }

    // Modal Variables
    const modal = document.getElementById('case-study-modal');
    const modalClose = document.getElementById('modal-close');
    let barChartInstance = null;
    let lineChartInstance = null;

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    function openModal(study) {
        if (!modal) return;

        // Populate Modal Content
        document.getElementById('modal-client').textContent = study.client;
        document.getElementById('modal-headline').textContent = study.headline;
        document.getElementById('modal-overview').textContent = study.overview;
        document.getElementById('modal-context').textContent = study.businessContext;
        document.getElementById('modal-diagnosis').textContent = study.strategicDiagnosis;
        document.getElementById('modal-system').textContent = study.growthSystem;
        document.getElementById('modal-impact').textContent = study.financialImpact;
        document.getElementById('modal-scalability').textContent = study.scalability;
        document.getElementById('modal-forecast').textContent = study.forecastModel;

        const stackContainer = document.getElementById('modal-stack');
        stackContainer.innerHTML = study.techStack.map(tech => `
      <span class="text-xs font-mono px-3 py-1.5 bg-background border border-gray-700 text-text-secondary rounded">${tech}</span>
    `).join('');

        // Show Modal
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling

        // Initialize Charts
        initCharts();
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore scrolling

        // Destroy charts explicitly to avoid memory leaks/canvas re-use issues
        if (barChartInstance) barChartInstance.destroy();
        if (lineChartInstance) lineChartInstance.destroy();
    }

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Chart Setup configuration for consistent styling matching the previous library (Recharts) dark theme
    Chart.defaults.color = '#9CA3AF';
    Chart.defaults.font.family = 'Inter, sans-serif';

    function initCharts() {
        const ctxBar = document.getElementById('barChart');
        const ctxLine = document.getElementById('lineChart');

        if (!ctxBar || !ctxLine) return; // Charts might not be on current page

        // Destroy existing instances if they exist
        if (barChartInstance) barChartInstance.destroy();
        if (lineChartInstance) lineChartInstance.destroy();

        const commonOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#111827',
                    titleColor: '#F9FAFB',
                    bodyColor: '#F9FAFB',
                    borderColor: '#374151',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: true
                }
            },
            scales: {
                x: {
                    grid: { display: false, drawBorder: false },
                },
                y: {
                    grid: { color: '#374151', drawBorder: false, borderDash: [3, 3] },
                    beginAtZero: true
                }
            }
        };

        barChartInstance = new Chart(ctxBar, {
            type: 'bar',
            data: barChartData,
            options: commonOptions
        });

        lineChartInstance = new Chart(ctxLine, {
            type: 'line',
            data: lineChartData,
            options: commonOptions
        });
    }
});


// --- Contact Form EmailJS Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const successOverlay = document.getElementById('contact-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Set loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Encrypting Payload...';
            submitBtn.classList.add('bg-gray-700', 'text-gray-400', 'cursor-not-allowed');
            submitBtn.classList.remove('bg-accent', 'hover:bg-accent-hover');

            // NOTE: User must replace these with real keys for production
            // emailjs.init("YOUR_PUBLIC_KEY");
            const serviceID = 'YOUR_SERVICE_ID'; // Replace
            const templateID = 'YOUR_TEMPLATE_ID'; // Replace

            // Note: Since this is a test/demo, we'll simulate the successful email sending 
            // if EmailJS isn't configured, rather than throwing an error the user sees.

            // To actually use it, uncomment this code block and add keys:
            /*
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    showSuccess();
                }, (err) => {
                    console.error('Failed to send', err);
                    resetButton();
                    alert("Email delivery failed. Please check your EmailJS configuration.");
                });
            */

            // Simulated network request for demo purposes
            setTimeout(() => {
                showSuccess();
            }, 1000);

            function showSuccess() {
                successOverlay.classList.remove('hidden');
                contactForm.reset();
                resetButton();

                // Hide success message after 5 seconds
                setTimeout(() => {
                    successOverlay.classList.add('hidden');
                }, 5000);
            }

            function resetButton() {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Execute Transmission';
                submitBtn.classList.remove('bg-gray-700', 'text-gray-400', 'cursor-not-allowed');
                submitBtn.classList.add('bg-accent', 'hover:bg-accent-hover');
            }
        });
    }
});
