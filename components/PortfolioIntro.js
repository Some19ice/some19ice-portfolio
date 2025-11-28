
const PortfolioIntro = ({ additionalText }) => {
    return (
        <div>
            <p className="text-md py-2 leading-8 text-foreground">
                As a Senior Scientific Officer and Director, I specialize in building national-scale data portals and immersive 3D navigation systems. I don't just build apps; I engineer complex geospatial solutions that drive efficiency and innovation. My experience spans leading technical teams, optimizing critical infrastructure, and delivering high-impact software for government and enterprise sectors.
            </p>
            <p className="text-md py-2 leading-8 text-foreground">
                I offer a wide range of services, including Geospatial Information Systems (GIS), full-stack development, and technical leadership.
            </p>
            {additionalText && (
                <p className="text-md py-2 leading-8 text-foreground">{additionalText}</p>
            )}
        </div>
    )
}

export default PortfolioIntro
