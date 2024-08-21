
// eslint-disable-next-line react/prop-types
export default function GitHubLink({ repoUrl, imageUrl, altText }) {
    return (
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <img className="github-link-image" src={imageUrl} alt={altText} />
        </a>
    );
}

