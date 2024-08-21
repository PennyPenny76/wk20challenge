import GitHubLink from './UI/GitHubLink';
import BucketListImage from '../Assets/bucketlist.png'; // 调整路径以匹配你的图片位置

const repoLinks = [
    {
        repoUrl: 'https://github.com/PennyPenny76/wk20miniproject',
        imageUrl: BucketListImage,
        altText: 'Mini Project Repo'
    },
    // 你可以在这里添加更多的 GitHub 仓库链接
    // {
    //     repoUrl: 'https://github.com/yourusername/another-repo',
    //     imageUrl: AnotherImage,
    //     altText: 'Another Repo'
    // }
];

export default function GitHubLinkContainer() {
    return (
        <div className="github-link-container">
            {repoLinks.map((link, index) => (
                <GitHubLink
                    key={index}
                    repoUrl={link.repoUrl}
                    imageUrl={link.imageUrl}
                    altText={link.altText}
                />
            ))}
        </div>
    );
}
