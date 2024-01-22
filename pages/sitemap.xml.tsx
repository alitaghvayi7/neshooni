

// const BASE_URL = 'https://avir.co.com'

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({res}: { res: any }) => {

    const allPaths = [
        '/',
        '/tourist',
        '/tourist/id',
        '/tourist/id/comment',
        '/business',
        '/business/id',
        '/business/id/comment',
        '/news',
        '/news/social-media',
        '/news/social-media/id',
        '/news/wire-service',
        '/news/wire-service/id',
        '/news/organization',
        '/news/organization/id',
        '/auth',
        '/profile',
        '/profile?tab=info',
        '/profile?tab=your-introduction',
        '/profile?tab=your-bookmark',
        '/introduction'
    ]

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      
      ${allPaths
        .map((url) => {
            return `
              <url>
                <loc>${url}</loc>
              </url>
            `;
        })
        .join("")}
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;