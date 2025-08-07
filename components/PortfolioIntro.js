
const PortfolioIntro = ({ additionalText }) => {
    return (
        <div>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Since the beginning of my journey as a freelance designer and developer, I&apos;ve
                done remote work for
                <span className="text-teal-500"> agencies </span>
                consulted for <span className="text-teal-500">startups </span>
                and collaborated with talented people to create digital products for both business
                and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                I offer a wide range of services, including brand design, programming and teaching.
            </p>
            {additionalText && (
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    {additionalText}
                </p>
            )}
        </div>
    )
}

export default PortfolioIntro
