interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://futurerays-union.click/', // Write here your website url
	author: 'FutureRays労働組合', // Site author
	title: 'FutureRays労働組合', // Site title.
	description: 'FutureRays株式会社の従業員で構成された、自立的な労働組合です。', // Description to display in the meta tags
	lang: 'ja',
	ogLocale: 'ja_JP',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
