export default function Seo() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",

                    "@type": "Person",

                    name: "Vamsi Chilukuri",

                    jobTitle: "Senior Full Stack Developer",

                    url: "https://vamsichilukuri.dev",

                    sameAs: [
                        "https://github.com/vamsichilukuri",
                        "https://linkedin.com/in/vamsi-chilukuri-897b15197",
                    ],
                }),
            }}
        />
    );
}
